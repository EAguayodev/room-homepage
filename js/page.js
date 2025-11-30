// mobile menu display tablet and mobile
const btnMenuToggle = document.querySelector('.btn-menu-toggle');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const menuMobile = document.querySelector('.menu-list');

btnMenuToggle.addEventListener('click', function () {
    hamburger.classList.toggle('hide');
    closeIcon.classList.toggle('show');
    menuMobile.classList.toggle('active');
});


// slider to display hero 2 and 3 background image when user clicks on left or right arrow
let currentIndex = 0;

let headingText = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
];

let textDescription = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
];

let heroBgImages = [
    "images/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg"
];

function updateHeroContent(index) {
  const headingElement = document.querySelector("h1");
  const descriptionElement = document.querySelector("p");
  const heroSection = document.querySelector(".grid-1");

  // Add fade-out class
  headingElement.classList.add("fade-out");
  descriptionElement.classList.add("fade-out");

  // Wait for fade-out, then update content and fade back in
  setTimeout(() => {
    heroSection.style.backgroundImage = `url('${heroBgImages[index]}')`;
    headingElement.textContent = headingText[index];
    descriptionElement.textContent = textDescription[index];

    // Remove fade-out class to trigger fade-in
    headingElement.classList.remove("fade-out");
    descriptionElement.classList.remove("fade-out");
  }, 300); // Match the CSS transition duration
}

updateHeroContent(currentIndex);    

const leftArrow = document.querySelector('.btn-angle-left');
const rightArrow = document.querySelector('.btn-angle-right');

leftArrow.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = headingText.length - 1;
    }
    updateHeroContent(currentIndex);
});

rightArrow.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex >= headingText.length) {
        currentIndex = 0;
    }
    updateHeroContent(currentIndex);
});