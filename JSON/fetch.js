fetch("person.json")
    .then(response => response.json())
  .then(value => console.log(value))
  .catch(error => console.error('There was a problem with the fetch operation:', error));


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
