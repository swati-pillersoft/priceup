const reviewswiper = new Swiper(".reviewSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".review-btn-next",
    prevEl: ".review-btn-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const blogSwiper = new Swiper(".blogSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".blog-btn-next",
    prevEl: ".blog-btn-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// scroll to top button

//Get the button:
scrollToTopBtn = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari
}

$(function () {
  $(".typed").typed({
    strings: ["€120", "€140", "€110"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
});
