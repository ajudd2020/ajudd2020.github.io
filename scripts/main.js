gsap.from (".letters-move", {duration: 2, y:"random(-200, -100)", opacity:0, ease:"bounce", stagger: 0.25});

function reload () {
    if (window.innerWidth > 500) {
        location.reload();
    }
}


var scroll=window.requestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000/60)
    };

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop)
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

var linkToActivate = document.querySelectorAll('.activate-on-scroll');
var linkToAddClass = document.querySelectorAll('.nav-item');

function addClass() {
    linkToActivate.forEach(function(link) {
        if (isElementInViewport(link)) {
            if (link.classList.value.includes("home")){
                document.querySelector('.home-link').classList.add('active');
            } else {
                document.querySelector('.home-link').classList.remove('active');
            }
            if (link.classList.value.includes("about-me")){
                document.querySelector('.about-me-link').classList.add('active');
            } else {
                document.querySelector('.about-me-link').classList.remove('active');
            }
            if (link.classList.value.includes("projects")){
                document.querySelector('.projects-link').classList.add('active');
            } else {
                document.querySelector('.projects-link').classList.remove('active');
            }
            if (link.classList.value.includes("contact")){
                document.querySelector('.contact-link').classList.add('active');
            } else {
                document.querySelector('.contact-link').classList.remove('active');
            }
        } else {
            link.classList.remove('active');
        }
    });
    scroll(addClass)
}

addClass();
