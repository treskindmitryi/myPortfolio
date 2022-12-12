(function () {
    const sliderLine = document.querySelector('.slider-line');
    const prevButton = document.querySelector('.slider-button-prev');
    const nextButton = document.querySelector('.slider-button-next');
    const sliderElems = document.querySelectorAll('.slider-element');
    const sliderWrapper = document.querySelector('.slider-wrapper');

    let position = 0;

    const nextSlide = (event) => {
        if (position < ((sliderElems.length - 1) * resizeSlider(event))) {
            position += resizeSlider(event);
            sliderLine.style.left += `-${position}px`
        } else {
            position = 0;
        }
        sliderLine.style.left = `-${position}px`
    }

    const prevSlide = (event) => {
        if (position > 0) {
            position -= resizeSlider(event);
        } else {
            position = (sliderElems.length - 1) * resizeSlider(event);
        }
        sliderLine.style.left = `-${position}px`;
    }

    const resizeSlider = () => {
        sliderLine.style.left = 0
        return sliderWrapper.offsetWidth;
    }

    window.addEventListener('resizeSlider', resizeSlider)
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
})()
