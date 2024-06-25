const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes= [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      person: "John lanon"
    },
    {
      quote: "Get busy living or get busy dying.",
      person: "Stephen King"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
    },
    {
      quote: "Whether you think you can or you think you can't, you're right.",
      person: "Henry Ford"
    }
  ];


  btn.addEventListener('click', function() {
    
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

  });