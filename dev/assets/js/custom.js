const btnBurger = document.querySelector('.hamburger')
btnBurger.addEventListener('click', () => btnBurger.classList.toggle('is-active'))

const swiperBanner = new Swiper('.swiper-banner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 24,
    // If we need pagination
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
});

const header = document.querySelector('header')
const banner = document.querySelector('.swiper-banner')

const bannerVariable = banner.getAttribute('style')
const headerHeight = header.offsetHeight


console.log(header.offsetHeight)
console.log(bannerVariable)


banner.setAttribute('style', '--header-height: ' + headerHeight + 'px')