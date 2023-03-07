var html = document.documentElement;
var menuTrigger = document.querySelector('.js-nav-main-trigger');

menuTrigger.onclick = function() {
    html.classList.toggle('nav-main-open');
    menuTrigger.classList.toggle('is-active')
    html.classList.toggle('lock-scroll')
}

var mobileDropdownToggleButtons = [...document.querySelectorAll(".js-mobile-accordion-trigger")]
var mobileDropdownPanels = [...document.querySelectorAll(".js-mobile-accordion-panel")]

function handleClickMobileDropdownToggle(el) {
    
    var panel = el.target.nextElementSibling;

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

function destroyHeights() {
    mobileDropdownToggleButtons.forEach((item) => {
        var panel = item.nextElementSibling;
        if (panel.classList.contains('active')) {
            panel.classList.remove('active')
            setTimeout(function () {
                panel.style.height = 'auto';
            }, 0);
        }
    })
}

mobileDropdownToggleButtons.forEach((item) => {
    item.addEventListener("click", handleClickMobileDropdownToggle)
})

window.addEventListener("resize", destroyHeights);

document.getElementById("js-copyright-year").innerHTML = new Date().getFullYear();
