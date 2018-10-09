'use strict';

/*
    This file can be used as entry point for webpack!
 */
// hamburger
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#overlay');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});
//
// scroll
const scroll = function () {
    let element = document.body
    let toTarget = document.querySelector('#secondScreen')
    let duration = 1000

    function scrollTo (element, toTarget, duration) {
        if (duration <= 0) return
        let difference = toTarget.getBoundingClientRect().top
        let perTick = difference / duration * 10

        setTimeout(() => {
            element.scrollTop = element.scrollTop + perTick
            scrollTo(element, toTarget, duration - 10)
        }, 10)
    }
    scrollTo(element, toTarget, duration)
}
const arrowDown = document.querySelector('#arrowDown')
arrowDown.addEventListener('click', scroll)
//

// slider Services
const services = document.querySelector('.services__filter-items')
const filters = services.children
const servicesItems = document.querySelectorAll('.services__item')

const servicesSlider = function (e) {
    if (!e.target.classList.contains('services__filter-item')) return
    [...filters].forEach(item => item.classList.remove('services__filter-item--active'))
    e.target.classList.add('services__filter-item--active')

    let index = [...filters].indexOf(e.target)
    servicesItems.forEach(i => i.classList.remove('services__item--active'))
    servicesItems[index].classList.add('services__item--active')
}
services.addEventListener('click', servicesSlider)
//
// /////////////////////
// const moveSlide = function () {
//     //let items = this.$refs.slide
//     let target = e.target
//
//     type === 'next' ? this.indexActive += 1 : this.indexActive -= 1
//     if (this.indexActive < 0) this.indexActive = items.length - 1
//     if (this.indexActive > items.length - 1) this.indexActive = 0
//
//     this.slider.style.left = this.indexActive * (-100) + '%'
// }
let moveSlide = function (e) {
    const portfolioSliderList = document.querySelector('.slider__list')
    let items = document.querySelectorAll('.slider__item')
    let target = e.target
    let item
    if (!target.closest('.slider__contr')) return

    if (target.closest('.slider__contr--next')) {
        item = items[0]
        portfolioSliderList.appendChild(item)
        items.forEach(item => item.classList.remove('slider__item--active'))
        items[2].classList.add('slider__item--active')
    }
    if (target.closest('.slider__contr--prev')) {
        item = items[items.length - 1]
        portfolioSliderList.insertBefore(item, items[0])
        items.forEach(item => item.classList.remove('slider__item--active'))
        items[0].classList.add('slider__item--active')
    }
}
const portfolioSlider = document.querySelector('.slider')
portfolioSlider.addEventListener('click', moveSlide)

// reviews slider
let moveReviews = function (e) {
    const reviewsSliderList = document.querySelector('.reviews__list')
    let items = document.querySelectorAll('.reviews__item')
    items = [...items]
    let contrs = [...reviewsContrs.children]
    let target = e.target
    let item
    let indexClick = +target.dataset.index
    let indexCurrent = +reviewsContrs.querySelector('.reviews__contr-item--active').dataset.index
    contrs.forEach(item => item.classList.remove('reviews__contr-item--active'))
    contrs[indexClick].classList.add('reviews__contr-item--active')

    if (indexClick > indexCurrent) {
        items.forEach(item => item.classList.remove('reviews__item--active'))
        items[indexClick].classList.add('reviews__item--active')
    }
    if (indexClick < indexCurrent) {
        items.forEach(item => item.classList.remove('reviews__item--active'))
        items[indexClick].classList.add('reviews__item--active')
    }
    reviewsSliderList.style.left = (indexClick-1) * (-190) + 'px'

}
const reviewsContrs = document.querySelector('.reviews__contrs')
reviewsContrs.addEventListener('click', moveReviews)
