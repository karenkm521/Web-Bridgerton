document.addEventListener("DOMContentLoaded", function () {
    const originalHTML = document.querySelector(".section-carrusel-personajes .carousel-inner").innerHTML;

    function restoreCarousel() {
        const isDesktop = window.matchMedia("(min-width: 1051px)").matches;
        const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1050px)").matches;
        const carouselInner = document.querySelector(".section-carrusel-personajes .carousel-inner");

        if (isDesktop) {
            // Si es escritorio, agrupa los personajes en 4
            const personajes = Array.from(document.querySelectorAll(".section-carrusel-personajes .personaje"));
            carouselInner.innerHTML = "";

            const firstGroup = personajes.splice(0, 4);
            const firstItem = document.createElement("div");
            firstItem.className = "carousel-item active contenedor-personaje";
            firstGroup.forEach((personaje) => firstItem.appendChild(personaje));
            carouselInner.appendChild(firstItem);

            while (personajes.length > 0) {
                const group = personajes.splice(0, 4);
                const newItem = document.createElement("div");
                newItem.className = "carousel-item contenedor-personaje";
                group.forEach((personaje) => newItem.appendChild(personaje));
                carouselInner.appendChild(newItem);
            }
        } else if (isTablet) {
            // Si es tablet, agrupa los personajes en 3
            const personajes = Array.from(document.querySelectorAll(".section-carrusel-personajes .personaje"));
            carouselInner.innerHTML = "";

            const firstGroup = personajes.splice(0, 3);
            const firstItem = document.createElement("div");
            firstItem.className = "carousel-item active contenedor-personaje";
            firstGroup.forEach((personaje) => firstItem.appendChild(personaje));
            carouselInner.appendChild(firstItem);

            while (personajes.length > 0) {
                const group = personajes.splice(0, 3);
                const newItem = document.createElement("div");
                newItem.className = "carousel-item contenedor-personaje";
                group.forEach((personaje) => newItem.appendChild(personaje));
                carouselInner.appendChild(newItem);
            }
        } else {
            // Si no es escritorio ni tablet, restaura el HTML original
            carouselInner.innerHTML = originalHTML;
        }
    }

    // Ejecutar la función al cargar y al cambiar el tamaño de la ventana
    restoreCarousel();
    window.addEventListener("resize", restoreCarousel);
});