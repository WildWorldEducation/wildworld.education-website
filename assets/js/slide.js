const slidesContainer = document.getElementById('slides');
  const slideImages = slidesContainer.querySelectorAll('img');
  const slideWidth = 100;

  // Clone first and last slide
  const firstClone = slideImages[0].cloneNode(true);
  const lastClone = slideImages[slideImages.length - 1].cloneNode(true);

  firstClone.setAttribute('id', 'first-clone');
  lastClone.setAttribute('id', 'last-clone');

  slidesContainer.appendChild(firstClone);
  slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);

  const totalSlides = slidesContainer.children.length;
  let index = 1;
  slidesContainer.style.transform = `translateX(${-slideWidth * index}%)`;

  let isTransitioning = false;

  function moveSlide(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    index += direction;
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    slidesContainer.style.transform = `translateX(${-slideWidth * index}%)`;
  }

  slidesContainer.addEventListener('transitionend', () => {
    isTransitioning = false;
    const slides = slidesContainer.querySelectorAll('img');
    if (slides[index].id === 'first-clone') {
      slidesContainer.style.transition = 'none';
      index = 1;
      slidesContainer.style.transform = `translateX(${-slideWidth * index}%)`;
    }
    if (slides[index].id === 'last-clone') {
      slidesContainer.style.transition = 'none';
      index = totalSlides - 2;
      slidesContainer.style.transform = `translateX(${-slideWidth * index}%)`;
    }
  });