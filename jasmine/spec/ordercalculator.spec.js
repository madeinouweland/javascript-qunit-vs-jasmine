import { calculateTotalPrice, calculateTotalItems, calculateTotalOrderLines } from '../ordercalculator.js';

describe("Order calculator", function() {
  beforeEach(function() {
    this.orderItems = [
      { price: 2, quantity: 3},
      { price: 3, quantity: 4}
    ];
  });

  it("should calculate total order price correctly", function() {
    expect(calculateTotalPrice(this.orderItems)).toBe(18);
  });

  it("should calculate total order items correctly", function() {
    expect(calculateTotalItems(this.orderItems)).toBe(7);
  });

  // expect to fail
  it("should calculate total order lines correctly", function() {
    expect(calculateTotalOrderLines(this.orderItems)).toBe(2);
  });
});
