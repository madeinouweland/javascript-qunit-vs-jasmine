# javascript-qunit-vs-jasmine

A test project that compares qunit to jasmine while testing 3 order calculation methods.

## qunit

[https://qunitjs.com/](https://qunitjs.com/)

![qunit](https://github.com/madeinouweland/javascript-qunit-vs-jasmine/blob/master/qunit.png)

### Syntax example:

```
assert.equal(calculateTotalPrice(orderItems), 18, "Total order price calculated correctly" );
```

## jasmine

[https://jasmine.github.io/](https://jasmine.github.io/)

![jasmine](https://github.com/madeinouweland/javascript-qunit-vs-jasmine/blob/master/jasmine.png)

### Syntax example:

```
it("should calculate total order price correctly", function() {
  expect(calculateTotalPrice(this.orderItems)).toBe(18);
});
```
