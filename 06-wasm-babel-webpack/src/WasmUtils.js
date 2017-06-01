import Module from '../wasm/add';

export default class WasmUtils {
  
  static initialize() {
    WasmUtils.isInitialized = false;

    return new Promise((resolve, reject) => {
      let timeout = setTimeout(() => {
        clearTimeout(timeout);
        reject();
      }, 1200);

      fetch('../wasm/add.wasmn')
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.arrayBuffer();
        })
        .then(buffer => new Uint8Array(buffer))
        .then(binary => {
          let moduleArgs = {
            wasmBinary: binary,
            onRuntimeInitialized: () => {
              WasmUtils.readFunctions();
              WasmUtils.isInitialized = true;
              clearTimeout(timeout);
              resolve();
            }
          };
          WasmUtils.module = Module(moduleArgs);
        })
        .catch(() => {
          clearTimeout(timeout);
          reject();
        });
    });
  }

  static readFunctions() {
    if (!WasmUtils.isInitialized) {
      return null;
    }
    WasmUtils.functions = {};
    WasmUtils.functions.add = WasmUtils.module.cwrap('add', 'number', ['number', 'number']);
  }

  static add(a, b) {
    if (!(WasmUtils.isInitialized && WasmUtils.functions && WasmUtils.functions.add)) {
      return null;
    }
    return WasmUtils.functions.add(a, b);
  }
}

