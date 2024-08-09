// PART - 2 :

// fetch = function use for making HTTP requests to fetch resources
//          (JSON style data, images, files)

//  Simplifies asynchrnous data fetching in JavaScript and used for interacting
//  with APIs to retrieve and send data asynchrornously over the web.

//  fetch(url, {OPTIONS})

// fetch (url, {method: "POST" or "GET"})

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector("#pokemonId");

    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    });
});

function handleSubmit() {
    try { 
    const pokemon = document.querySelector("#pokemonId").value;

    const pokemonName = document.querySelector(".poke-name");
    const pokemonAbilities = document.querySelector(".poke-abilities");

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Could not fetch resource")
        } else {
            return response.json();
        }
    })
    .then(value => {
        console.log(value);
        pokemonName.innerText = value.name;
        const abilities = value.abilities.map(ability => ability.ability.name).join(', ');

        pokemonAbilities.innerText = abilities;
    })
    } 
    catch (error) { 
        console.error(error);
    }
}









// PART - 1

// fetch("person.json")
//     .then(response => response.json())
//   .then(value => console.log(value))
//   .catch(error => console.error('There was a problem with the fetch operation:', error));


// AI CODE : 

// fetch("person.json")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(value => console.log(value))
//   .catch(error => console.error('There was a problem with the fetch operation:', error));


