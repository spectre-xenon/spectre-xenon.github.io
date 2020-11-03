const lightbox = document.createElement('div')
document.body.appendChild(lightbox)
lightbox.id = 'lightbox'

const imgs = document.querySelectorAll('img')

imgs.forEach(image => {
  image.addEventListener('click', e => {
    document.body.style.overflow = 'hidden'

    lightbox.classList.add('active')
    gsap.fromTo(lightbox, { x: '-100vw' }, { x: 0, duration: 0.6 })

    const l_image = document.createElement('img')
    l_image.src = image.src

    const text = document.createElement('div')
    text.id = 'caption'
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const a = document.createElement('a')
    text.appendChild(h1)
    text.appendChild(p)
    text.appendChild(a)

    switch (image.id) {

      case "chamlion":
        h1.innerHTML = 'Evolution'
        p.innerHTML = "This one was made for a Facebook post about Evolution and how organisms adapt to thier enviroments, one of the best that i'm proud of. ^_^"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "quasar_collection":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called Quasar representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "stem_cell_collection":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "stem_cell":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "2_days_left":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "micro_organisms":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "black_hole":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "black_hole_2":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "neubela":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "earth":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "reproduction":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "paypal_mafia":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "phone concept":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "spider_man":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "nasa_zoom":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "volume":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "tedx_reqruitment":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "fav_anime":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "doughnut":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "tedx_cover":
        h1.innerHTML = 'Collection'
        p.innerHTML = "this's just a collection of all the designs that were made for a team called representing the memories of the past and a start of a new era"
        a.href = '#'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;


      default:
        break;
    }

    while (lightbox.firstChild) {
      lightbox.firstChild.remove()
      l_image.remove()
      text.remove()
    }

    lightbox.appendChild(l_image)
    gsap.fromTo(l_image, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.6, delay: 0.5 })

    lightbox.appendChild(text)
    gsap.fromTo(text, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.6, delay: 0.6 })

    l_image.addEventListener('click', e => {
      if (l_image.classList.contains('zoom')) {
        l_image.classList.remove('zoom')
      } else {
        l_image.classList.add('zoom')
      }
    })

  })
})

lightbox.addEventListener('click', e => {
  if (e.target == e.currentTarget) {
    lightbox.classList.remove('active')
    document.body.style.overflow = 'unset'
  }
})

