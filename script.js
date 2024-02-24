const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');

let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % container.children.length;
    updateCarousel();
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + container.children.length) % container.children.length;
    updateCarousel();
}

function updateCarousel() {
    const newTransformValue = -currentIndex * 100 + '%';
    container.style.transform = 'translateX(' + newTransformValue + ')';
}

function autoSlide() {
    nextSlide();
}

// Configurar auto avanço a cada 3 segundos (ajuste conforme necessário)
setInterval(autoSlide, 5000);
var men = document.querySelector(".menu");
function menu(){
    if(men.style.display=="block"){
        men.style.display ="none"
    }else{
        men.style.display="block"
    }
}