const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburger1 = document.querySelector('.hamburger');




imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
      aparcerImagen(imagen.getAttribute('src'))
    })
})


contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')  
        hamburger1.style.opacity = '1'
        
    }

})

const aparcerImagen = (imagen)=>{
imagenesLight.src = imagen;
contenedorLight.classList.toggle('show')
imagenesLight.classList.toggle('showImage')
hamburger1.style.opacity = '0'

}


    