// Obtém as imagens da galeria
const images = document.querySelectorAll('.gallery .project .slider img');
const html = document.querySelector('html');

// Obtém o modal e a imagem do modal
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');

// Obtém os botões de navegação
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Armazena a imagem atual e o índice da imagem na galeria
let currentImage;
let currentIndex;

// Abre o modal quando uma imagem for clicada
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    // Define a imagem atual e o índice da imagem na galeria
    currentImage = image;
    currentIndex = index;

    // Atualiza a imagem no modal
    modalImage.src = currentImage.src;

    // Mostra o modal
    html.style.overflow = 'hidden';
    modal.style.display = 'block';
  });
});

// navegar pelas imagens com as setas do teclado (direita e esquerda)
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      currentImage = images[currentIndex];
      modalImage.src = currentImage.src;
    }
  } else if (event.key === 'ArrowLeft') {
    if (currentIndex > 0) {
      currentIndex--;
      currentImage = images[currentIndex];
      modalImage.src = currentImage.src;
    }
  } else if (event.key === 'Escape') {
    html.style.overflow = 'auto';
    modal.style.display = 'none';
  }
});

// Fecha o modal quando o botão de fechar for clicado
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  html.style.overflow = 'auto';
  modal.style.display = 'none';
});

// Navega para a imagem anterior
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    currentImage = images[currentIndex];
    modalImage.src = currentImage.src;
  }
});

// Navega para a próxima imagem
nextButton.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    currentImage = images[currentIndex];
    modalImage.src = currentImage.src;
  }
});
