// Creating Elements : 

const h3 = document.querySelector('h3');
const newListElement = document.createElement('li');
const li = document.createElement('li');
 
// NOw we need to add the Element into the hTML document. 
// Which we do using append method.

h3.append(newListElement);
h3.append(newListElement);
h3.append(newListElement);

h3.append(li);

// If you wanna make multiple , the above method won't work
// because its the same element you are just creating and then moving it into new same location other 2 times. 

// You could do sth like this instead : 

for (let i = 0; i < 3; i++) {
    const newListEl = document.createElement('li');
    h3.append(newListEl);
}

//Modify Text : 

    const FirstNewElement = document.querySelectorAll('li')[4];
    FirstNewElement.textContent = 'Sexy';

    // or you try sth like : 
    // innerHTML, innerText, they all differ in security concerns and what they select and modify.

    const allList = document.querySelectorAll('li');

    for (let i = 0; i < allList.length; i++) {
        allList[i].style.backgroundColor = 'beige';
    }


// Set and Remove Attributes : 

    FirstNewElement.setAttribute('style','background-color:yellow');
    li.setAttribute('id', 'new-item');
    // FirstNewElement.removeAttribute('style');



// Get Attribute ( view Attribute values ) : 

    console.log(FirstNewElement.getAttribute('style'));
    console.log(li.getAttribute('id'));



// Modifying ATtributes And Classes : 

    li.classList.add('demo-class');

    li.classList.remove('demo-class');
    li.classList.add("foo", "bar", "baz");

    console.log(li.outerHTML);


// Remove Elements : All we need is the remove() method . 
// // Select the Element and then apply the method to them. 

    li.remove();