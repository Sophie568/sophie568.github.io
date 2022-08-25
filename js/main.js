let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})


setInterval(funcion(){
    slider();
},intervalo);


function slider(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    contador++;
}