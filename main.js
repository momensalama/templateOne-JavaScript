// Header
let toggler = document.querySelector(".toggle");
let nav = document.querySelector("header .links");
let slideImages = document.querySelector(".landing");
let images = ["slider-1-slide-2-1770x742.jpg","slider-3-slide-6-1770x742.jpg","slider-2-slide-4-1770x742.jpg"];
let header = document.querySelector("header");
let gallarySwither = document.querySelectorAll(".project .nav li a");
let gallaryImgs = Array.from(document.querySelectorAll(".project .images .all"));
let started = false;
let projecrSection = document.querySelector(".project");
let increaseNums = document.querySelectorAll(".project .stats .number");
let filter = document.querySelector(".project .filter");
let filterList = document.querySelector(".project .second");
let arrwo = document.querySelector(".project button span i");
let tabsArray = Array.from(document.querySelectorAll('.team .numbers li a'));
let textArray = Array.from(document.querySelectorAll(".team .tab-text .text div"));
let scroll = document.querySelector(".scroll-up");
let slideOne = document.querySelector(".landing .cont-slide span:first-child");
let slideTwo = document.querySelector(".landing .cont-slide span:nth-child(2)");
let slideThree = document.querySelector(".landing .cont-slide span:last-child");
let slidersArray = Array.from(document.querySelectorAll(".landing .slider"));
// let dots = document.querySelector(".landing .cont-slide")

//onscroll
tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        textArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.team).style.display = "block";
    });
});

//header
window.onscroll = function () {
    if (window.scrollY >= slideImages.offsetTop + 60) {
        header.style.boxShadow = '0 0 10px #ddd'
    }
    // increasing numbers project section
    if (window.scrollY >= projecrSection.offsetTop) {
        if (!started) {
            increaseNums.forEach((num) => startCount(num))
        }
        started = true;
    }
    // scroll to top
    this.scrollY >= 500 ? scroll.classList.add("appear") : scroll.classList.remove("appear");
};
// scroll to top
scroll.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
// nav bar
toggler.addEventListener('click',function() {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
        toggler.classList.remove("burger");
        nav.classList.add("close")
    }
    else {
        nav.classList.add("show");
        toggler.classList.add("burger");
        nav.classList.remove("close");
    }
    // if (e.target.closest("header .links")) return
    // nav.classList.add("hide")
});

//landing
slideOne.addEventListener("click", () => {
    slidersArray[0].style.display = 'block';
    slidersArray[1].style.display = 'none';
    slidersArray[2].style.display = 'none';
});
slideTwo.addEventListener("click", () => {
    slidersArray[0].style.display = 'none';
    slidersArray[1].style.display = 'block';
    slidersArray[2].style.display = 'none';
});
slideThree.addEventListener("click", () => {
    slidersArray[0].style.display = 'none';
    slidersArray[1].style.display = 'none';
    slidersArray[2].style.display = 'block';
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    for (i = 0; i < slidersArray.length; i++) {
        slidersArray[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slidersArray.length) {
        slideIndex = 1;
    }
    slidersArray[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 8000); // Change image every 8 seconds
}

// projects section

gallarySwither.forEach((e) => {
    e.addEventListener("click",removeActive)
    e.addEventListener("click",manageImgs)
});
// start Count Function
function startCount(n) {
    let numb = n.dataset.number;
    let count = setInterval(() => {
        n.textContent++;
        if (n.textContent === numb) {
            clearInterval(count);
        }
    }, 2000 / numb);
}
// function removeActive
function removeActive() {
    gallarySwither.forEach((e) => {
        e.classList.remove("active")
        this.classList.add("active")
    });
}

//manage imgs
function manageImgs() {
    gallaryImgs.forEach((img) => {
        img.style.display= 'none';
    });
    document.querySelectorAll(this.dataset.gallary).forEach((el) => {
        el.style.display = "block";
    })
}

// second nav
filter.addEventListener("click", () => {
    if (filterList.style.display === "block" && filterList.style.opacity === "1" ) {
        filterList.style.opacity = "0";
        filterList.style.display = "none";
        arrwo.style.transform = "rotateX(180deg)"
    }
    else {
        filterList.style.opacity = "1";
        filterList.style.display = "block";
        arrwo.style.transform = "rotateX(0deg)"
    }
});
