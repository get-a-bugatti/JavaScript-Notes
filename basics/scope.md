# Scope in Javascript

-> when curly braces `{}` comes with **if-else** or **function** , it is called a **scope**.

-> 4 kinds of scope :
- global scope
- function scope
- block scope
- lexical scope

## keep in mind :
1. globally defined `var` is accessible and modifiable, even within a block scope (if-else-block).
	```
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
		console.log(c); # c is 40.
	```
	- but not in function scope, and also, `let`, `const` is not.

2.  **LEXICAL Scope** : For function `inner` , function `outer` acts like a global scope. This is what we call a lexical scope, which gives rise to closures.

	```
		function outer() {
		const something = "kenny";

		function inner() {
			console.log(something); // prints 'kenny'
		}
		inner();
		}
		
		outer();
	```
