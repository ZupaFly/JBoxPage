let slideIndex = 1;
const totalSlides = document.getElementsByClassName("slide").length;

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");

  if (n > totalSlides) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = totalSlides;
  }

  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  if (slideIndex === totalSlides && n === 1) {
    // Redirect to the gallery link when clicking "next" on the last slide
    window.location.href = "#gallery";
  } else {
    showSlides(slideIndex += n);
  }
}

// Initial call to display the first slide
showSlides(slideIndex);