//* Abre e Fecha  MENU quando clicar no ícone: hamburguer e x */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  });
}

/* mudar o header da página quando der o scroll */
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll');
  } else {
    // menor que a altura do header
    header.classList.remove('scroll');
  }
}

/* controle de images na home */
let index = 0;

function changeImage() {
  const image = document.querySelector('#img');
  const imageSrc = image.getAttribute('src');

  const imgArray = [
    'assets/projeto1.jpg',
    'assets/projeto2.jpg',
    'assets/projeto4.jpg',
    'assets/projeto3.jpg',
  ];

  if (index <= 3) {
    image.setAttribute('src', imgArray[index]);
    image.setAttribute('alt', `imagem ${index}`);
    image.classList.add('fade');
    setTimeout(() => {
      image.classList.remove('fade');
    }, 1000);
  } else {
    index = 0;
    image.setAttribute('src', imgArray[0]);
    image.setAttribute('alt', `imagem 0`);
    image.classList.add('fade');
    setTimeout(() => {
      image.classList.remove('fade');
    }, 1000);
  }
  index++;

  setTimeout(changeImage, 8000);
}

window.onload = changeImage();

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// Galley slides
const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
  const slides = slider.querySelectorAll('img');
  const prevBtn = document.createElement('button');
  const nextBtn = document.createElement('button');
  let currentSlide = 0;

  prevBtn.classList.add('slider-prev');
  prevBtn.setAttribute('aria-label', 'Slide anterior');
  prevBtn.innerHTML =
    '<span aria-hidden="true"><i class="ph-caret-left"></i></span>';
  nextBtn.classList.add('slider-next');
  nextBtn.setAttribute('aria-label', 'Próximo slide');
  nextBtn.innerHTML =
    '<span aria-hidden="true"><i class="ph-caret-right"></i></span>';

  slider.appendChild(prevBtn);
  slider.appendChild(nextBtn);

  function prevSlide(n) {
    const sliderSide = slider.offsetWidth;
    console.log(sliderSide, 'sliderSide prev');

    if (n > 0) {
      currentSlide--;
      slider.scrollBy({
        left: -(sliderSide - 100),
        behavior: 'smooth',
      });
    } else {
      currentSlide = slides.length - 1;
      slider.scrollBy({
        left: -(sliderSide * n),
        behavior: 'smooth',
      });
    }
  }

  function nextSlide(n) {
    const sliderSide = slider.offsetWidth;
    console.log(sliderSide, 'sliderSide next');

    if (n < slides.length - 1) {
      currentSlide++;
      slider.scrollBy({
        left: sliderSide - 100,
        behavior: 'smooth',
      });
    } else {
      currentSlide = 0;
      slider.scrollBy({
        left: sliderSide * n,
        behavior: 'smooth',
      });
    }
  }

  prevBtn.addEventListener('click', () => prevSlide(currentSlide));
  nextBtn.addEventListener('click', () => nextSlide(currentSlide));
});

/* ScrollReveal: mostrar elementos quando der scroll na pág */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
);

/* Botão voltar para topo - back to top */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top');

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/*Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});
