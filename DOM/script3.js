// Parent NOde : 
    // const listItem = document.querySelector('li');
    // const unorderedList = listItem.parentNode;

    // console.log(unorderedList);
    //     Lists the element itself (<ul>..... </ul>)


    // let subHeading = document.querySelector('h3');

    // // console.log(subHeading.parentNode.parentNode.parentNode);
    // // console.log(subHeading.parentElement.parentElement.parentElement);

    // // Difference between them lies in the fact that Element is a type of "node".

    // const html = document.documentElement;

    // console.log(html.parentElement); // == > null 
    // // console.log(html.parentNode); // Document node (#document)
    //         // More commonly used is parentNode


// Child NOde : 


 
    // const bodyNodes = document.body.childNodes;
    // const bodyElements = document.body.childElementCount;
    
    // console.log(bodyNodes);
    // console.log(bodyElements);

    // const subHeader = document.querySelector('h3');
    // console.log(subHeader.childNodes);
    // console.log(subHeader.firstChild);
    // console.log(subHeader.lastChild);

    // subHeader.childNodes[1].innerHTML = "TEST";
    // subHeader.childNodes[1].style.backgroundColor = "gray";
    // console.log(subHeader.childNodes[1]);
    
    
    // // Child Element NOdes : 

    // const subHeader = document.querySelector('h3');
    // console.log(subHeader.children);

    // console.log(subHeader.firstElementChild);
    // console.log(subHeader.lastElementChild);

    // subHeader.lastElementChild.style.backgroundColor = 'red';

    // console.log(subHeader.children[2]);



// Sibling Node

let subHeader = document.querySelector('h3');


console.log(subHeader.previousSibling);
console.log(subHeader.nextSibling);


    
