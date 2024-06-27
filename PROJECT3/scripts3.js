const plusButton = document.querySelectorAll('div.plus');

plusButton.forEach(button => {
    button.addEventListener('click', function() {
        const itemToReveal = button.classList[1];  // 2nd ClassName pertaining to identifier number

        console.log(itemToReveal);
        const itemClass = `div.answer.${itemToReveal}`;

        const ToReveal = document.querySelector(itemClass);

        ToReveal.style.display = 'block';
    }) 
}) // Made a mistake here. DO NOT FORGET TO LOOP ~~~






