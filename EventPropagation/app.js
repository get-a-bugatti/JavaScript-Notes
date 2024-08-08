window.addEventListener('click', function() {
    console.log('Window');
}, true);

document.addEventListener('click', function() {
    console.log('document');
}, true);

document.querySelector('.div2').addEventListener('click', function(e) {
    // e.stopPropagation(); -> applies to both Event Capturing and Bubbling.
    console.log('DIV2 + target=',e.target);
}, true); // In event capture this 'DIV2' prints at last when {once: true}, dunno why?

document.querySelector('.div1').addEventListener('click', function(e) {
    console.log('DIV1 + target=',e.target);
}, true);

document.querySelector("a.button").addEventListener('click', function(e) {
    e.preventDefault(); // Prevents default behaviors as in the case of an <a> tag, where it clears console immediately after printing.
 console.log(e);
}, true);