/* Your JS here. */
console.log('Hello World!')

/* Sticky Nav Bar */
window.addEventListener("scroll", function() {
    var nav_bar = document.querySelector(".nav-bar");
    nav_bar.classList.toggle("sticky", window.scrollY > 0);
})


/* Position Indicator */
const sections = document.querySelectorAll("section[id]");

//console.log(sections);

function positionIndicator() {
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        console.log(sectionId, sectionHeight, sectionTop, scrollY, document.body.scrollHeight, window.screen.availHeight);

        const bottomOfPage = document.body.scrollHeight - window.screen.availHeight;

        if (scrollY + 1 >= bottomOfPage && scrollY - 1 <= bottomOfPage) {
            document.querySelector(".nav-bar a[href*=" + sectionId + "]").classList.remove("active-link");
            document.querySelector(".nav-bar a[href*=contact]").classList.add("active-link");
        } else if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-bar a[href*=" + sectionId + "]").classList.add("active-link");
        } else { 
            document.querySelector(".nav-bar a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    })
}

window.addEventListener("scroll", positionIndicator);

/* Carousel */
const slider = document.querySelector(".slider");
const left_arrow = document.querySelector(".arrow-left");
const right_arrow = document.querySelector(".arrow-right");
const indicatorParents = document.querySelector(".controls ul");

var sectionIndex = 0;

function rightArrowClick() {
    if (sectionIndex < 2) {
        sectionIndex += 1;
    }
    document.querySelector(".controls .selected").classList.remove("selected");
    indicatorParents.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + (sectionIndex) * -33.3333 + "%)";
}

function leftArrowClick() {
    if (sectionIndex > 0) {
        sectionIndex -= 1;
    }
    document.querySelector(".controls .selected").classList.remove("selected");
    indicatorParents.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + (sectionIndex) * -33.3333 + "%)";
}

right_arrow.addEventListener("click", rightArrowClick);
left_arrow.addEventListener("click", leftArrowClick);

function togglePopup1() {
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2() {
    document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3() {
    document.getElementById("popup-3").classList.toggle("active");
}