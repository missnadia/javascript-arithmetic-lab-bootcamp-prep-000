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
function preserveDecimal(z) {
  var z = '0.456';
  parseFloat(z);
  return z;
}
function isNaN() {
  var c = 'apple';
  parseInt(c, 10);
  return isNan();
}
