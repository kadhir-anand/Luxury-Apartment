const floorPlan = document.querySelector(".floor_plan_obj");
const masterPlan = document.querySelector(".master_plan_obj");
const floorPlanImg = document.querySelector(".floor_plan_img");
const masterPlanImg = document.querySelector(".master_plan_img");
const mobNavIcon = document.querySelector(".nav_mob-icon svg");
const mobNav = document.querySelector(".nav_mob-icon");
const mobNavItems = document.querySelector(".sidebar ul");
const sidebarForward = document.querySelectorAll(".sidebar ul li div");
let currentNavBar = null;
const galleryLeftArrow = document.querySelector(".gallery_img_container .left_arrow svg");
const galleryRightArrow = document.querySelector(".gallery_img_container .right_arrow svg");
const galleryImageSlider = [];
const sliderContainer = document.querySelector(".gallery_img_container .gallery_img");
const sliderImages = document.querySelectorAll(".gallery_img_container .gallery_img img");

//COUNTER
let count = 1;
let sliderImageWidth = sliderImages[0].clientWidth;


sidebarForward.forEach((sidebar) => {
    sidebar.addEventListener("click", (event) => {
        if (window.innerWidth > Number('560')) {
            event.target.parentElement.parentElement.classList.add("nav_bar_push");
            if (currentNavBar != null) {
               currentNavBar.classList.remove("nav_bar_push")
            }
            currentNavBar = event.target.parentElement.parentElement;
            setTimeout(() => {
                currentNavBar.classList.remove("nav_bar_push");
            }, 2000);
        } else {
            mobNavItems.classList.toggle("bar_icon");
        }
    })
});

mobNavIcon.addEventListener("click", (event) => {
    mobNavItems.classList.toggle("bar_icon");
})


masterPlanImg.classList.add("display_none");
floorPlan.classList.add("bold");
floorPlan.addEventListener("click", (event) => {
    if (floorPlanImg.classList.contains("display_none")) {
        floorPlanImg.classList.remove("display_none");
        masterPlan.classList.remove("bold");
        floorPlan.classList.add("bold");
        masterPlanImg.classList.add("display_none");
    }
})

masterPlan.addEventListener("click", (event) => {
    if (masterPlanImg.classList.contains("display_none")) {
        masterPlanImg.classList.remove("display_none");
        masterPlan.classList.add("bold");
        floorPlan.classList.remove("bold");
        floorPlanImg.classList.add("display_none");
    }
})


$(".slider").slick({

    // normal options...
    infinite: true,
    prevArrow: ".left_arrow_icon",
    nextArrow: ".right_arrow_icon",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    // the magic
   
  });
  






