var _consoleLogIntArray = function(pointer, size) {
  var position = pointer / 4;
  var int32Array = new Int32Array(size);
  int32Array.set(module.HEAP32.subarray(position, position + size));
  console.log(int32Array);
}

