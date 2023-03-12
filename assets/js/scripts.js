var html = document.documentElement;
var menuTrigger = document.querySelector('.js-nav-main-trigger');

menuTrigger.onclick = function() {
    html.classList.toggle('nav-main-open');
    menuTrigger.classList.toggle('is-active');
    html.classList.toggle('lock-scroll');
}

var mobileDropdownToggleButtons = [...document.querySelectorAll(".js-mobile-accordion-trigger")]
var mobileDropdownPanels = [...document.querySelectorAll(".js-mobile-accordion-panel")]

function handleClickMobileDropdownToggle(el) {

    if (window.innerWidth < 992) {

        if (el.target.classList.contains('is-open')) {
            el.target.classList.remove("is-open");
        } else {
            el.target.classList.add("is-open");
        }

        var panel = el.target.nextElementSibling.firstElementChild;

        if (!panel.classList.contains('active')) {
            panel.classList.add('active');
            panel.style.height = 'auto';
        
            var height = panel.clientHeight + 'px';
        
            panel.style.height = '0px';
        
            setTimeout(function () {
                panel.style.height = height;
            }, 0);
        } else {
            panel.style.height = '0px';
        
            panel.addEventListener('transitionend', function () {
                panel.classList.remove('active');
            }, {
                once: true
            });
        }
        
    }
}

function destroyHeights() {
    mobileDropdownToggleButtons.forEach((item) => {
        item.classList.remove("is-open");
        item.nextElementSibling.firstElementChild.classList.remove('active')
        setTimeout(function () {
            item.nextElementSibling.firstElementChild.style.height = 'auto';
        }, 20);
    })
}

mobileDropdownToggleButtons.forEach((item) => {
    item.addEventListener("click", handleClickMobileDropdownToggle)
})

window.addEventListener("resize", destroyHeights);
