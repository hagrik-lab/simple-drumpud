let bitSoundEl = ['img1', 'img2', 'img3', 'img4', ];
let bitNomer = ['qwer', 'wert', 'erty', 'rdkd'];
let bitId = ['bit1', 'bit2', 'bit3', 'bit4'];
let containerEl = document.querySelector('.sound');




//Отвечает за то что бы у каждой кнопки был свой рабочий фон а так же создает 4 кнопки со
// своим id
bitSoundEl.forEach((bit) => {
    let buttonEl = document.createElement('button');
    buttonEl.classList.add('btn');
    buttonEl.setAttribute('id', bit)


    buttonEl.style.backgroundImage = 'url(images/' + bit + '.jpg)';

    containerEl.appendChild(buttonEl);
})

//переменны кнопок
let buttonEl1 = document.getElementById('img1');
let buttonEl2 = document.getElementById('img2');
let buttonEl3 = document.getElementById('img3');
let buttonEl4 = document.getElementById('img4');
let buttonEl5 = document.getElementById('img5');

//функции отвечающие за создание переменных звуковых эффектов
function sound1() {
    let soundEl1 = new Audio('sounds/img1.mp3');
    soundEl1.play();
};
function sound2() {
    let soundEl2 = new Audio('sounds/img2.mp3');
    soundEl2.play();
};
function sound3() {
    let soundEl3 = new Audio('sounds/img3.mp3');
    soundEl3.play();
}
function sound4() {
    let soundEl4 = new Audio('sounds/img4.mp3');
    soundEl4.play();
};

//Событие отвечающее за добовление звуковых эффектов при нажатии мышкой на кнопку
buttonEl1.addEventListener('click', (event) => {
    sound1();
});
buttonEl2.addEventListener('click', (event) => {
    sound2();
});
buttonEl3.addEventListener('click', (event) => {
    sound3();
});
buttonEl4.addEventListener('click', (event) => {
    sound4();
});

//Событие отвечающее за добовление звуковых эффектов при нажатии клавиши
window.addEventListener('keydown', (event) => {
    if(event.key === '1') {
        sound1()
    }
});
window.addEventListener('keydown', (event) => {
    if(event.key === '2') {
        sound2()
    }
});
window.addEventListener('keydown', (event) => {
    if(event.key === '3') {
        sound3()
    }
});
window.addEventListener('keydown', (event) => {
    if(event.key === '4') {
        sound4()
    }
});

