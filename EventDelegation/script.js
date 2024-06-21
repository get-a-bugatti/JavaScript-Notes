
// The NOT-SO-COOL method.

// document.querySelector('#football').addEventListener('click', function(e) {
//     console.log('football is clicked');

//     const target = e.target;
    
//     target.style.backgroundColor = 'red';
// })

// document.querySelector('#cricket').addEventListener('click', function(e) {
//     console.log('cricket is clicked');

//     const target = e.target;
    
//     target.style.backgroundColor = 'red';
// })

// document.querySelector('#ludo').addEventListener('click', function(e) {
//     console.log('ludo is clicked');

//     const target = e.target;
    
//     target.style.backgroundColor = 'red';
// })

// document.querySelector('#f2').addEventListener('click', function(e) {
//     console.log('f2 is clicked');

//     const target = e.target;
    
//     target.style.backgroundColor = 'red';
// })


// Now we use Event Delegati0n - The MENT0S WAY TO DO THIS : 

const ul = document.querySelector('#sports');

ul.addEventListener('click', function(e) {

    const target = e.target;

    console.log(target.getAttribute('id') + ' ' + 'is clicked');

    target.style.backgroundColor = 'red';
})

const newSport = document.createElement('li')
newSport.setAttribute('id', 'rugby');
newSport.innerText = 'rugby';

ul.appendChild(newSport);