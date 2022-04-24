const numbers = document.querySelectorAll('.number');
const main = document.getElementById('main');
const thankYou = document.querySelector('.thank-you');
const submitBtn = document.querySelector('.submit-btn');
const infoEl = document.querySelector('.thank-you__info span');

let currentSelected = null;

[...numbers].forEach(number => {
    number.addEventListener('click', () => {
       if ( number !== currentSelected) {
           if (currentSelected) {
               currentSelected.classList.remove('active');
           }
           number.classList.add('active');
           currentSelected = number;
       }
    })
});

submitBtn.addEventListener('click', () => {
    let hasActive = null;

    Array.from(numbers).filter(number => {
        if (number.classList.contains('active')) {
            hasActive = number.textContent;
            return hasActive;
        } else {
            return;
        }
    })

    if ( hasActive ) {
        main.classList.add('active');
        thankYou.classList.add('active');
        infoEl.textContent = hasActive;
    } else {
        return;
    }

});