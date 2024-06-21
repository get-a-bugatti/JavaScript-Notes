// First Button :

const buttonOne = document.querySelector('button#btn1');
const boxOne = document.querySelector('.box-1')

function changeBgColor() {
    if (boxOne.classList.contains('changed')) {
        boxOne.classList.remove('changed');
        buttonOne.classList.remove('changed');
    } else {
        boxOne.classList.add('changed');
        buttonOne.classList.add('changed');
    }
    
}

buttonOne.addEventListener("click", changeBgColor);


// Second Button : 

const buttonTwo = document.querySelector('button#btn2');
const boxTwo = document.querySelector('.box-2');

function modifyBgColor() {
    boxTwo.style.backgroundColor = 'white';
}

buttonTwo.addEventListener("mouseover", modifyBgColor);
buttonTwo.addEventListener("click", () => {
    boxTwo.style.backgroundColor = rgba(0,0,0,100);
})


// Third Button : 

const revealBtn = document.querySelector('button#btn3');
const hiddenContent = document.querySelector('.hidden-text');

function reveal() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click', reveal);

