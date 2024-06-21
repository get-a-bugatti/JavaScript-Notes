// DOM Manipulation 


//getElementById()
    const firstMovie = document.getElementById('first-movie');
    console.log(firstMovie);
    firstMovie.style.color='blue';

//getElementByClassName()

    const Movies = document.getElementsByClassName('list-items');
    console.log(Movies);

    Movies.style.color = 'violet'; // Doesnot work and no colors changed.
    for (let i = 0; i < Movies.length; i++) { // Changes colors
        Movies[i].style.color = 'red';
    }
 

//getElementByTagName() : 


// The code below doesnot work. 
    const mainHeading = document.getElementsByTagName('h1');
    console.log(mainHeading);
    mainHeading.innerHTML = "purple";

//Reasoning : Even if there is only one element, getElementByTagName returns the element as part of a collection ( an Array ).

// Correction : 
    const mainTitle = document.getElementsByTagName('h1');
    mainTitle[0].style.backgroundColor = 'purple';

//querySelector() : Selects the first element or node of the list of elements that match the given query pattern.

    const firstItemInList = document.querySelector('li.list-items');
    console.log(firstItemInList);
    
    // Doesnot return a collection but the element itself , 
    // So you can change styling like this : 
    firstItemInList.style.color = 'red';


//querySelectorAll() : Selects all and returns a Node List. 
    const allItemsInList = document.querySelectorAll('li.list-items');
    console.log(allItemsInList);

    // You would need a loop if you want to change styling of all elements queried in the ARray.
    for (let i = 0; i < allItemsInList.length; i++) { // Changes colors
        allItemsInList[i].style.color = 'red';
    }


