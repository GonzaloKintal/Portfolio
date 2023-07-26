// Función para verificar si un elemento está en la ventana visible
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Función para mostrar los elementos con una pequeña transición
function showElementsOnScroll() {
    const elementos = document.querySelectorAll('.elemento');
    elementos.forEach((elemento) => {
        if (isElementInViewport(elemento)) {
            elemento.style.opacity = 1;
        }
    });
}

// Mostrar los elementos cuando se carga la página
showElementsOnScroll();

// Escuchar el evento 'scroll' para mostrar los elementos al hacer scroll
window.addEventListener('scroll', showElementsOnScroll);