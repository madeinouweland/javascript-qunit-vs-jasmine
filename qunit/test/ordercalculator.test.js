import { calculateTotalPrice, calculateTotalItems, calculateTotalOrderLines } from '../ordercalculator.js';

QUnit.test("Order tests", function(assert) {
  let orderItems = [
    { price: 2, quantity: 3},
    { price: 3, quantity: 4}
  ];

  // https://api.qunitjs.com/assert/equal
  assert.equal(calculateTotalPrice(orderItems), 18, "Total order price calculated correctly" );
  assert.equal(calculateTotalItems(orderItems), 7, "Total order items calculated correctly" );

  // expect to fail
  assert.equal(calculateTotalOrderLines(orderItems), 2, "Total order lines calculated correctly" );
});
