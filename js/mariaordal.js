// NAV
$(document).ready(function() {
$('#main-navigation').on('show.bs.collapse', function () {
    $('#nav-icon').attr('src', $('#nav-icon').data('open-src'));
    $('.header-bg-sm').addClass('open');
    $('#nav-icon').attr('src', $('#nav-icon').data('open-src'));
});

$('#main-navigation').on('hide.bs.collapse', function () {
    $('#nav-icon').attr('src', '/images/icon-nav-hamburger-open.svg');
    $('.header-bg-sm').removeClass('open');
    $('#nav-icon').attr('src', '/images/icon-nav-hamburger-open.svg');
});
});

$('a.nav-link').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 20, function(){
            window.location.hash = hash;
        });
    }
});

// PARALLAX
const layer1 = document.querySelector('.layer1');
const layer2 = document.querySelector('.layer2');

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    layer1.style.transform = `translateX(${scrollPosition * 0.5}px)`;
    layer2.style.transform = `translateX(-${scrollPosition * 0.5}px)`;
});

// ACCORDION
function toggleContent(event) {
    const session = event.currentTarget.closest('.session'); 
    const content = session.querySelector('.content'); 
    const arrowContainer = session.querySelector('.arrow-container');
    
    content.classList.toggle('active');
    arrowContainer.classList.toggle('active');
}

const visibleElements = document.querySelectorAll('.visible');
visibleElements.forEach(visibleElement => {
    visibleElement.addEventListener('click', toggleContent);
});

//SAY HI BUTTON
const emailButton = document.getElementById('emailButton');

emailButton.addEventListener('click', () => {
const recipient = 'mo104@wellesley.edu';
const subject = 'Just wanted to say hi :)';
const body = 'Hi!\n\nI visited your website and wanted to get in touch about...';

const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.location.href = mailtoLink;
});