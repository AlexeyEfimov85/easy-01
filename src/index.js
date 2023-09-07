import './scss/styles.scss';
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const one = document.querySelector('.card_1');
const two = document.querySelector('.card_2');
const three = document.querySelector('.card_3');
first.addEventListener('click', function () {
    if (first.checked) {
        one.classList.add('card_slider_opened');
        two.classList.remove('card_slider_opened');
        three.classList.remove('card_slider_opened');
    }
})

second.addEventListener('click', function () {
    if (second.checked) {
        two.classList.add('card_slider_opened');
        one.classList.remove('card_slider_opened');
        three.classList.remove('card_slider_opened');
    }
})

third.addEventListener('click', function () {
    if (third.checked) {
        three.classList.add('card_slider_opened');
        one.classList.remove('card_slider_opened');
        two.classList.remove('card_slider_opened');
    }
})

const batleCardOne = document.querySelector('.card_1_1');
const batleCardtwo = document.querySelector('.card_2_1');
const batleCardthree = document.querySelector('.card_3_1');

const battleFirst = document.getElementById('Andrey');
const battleSecond = document.getElementById('Nikita');
const battleThird = document.getElementById('Alexey');


battleFirst.addEventListener('click', function () {
    if (battleFirst.checked) {
        batleCardOne.classList.add('card_slider_opened');
        batleCardtwo.classList.remove('card_slider_opened');
        batleCardthree.classList.remove('card_slider_opened');
    }
})

battleSecond.addEventListener('click', function () {
    if (battleSecond.checked) {
        batleCardtwo.classList.add('card_slider_opened');
        batleCardOne.classList.remove('card_slider_opened');
        batleCardthree.classList.remove('card_slider_opened');
    }
})

battleThird.addEventListener('click', function () {
    if (battleThird.checked) {
        batleCardthree.classList.add('card_slider_opened');
        batleCardOne.classList.remove('card_slider_opened');
        batleCardtwo.classList.remove('card_slider_opened');
    }
})