const selects = document.querySelectorAll('select')
selects.forEach(item => NiceSelect.bind(item))




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
const headerHeight = header.offsetHeight

banner.setAttribute('style', '--header-height: ' + headerHeight + 'px')


const inputCheckbox = document.querySelectorAll('input[type="checkbox"]')

inputCheckbox.forEach(item => {
    item.closest('.input-box').classList.add('input-box_checkbox')
})

const fileInput = document.querySelectorAll('[type="file"]');

fileInput.forEach(item => {
    item.addEventListener('change', function() {
        let fileName = item.closest('.input-box').querySelector('.file-name')
        fileName.innerHTML = item.files[0].name;
    })
})


// const advantagesSlideLength = document.querySelectorAll('.advantages .swiper-slide').length

// const swiperAdvantages = new Swiper('#advantages', {
//     spaceBetween: 12,
//     loop: true,
//     simulateTouch: true,
//     slidesPerView: 1,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         enabled: true,
//     },
//     breakpoints: {
//         1025: {
//             spaceBetween: 0,
//             loop: false,
//             slidesPerGroup: advantagesSlideLength,
//             simulateTouch: false,
//             pagination: {
//                 enabled: false,
//                 el: '.swiper-pagination',
//             }
//         }
//     }
// });