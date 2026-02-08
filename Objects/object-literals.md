JavaScript Notes: Objects and Object Literals 
=================================================

1\. Object Literals
-------------------
An **Object Literal** is a comma-separated list of name-value pairs wrapped in curly braces. It’s the "manual" way to create an object.

```javascript
const userOne = {
        username: "kenny",
        loginCount: 8,
        signedIn: true,
        getUserDetails: function() {
                console.log(this); // 'this' refers to userOne    
        }, 
}; 
```
*   **The Downside:** If you need 10 users, you have to copy-paste this block 10 times. It is **redundant** and hard to maintain.
    ```javascript
        const userOne = {
        username: "kenny",
        loginCount: 8,
        signedIn: true,
        getUserDetails: function() {
                console.log(this);    
                }, 
        }; 
        const userTwo = {
                username: "kenny",
                loginCount: 8,
                signedIn: true,
                getUserDetails: function() {
                        console.log(this);
                }, 
        }; 
    ```
        

### So, we define a User object using a `function`:
```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username; // This is modifying the Global Object!    
	return this;
}  
const user1 = User("kenny", 8, true);   
const user2 = User("manny", 7, false); // Overwrites the global 'username' to "manny"  

console.log(user1); // You see "manny" because user1 is just a reference to the Global Object
```

2\. Why does `console.log(user1)` give "manny" ?
------------------------------------------------
Even though user1 and user2 were created in separate **Function Execution Contexts** (separate "rooms"), they both reached out and grabbed the **Global Object** to store their data. Since there is only one Global Object, user2 overwrote user1.

#### The main **Confusion**:
 Every time you call a function, a new **Execution Context** is created. But don't confuse **Execution Context** with **context**. 
 Each `function` in it's **function execution context** has two things :
*   **Scope (Variable Environment):** The "internal" space of the function. Parameters like username and loginCount live here. Each call gets its own unique scope.
*   **Context (this):** The object that "owns" the current execution.

#### **Clarification** :
- Here, even though each **Function Execution Context** may have a different scope, but they could refer to the same context (i.e., same `global` object)  `BY default`.
- That's why "kenny" got overwritten by "manny", since they both refer to the global object (`window` in Browser, `global` in Node.js ). 


3\. The Solution: The new Keyword
---------------------------------
The `new` keyword changes the behavior of the Function Execution Context. Instead of pointing this to the Global Object, it creates a brand-new "instance" - **a private Object** that owns each function call.
This way, they won't get overwritten.

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;      
    
    // return this; -> This happens automatically with 'new'  
}  
const user1 = new User("kenny", 8, true);
const user2 = new User("manny", 7, false);

console.log(user1); // User { username: 'kenny', ... }   
```

### When you use new:
1.  **New Object:** A plain JavaScript object is created.
2.  **Constructor Binding:** The this inside the function is bound to this **new** object.
3.  **Isolation:** user1 and user2 now live in their own separate memory spaces. They no longer "pollute" or overwrite the Global Object.
4.  **Self-Reference:** Now, user1.constructor refers specifically to the User function, not the global Object().