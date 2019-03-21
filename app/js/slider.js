let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("art__way_slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-red", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-red";
} 


/*Slider art__technic*/

let slideInd = 1;
showSlide(slideInd);

// Next/previous controls
function plusSlide(n) {
  showSlide(slideInd += n);
}

// Thumbnail image controls
function currSlide(n) {
  showSlide(slideInd = n);
}

function showSlide(n) {
  let i;
  let slide = document.getElementsByClassName("art__technic_slider");
  let menu = document.getElementsByClassName("menu");
  if (n > slide.length) {slideInd = 1}
  if (n < 1) {slideInd = slide.length}
  for (let i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
  for (let i = 0; i < menu.length; i++) {
      menu[i].className = menu[i].className.replace(" active-menu", "");
  }

  slide[slideInd-1].style.display = "block";
  menu[slideInd-1].className += " active-menu";
}


/* event's slider */

let slideIn = 1;
showSlider(slideIn);

// Next/previous controls
function plsSlide(n) {
  showSlider(slideIn += n);
}

// Thumbnail image controls
function curSlide(n) {
  showSlider(slideIn = n);
}

function showSlider(n) {
  let i;
  let block = document.getElementsByClassName("events__slider");
  let dot = document.getElementsByClassName("dots");
  if (n > block.length) {slideIn = 1}
  if (n < 1) {slideIn = block.length}
  for (let i = 0; i < block.length; i++) {
      block[i].style.display = "none";
  }
  for (let i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" active-red", "");
  }

  block[slideIn-1].style.display = "block";
  dot[slideIn-1].className += " active-red";
} 

