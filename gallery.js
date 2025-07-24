// gallery.js

window.onload = function() {
  addTabIndexToFigures();
  setupGalleryEvents();
  console.log("Photo gallery loaded and event listeners initialized.");
};

function addTabIndexToFigures() {
  const figures = document.querySelectorAll('.gallery figure');
  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute('tabindex', '0'); // Make focusable
  }
  console.log("Tabindex attributes added to all figures.");
}

function setupGalleryEvents() {
  const figures = document.querySelectorAll('.gallery figure');
  const mainImage = document.getElementById('main-image');
  const originalText = "Hover or Focus a Thumbnail";
  
  figures.forEach((figure) => {
    const img = figure.querySelector('img');
    const imgSrc = img.getAttribute('src');
    const imgAlt = img.getAttribute('alt');

    // Mouse Events
    figure.onmouseover = function() {
      mainImage.textContent = imgAlt;
      mainImage.style.backgroundImage = `url('${imgSrc}')`;
      console.log("Mouseover triggered: " + imgAlt);
    };
    figure.onmouseleave = function() {
      mainImage.textContent = originalText;
      mainImage.style.backgroundImage = '';
      console.log("Mouseleave triggered - reset main image");
    };

    // Keyboard Events
    figure.onfocus = function() {
      mainImage.textContent = imgAlt;
      mainImage.style.backgroundImage = `url('${imgSrc}')`;
      console.log("Focus triggered: " + imgAlt);
    };
    figure.onblur = function() {
      mainImage.textContent = originalText;
      mainImage.style.backgroundImage = '';
      console.log("Blur triggered - reset main image");
    };
  });
}
