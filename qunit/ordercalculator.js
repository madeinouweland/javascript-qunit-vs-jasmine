// to test, run ./tests/tester.html

export { calculateTotalPrice, calculateTotalItems, calculateTotalOrderLines }

function calculateTotalPrice(orderLines) {
  return orderLines.reduce((acc, cur) => cur.price * cur.quantity + acc, 0);
}

function calculateTotalItems(orderLines) {
  return orderLines.reduce((acc, cur) => cur.quantity + acc, 0);
}

// designed to fail
function calculateTotalOrderLines(orderLines) {
  return -1;
}
