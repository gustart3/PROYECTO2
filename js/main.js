// Función para alternar entre los modos de color
function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Guardar el modo seleccionado 
  const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  saveMode(currentMode);
}

// Verificar y aplicar el modo almacenado en localStorage (al recargar la página)
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.add('light-mode');
  }
});

// Guardar el modo seleccionado en localStorage
function saveMode(mode) {
  localStorage.setItem('mode', mode);
}

// Obtener el elemento del header
const header = document.querySelector("header");


// Función para cambiar el fondo del header según la posición del scroll y los enlaces internos activos
function updateHeaderScroll() {
  if (window.scrollY > 10 ) {
    header.classList.add("header2");
  } else {
    header.classList.remove("header2");
  }
}

// Añadir un listener para el evento 'scroll' que llame a la función updateHeaderScroll
window.addEventListener("scroll", updateHeaderScroll);

// Añadir un listener para el evento 'click' en el documento
document.addEventListener("click", function (event) {
  // Si el clic se originó desde un enlace interno
  if (event.target.tagName === "A" && event.target.getAttribute("href").startsWith("#")) {
    // Esperar un breve instante y luego actualizar el estado del header
    setTimeout(updateHeaderScroll, 1);
  }
});

// Función para aplicar la clase 'active' al enlace correspondiente a la sección activa en el header
function functionScroll() {
  const sections = document.querySelectorAll(".section");

  let activeSectionId = null;
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 100) {
      activeSectionId = section.getAttribute("id");
      break;
    }
  }

  const headerLinks = document.querySelectorAll("header a");
  for (const link of headerLinks) {
    if (link.getAttribute("href") === `#${activeSectionId}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  }
}

// Agregar un listener para el evento 'DOMContentLoaded'
document.addEventListener("DOMContentLoaded", function() {
  functionScroll(); // Llamar a la función al cargar la página para establecer el enlace activo correctamente
});
// Agregar un listener para el evento 'scroll' que llame a la función functionScroll
window.addEventListener("scroll", functionScroll);
window.addEventListener("resize", functionScroll);



//galeria de imagenes
// Seleccionamos todos los elementos que contengan la clase .image
const image = document.querySelectorAll('.image');

// creamos un ciclo for of para cada una de nuestras imágenes del array
for (let [i, imageSelected] of image.entries()) {
  // Luego le decimos al image seleccionado que ejecute la función focus que a su vez ejecutará el resetFocus el cual eliminará la clase active de cualquiera de las imágenes del array, luego al image seleccionado le agregará la clase active
  imageSelected.addEventListener('click', function focus(){
    resetFocus();
    imageSelected.classList.toggle('active');
  });
}

function resetFocus() {
  image.forEach(i => i.classList.remove('active'));
}



window.addEventListener('scroll', function() {
  const header = document.querySelector('.header2');
});


document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector("header");

  // Verificar si el elemento existe antes de acceder a sus propiedades
  if (header) {
    header.classList.add("header2");
  }
});

 
