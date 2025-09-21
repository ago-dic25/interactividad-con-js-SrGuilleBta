//====Variables=====//
var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//===Constantes====//
const PI = 3.1416;


//====Funciones====//
function suma(x, y){
    var resultado = x + y;
    console.log("El resultado de la suma es: " + resultado);
    return resultado;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje " + mensaje);
}

imprimirMensaje("Hola");
imprimirMensaje("Vacaciones 1 semana :D");
imprimirMensaje(true);

suma(1, 2);
suma(10, 20);
suma(100, 200);


// Modo oscuro/claro
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Contador de likes
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
    let count = 0;
    button.addEventListener('click', () => {
        count++;
        const countElement = button.nextElementSibling;
        countElement.textContent = count;
    });
});

// Buscador de artículos
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
    const searchTerm = prompt('Escribe tu búsqueda:');
    if (searchTerm) {
        // Buscar en TODOS los elementos de contenido, no solo en .tarjeta
        const contentElements = document.querySelectorAll('.main-article, .ads, .picks');
        let foundResults = false;

        contentElements.forEach(element => {
            // Buscar específicamente en los elementos de contenido
            const title = element.querySelector('h2, p, strong')?.textContent.toLowerCase() || '';
            const category = element.querySelector('.tag')?.textContent.toLowerCase() || '';
            const textContent = element.textContent.toLowerCase();

            if (title.includes(searchTerm.toLowerCase()) ||
                category.includes(searchTerm.toLowerCase()) ||
                textContent.includes(searchTerm.toLowerCase())) {
                element.classList.remove('ocultar');
                foundResults = true;
            } else {
                element.classList.add('ocultar');
            }
        });

        // Mostrar mensaje si no hay resultados
        if (!foundResults) {
            alert(`No se encontraron resultados para "${searchTerm}"`);
        }
    }
});

// Galería con hover
const seeAllPicks = document.getElementById('see-all-picks');
const picksImage = document.getElementById('picks-image');
const picksContainer = document.getElementById('picks-container');

// Array de imágenes de ejemplo (reemplazar con las imágenes reales)
const imageArray = [
    'img/imagen2.jpg',
    'img/imagen3.jpg',
    'img/imagen4.jpg',
    'img/imagen5.jpg'
];

let imageInterval;

picksContainer.addEventListener('mouseenter', () => {
    let currentIndex = 0;

    imageInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % imageArray.length;
        picksImage.src = imageArray[currentIndex];
        picksImage.alt = `Imagen ${currentIndex + 1}`;
    }, 2000);
});

picksContainer.addEventListener('mouseleave', () => {
    clearInterval(imageInterval);
    // Restaurar la imagen original
    picksImage.src = 'img/imagen2.jpg';
    picksImage.alt = 'Imagen picks';
});




























/*


var mas = document.getElementById("mas");
var verTodos = document.getElementById("verTodos");
var verFotos = document.getElementById("verFotos");


var posts = document.getElementById("post");
//Eventos de cada elemento
mas.addEventListener("click",function(){
        alert("Seccion en progereso...");
    }
    );


verTodos.addEventListener("click", function (){
    if(posts.classList.contains("ocultar")){
        posts.classList.remove("ocultar");
        posts.classList.add("mostrar");
    }else {
        posts.classList.remove("mostrar");
        posts.classList.add("ocultar");
    }
})




verFotos.addEventListener("click", function (){
    if()
})*/





