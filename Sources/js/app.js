const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)


const images = document.querySelectorAll('.selectable_img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img')
    img.src = image.src
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    gsap.fromTo(img, {opacity: 0, x:100}, {opacity: 1, x:0 ,duration: .3});
  })
})

lightbox.addEventListener('click', e=>{
  if(e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})