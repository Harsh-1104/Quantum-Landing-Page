function windowScroll() {
  var e = document.getElementById("navbar");
  e &&
    (5 <= document.body.scrollTop || 0 <= document.documentElement.scrollTop
      ? e.classList.add("is-sticky")
      : e.classList.remove("is-sticky"));
}

window.addEventListener("scroll", function (e) {
  e.preventDefault(), windowScroll();
});

const navLinks = document.querySelectorAll(".nav-item"),
  menuToggle = document.getElementById("navbarSupportedContent");

var bsCollapse = "";

function toggleMenu() {
  document.documentElement.clientWidth < 980
    ? bsCollapse.toggle()
    : (bsCollapse = "");
}
navLinks &&
  menuToggle &&
  (window.addEventListener("load", function () {
    window.dispatchEvent(new Event("resize"));
  }),
    window.addEventListener("resize", function () {
      var e = document.documentElement.clientWidth;
      (bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: !1 })),
        e < 980
          ? Array.from(navLinks).forEach((e) => {
            e.addEventListener("click", () => {
              toggleMenu();
            });
          })
          : toggleMenu();
    }));

var swiper = new Swiper(".trusted-client-slider", {
  spaceBetween: 50,
  loop: "true",
  slidesPerView: 1,
  autoplay: { delay: 1e3, disableOnInteraction: !1 },
  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

swiper = new Swiper(".client-review-swiper", {
  loop: !1,
  autoplay: { delay: 2500, disableOnInteraction: !1 },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  pagination: { clickable: !0, el: ".swiper-pagination" },
});
