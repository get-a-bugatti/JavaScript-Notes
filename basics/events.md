Many ways to declare an event listener :
- HTML-attribute event listener
- JS event listener
- JS `.addEventListener()` 

While using normal HTML-attribute event listeners like `element.on<event>`, you can't put multiple event listeners on 1 element.
The HTML-attribute event listeners, you can only have one, and if you have multiple, the most recent one overrides the previous one.

So, we can use `.addEventListener()` to DOM Elements.
This allows you to have multiple and multi-type event listeners.

## `target` vs `currentTarget` :
    - `target` : the element which fires the event.
    - `currentTarget` : the element to which the eventListener is actually used to.

## Capturing and Bubbling :
- `.addEventListener(event, function, true || false)` : the third value is `false` by default. Here, 
    - `false` : bubbling (event fires from inside child to top parent, like in water)
    - `true` : capturing (event goes : parent -> child)

## 3 Phases of DOM Event Propagatin :
    - capturing (top to bottom), target (event), bubbling (bottom to top)

## Removing **event Listeners** :
    You need to reference the same Function and event in `removeEventListener()` as `addEventListener()`.

❌ This won’t work:  (because  each `() -> {}` creates separate functions.
```
    el.addEventListener("click", () => {});
    el.removeEventListener("click", () => {});
```

✅ This works:
```
    function handler() {}
    el.addEventListener("click", handler);
    el.removeEventListener("click", handler);
```

## Arrow functions v/s Normal functions : 
- Normal function:
```
button.addEventListener("click", function () {
  console.log(this); // the button
});
```

- Arrow function:
```
button.addEventListener("click", () => {
  console.log(this); // NOT the button
});
```

- 📌 Rule:
    - Arrow functions do not bind `this`

## Event Delegation :
Capturing and bubbling allow us to implement one of the most powerful event handling patterns called `event delegation`.
The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

❌ Bad way (no delegation)
You’d need one listener per <li>.

✅ Event Delegation (simple example)
👉 One listener on the parent (ul), not on each li.
```
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>


const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  console.log("target:", e.target.textContent);
});

```

## `e.stopPropagation()` and `e.preventDefault()`:
    - `e.stopPropagation()` stops propagation of event firing (top to bottom or opposite).
    - `e.preventDefault()` prevents default behavior of elements, like redirecting (when clicking a link), submitting (when clicking submit button in a form), etc.
        - It only works if the event is cancellable. `e.cancelable ? e.preventDefault() : null`

## `e.stopImmediatePropagation()` :
    - `e.stopImmediatePropagation()` : 
    In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.
    To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.
    
- all event Properties that may be helpful remembering :
    - **`type`** → tells what event happened (`click`, `keydown`, etc.)
    - **`timeStamp`** → time (ms) when the event occurred since page load
    - **`defaultPrevented`** → `true` if `preventDefault()` was called
    - **`target`** → element where the event originally happened
    - **`currentTarget`** → element whose event listener is running
    - **`toElement`** → legacy property for mouse target (avoid)
    - **`srcElement`** → old IE version of `target`
    - **`clientX`** → mouse X position inside browser viewport
    - **`clientY`** → mouse Y position inside browser viewport
    - **`screenX`** → mouse X position on entire screen
    - **`screenY`** → mouse Y position on entire screen
    - **`altKey`** → `true` if Alt key was held
    - **`ctrlKey`** → `true` if Ctrl key was held
    - **`shiftKey`** → `true` if Shift key was held
    - **`keyCode`** → deprecated numeric key value (don’t use)
    - **`key`** → actual key value pressed (`"a"`, `"Enter"`)
    - **`code`** → physical key on keyboard (`"KeyA"`, `"Enter"`)