var x = 4;
var y = 2;

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
function inc(x) {
  return x += 1;
}
function dec(x) {
  return x -= 1;
}
function makeInt(x) {
  parseInt(x, 10);
  return x;
}
var a = 'apple';
function isNaN(a) {
  if(a === NaN) {
    return 'true';
} else {
    return 'false';
  }
}
}
function preserveDecimal(z) {
  var z = '0.456';
  parseFloat(z);
  return parseInt(z);
}
