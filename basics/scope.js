// testing let, const, var against block scope.

let a = 10;
const b = 20;
var c = 30;

if (true) {
  let a = 20;
  const b = 30;
  var c = 40;
}

console.log(a);
console.log(b);
console.log(c);

// result : globally defined `var` is accessible and modifiable inside a if-block.
