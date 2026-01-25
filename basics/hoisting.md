# Hoisting in JS :
1. **Hoisting Functions** : All the declared functions in JS are **moved UP** the top of the program(code), so, they are accessible in any area of the code.
    ```
        console.log(addTwo(3))      // WORKS - prints 5;
        function addTwo(num) {
            return num + 2;
        }
    ```

2. **Functions as an Expression are not hoisted** :
    ```
        console.log(addTwo(3))      // DOESNot work
        const addTwo = function(num) {
            return num + 2;
        }
    ```

3. **Hoisting `var`** :
    - JS moves up **declarations**, not assignments.
        ```
            console.log(x); // undefined (no error)
            var x = 5;
        ```