# javascript-qunit-vs-jasmine

A test project that compares qunit to jasmine while testing 3 order calculation methods. All testing is done in the browser and does not require node.js.

## qunit

[https://qunitjs.com/](https://qunitjs.com/)

![qunit](https://github.com/madeinouweland/javascript-qunit-vs-jasmine/blob/master/qunit.png)

#### Example

```
assert.equal(calculateTotalPrice(orderItems), 18, "Total order price calculated correctly" );
```

## Jasmine

[https://jasmine.github.io/](https://jasmine.github.io/)

![jasmine](https://github.com/madeinouweland/javascript-qunit-vs-jasmine/blob/master/jasmine.png)

#### Example

Jasmine uses a [behavior driven](https://en.wikipedia.org/wiki/Behavior-driven_development) syntax and the following code  is stored in a spec file. 

```
it("should calculate total order price correctly", function() {
  expect(calculateTotalPrice(this.orderItems)).toBe(18);
});
```
