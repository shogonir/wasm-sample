import Module from '../wasm/add';

export default class WasmUtils {
  
  static initialize() {
    this.isInitialized = false;
    fetch('../wasm/add.wasm')
      .then(response => response.arrayBuffer())
      .then(buffer => new Uint8Array(buffer))
      .then(binary => {
        let moduleArgs = {
          wasmBinary: binary,
          onRuntimeInitialized: function() {
            WasmUtils.readFunctions();
          }
        };
        this.module = Module(moduleArgs);
      });
  }

  static readFunctions() {
    this.functions = {};
    this.functions.add = this.module.cwrap('add', 'number', ['number', 'number']);
    this.isInitialized = true;
  }

  static add(a, b) {
    if (!(this.isInitialized && this.functions && this.functions.add)) {
      return null;
    }
    return this.functions.add(a, b);
  }
}

