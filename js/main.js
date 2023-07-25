//para cambiar el header
const div = document.querySelector ('header')
let prevY = window.scrollY;
 window.addEventListener('scroll', function(){
  if(prevY <= 20) {
    div.classList.remove('header2');
  }else{
    div.classList.add('header2');
  }
  prevY = window.scrollY;
 });

//para aplicar la clase a la seccion activa en el header
function functionScroll() {
  var section = document.querySelectorAll(".section"),
      sections = {}, i = 0;
  console.log(section);
Array.prototype.forEach.call(section, function(e) {
  sections[e.id] = e.offsetTop;
});

  for (i in sections) {
    if (sections[i] <= window.pageYOffset +100) {
      document.querySelector('.active').classList.remove('active');
      document.querySelector('a[href*=' + i + ']').classList.add('active');
    }
  }
}
window.addEventListener('scroll', functionScroll);
window.addEventListener('resize', functionScroll);
  

//galeria de imagenes
// Seleccionamos todos los elementos que contengan la clase .image
const image = document.querySelectorAll('.image');
// creamos un ciclo for of para cada uno de nuestras imagenes del array y el .entries nos devolvera la propiedad clave:valor
for (let [i, imageSelected] of image.entries()) {
    // Luego le decimos al image seleccionado que ejecute la función focus que a su vez ejecutara el resetFocus el cual eliminara la clase active de cualquiera de las imagenes del array, luego al image seleccionado le agregara la clase active
    imageSelected.addEventListener('click', function focus(){
        resetFocus();
        imageSelected.classList.toggle('active')
    })
}
function resetFocus() {
    image.forEach(i => i.classList.remove('active'))
}
const ocult = document.querySelectorAll('.info');
for (let [i, infoselect] of info.entries()) {
  imageSelected.addEventListener('mouseover', function quitar(){
    resetQuitar();
    imageSelected.classList.MouseEvent('active')
  })
}