var selector = function (selector, areAll) {
    var all = document.querySelectorAll(selector)
    var single = document.querySelector(selector)
    return areAll ? all : single
}
document.addEventListener('DOMContentLoaded', function () {
    var patterns = document.querySelectorAll('.bg-images a');
    patterns.forEach(function (a) {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            patterns.forEach(function (a) {
                a.classList.remove('active');
            });
            this.classList.add('active');
        })
    });

    var buttonGoStepOne = selector('.step-0 a.violet-button');
    var buttonGoStepTwo = selector('.step-1 a.violet-button');
    var buttonGoStepLast = selector('.step-2 a.violet-button');
    var form = selector('.step-last form');
    var playAgainButton = selector('.play-again-button');
    buttonGoStepOne.addEventListener('click', function (e) {
        e.preventDefault();
        selector('.step-0').classList.add('d-none');
        selector('.step-1').classList.remove('d-none');
        selector('.step-1').animate([
            // keyframes
            { opacity: '0' },
            { opacity: '1' }
        ], {
            // timing options
            duration: 500,
        });
    });
    buttonGoStepTwo.addEventListener('click', function (e) {
        e.preventDefault();
        selector('.step-1').classList.add('d-none');
        selector('.step-2').classList.remove('d-none');
        selector('.step-2').animate([
            { opacity: '0' },
            { opacity: '1' }
        ], { duration: 500 });

    });

    // Submit The form 
    buttonGoStepLast.addEventListener('click', function (e) {
        e.preventDefault();
        selector('.step-2').classList.add('d-none');
        var colourInput = selector('#choose-colour');
        var objectInput = selector('#choose-object');
        var verbInput = selector('#choose-verb');

        var valueOne = colourInput.value;
        var valueTwo = objectInput.value;
        var valueThree = verbInput.value;


        selector('.step-last').classList.remove('d-none');
        selector('.step-last').animate([
            { opacity: '0' },
            { opacity: '1' }
        ], { duration: 500 });

        var activeItemNumber = selector('.bg-images .active');
        activeItemNumber = +activeItemNumber.dataset.item;

        selector('.card-wrapper my-card', true).forEach(function (card) {
            card.classList.add('d-none')
        });
        var activeItem = selector('.card-wrapper .my-card', true)[activeItemNumber - 1];

        var outputOne = activeItem.querySelector('span.field-1');
        var outputTwo = activeItem.querySelector('span.field-2');
        var outputThree = activeItem.querySelector('span.field-3');


        outputOne.innerHTML = '"' + valueOne + '"'
        outputTwo.innerHTML = '"' + valueTwo + '"'
        outputThree.innerHTML = '"' + valueThree + '"'
        selector('.card-wrapper .my-card', true).forEach(function (card) {
            card.classList.add('d-none');
        })
        selector('.card-wrapper .my-card', true)[activeItemNumber - 1].classList.remove('d-none');



    })

    // Play Again
    playAgainButton.addEventListener('click', function (e) {
        e.preventDefault();
        selector('.step-last').classList.add('d-none');
        selector('.step-0').classList.remove('d-none');
        selector('.step-0').animate([
            { opacity: '0' },
            { opacity: '1' }
        ], { duration: 500 });
    })




})