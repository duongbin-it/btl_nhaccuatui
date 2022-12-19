const active = document.querySelectorAll('.sidebar__tab--itemmusic')
const active1 = document.querySelectorAll('.sidebar__tab--itemmv')
const active_panel = document.querySelectorAll('.sidebar__content')
const active_panel1 = document.querySelectorAll('.sidebar__content1')
const click_tab = document.querySelector('.music')

active.forEach((tab, index) => {
    tab.onclick = function () {
        active.forEach((tab, index) => {
            tab.classList.remove('active')
        })
        this.classList.add('active')
        active_panel.forEach((tab, index) => {
            tab.classList.remove('active1')
        })
        active_panel[index].classList.add('active1')
    }
})

active1.forEach((tab, index) => {
    tab.onclick = function () {
        active1.forEach((tab, index) => {
            tab.classList.remove('active')
        })
        this.classList.add('active')
        active_panel1.forEach((tab, index) => {
            tab.classList.remove('active1')
        })
        active_panel1[index].classList.add('active1')
    }
})


$('.center').slick({
    arrows: true,
    centerMode: true,
    infinite: true,
    centerPadding: '192.5px',
    slidesToShow: 1,
    speed: 2500,
    draggable: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1200,
    pauseOnHover: false,
    pauseOnFocus: false,
    initialSlide: 0,
})