const slider = document.querySelector('.slider'),
    sliderLine = document.querySelector('.slider__line'),
    slide = document.querySelectorAll('.slider__item'),
    slideContent = document.querySelectorAll('.slider__item .header__content'),
    controller = document.querySelectorAll('.slider__indicator');


    sliderLine.style = `height:${slide[0].clientHeight}px;`;

    slideContent.forEach(element => {
        element.style = `height:${slide[0].clientHeight}px;`;
    });

    const height = sliderLine.clientHeight 
    const lastSlider = slide.length - 1

controller.forEach(element => {
    element.addEventListener('click', (e) => {
        removeActivve()
        element.classList.add('active')
        sliderActive = document.querySelector('.slider__indicator.active');
        let index = e.target.dataset.index
        let res = height * index
        if (index > sliderActive.dataset.index) {
            for (let i = 0; i <= lastSlider; i++) {
                slide[i].style.transform = `translateY(-${res}px)`
            }
        }
        else {
            slide.forEach(element => {
                element.style.transform = `translateY(0px)` 
            });
            for (let i = 0; i <= lastSlider; i++) {
                slide[i].style.transform = `translateY(-${res}px)`
            }
        }
    })
});

const removeActivve = () => {
    controller.forEach(element => {
        element.classList.remove('active')
    });
    for (let i = 0; i < controller.length; i++) {
        controller[i].setAttribute('data-index', i)
    }
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const section = document.querySelectorAll('.section__wrapper'),
    header = document.querySelector('.header__wrapper');

section.forEach(item => {
    item.style = `height:${item.clientHeight + 150}px;`
});

header.style = `height:${header.clientHeight + 150}px;`


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const options = document.querySelectorAll('.form__option')

options.forEach(element => {
    element.style =`
    display: block;
    color: var(--color-3);
    background: none;
    border: 1px solid var(--color-2);
    outline: none;
    font-family: var(--CormorantUpright-SemiBold);
    padding: 16px;
    width: 100%;
    `
});
