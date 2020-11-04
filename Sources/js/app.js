const lightbox = document.createElement('div')
document.body.appendChild(lightbox)
lightbox.id = 'lightbox'

const imgs = document.querySelectorAll('img')

particlesJS.load('particles-js', './Sources/js/particlesjs-config.json')

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
        p.innerHTML = "This one was made for a Facebook post about Evolution and how organisms adapt to their environment, one of the best that I'm proud of. ^_^"
        a.href = 'https://www.facebook.com/permalink.php?story_fbid=122669476124139&id=101122568278830'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "quasar_collection":
        h1.innerHTML = 'Quasar collection'
        p.innerHTML = "This's just a collection of all the designs that were made for a team called Quasar, representing the memories of the past and a start of a new era."
        a.href = 'https://www.facebook.com/Quasar.Gharbiya/photos/a.116867929862505/177389203810377/'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "stem_cell_collection":
        h1.innerHTML = ' Properties of life'
        p.innerHTML = "This' one is a collection of designs that were made for a series of posts talking about the main properties of life."
        a.href = 'https://www.facebook.com/permalink.php?story_fbid=136635948060825&id=101122568278830'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "stem_cell":
        h1.innerHTML = 'Stem cell'
        p.innerHTML = "This one was made for a post about stem cells representing a stem cell transforming into a blood cell."
        a.href = 'https://www.facebook.com/permalink.php?story_fbid=150373816687038&id=101122568278830'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "2_days_left":
        h1.innerHTML = '2 Days left'
        p.innerHTML = "َQuickly! fill out the registration form, only two days left! <br> so you get the basic idea here it's a design made for reminding people that there are only two days left."
        a.href = 'https://www.facebook.com/permalink.php?story_fbid=145896540468099&id=101122568278830'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "unicellular":
        h1.innerHTML = 'Uni-cellular'
        p.innerHTML = "So this one was made for a post about unicellular organisms(like the bacteria seen in the middle), Kind of a futuristic design."
        a.href = 'https://www.facebook.com/permalink.php?story_fbid=117018800022540&id=101122568278830'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "black_hole":
        h1.innerHTML = 'Black-Hole'
        p.innerHTML = "I love space! With all the wonders it has, but what I love the most is black holes, so I made this guy in my free time."
        a.href = '#'
        a.innerHTML = 'No link avalible'
        a.target = '_blank'
        break;

      case "black_hole_2":
        h1.innerHTML = 'Black-Hole 2'
        p.innerHTML = "Another Version of the mighty Black-Hole!"
        a.href = '#'
        a.innerHTML = 'No link avalible'
        a.target = '_blank'
        break;

      case "neubela":
        h1.innerHTML = 'Nebula'
        p.innerHTML = "Comes second after the black-holes, the nebulas, nebulas are <strong>really</strong> beautiful, especially the cat-eye nebula is my favorite one, so I tried to make one in my free time. :D"
        a.href = '#'
        a.innerHTML = 'No link avalible'
        a.target = '_blank'
        break;

      case "earth":
        h1.innerHTML = 'Earth'
        p.innerHTML = "We can't mention space without mentioning our lovely earth, also made this in my free time"
        a.href = '#'
        a.innerHTML = 'No link avalible'
        a.target = '_blank'
        break;

      case "reproduction":
        h1.innerHTML = 'Reproduction'
        p.innerHTML = "This belongs to the main life properties series, was made for a post talking about the reproduction property."
        a.href = 'https://www.facebook.com/permalink.php?story_fbid=120968002960953&id=101122568278830'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "paypal_mafia":
        h1.innerHTML = 'PayPal mafia'
        p.innerHTML = "So this one was made for a series of posts explaining the history of Elon musk; this specific post represents the PayPal mafia that was one of Elon musk big moves."
        a.href = 'https://www.facebook.com/robotopteam/posts/647460942609676'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "phone concept":
        h1.innerHTML = 'Transparent phone'
        p.innerHTML = "Do you know the crazy concepts of a transparent phone? I said to myself, 'Why not try making one?' This's what I ended up with<br>cool, right?"
        a.href = '#'
        a.innerHTML = 'No link avalible'
        a.target = '_blank'
        break;

      case "spider_man":
        h1.innerHTML = 'Spider-man'
        p.innerHTML = "♪ Spider-man! Spider-man! does whatever a spider can! Who doesn't love spider-man? I do love him a lot, so it's only natural to make a design about my fav marvel character(after DR.strange)."
        a.href = '#'
        a.innerHTML = 'No link avalible'
        a.target = '_blank'
        break;

      case "nasa_zoom":
        h1.innerHTML = 'Space apps'
        p.innerHTML = "So I was a part of NASA space apps(SAC) local lead in Alexandria, made this one for a post about a zoom session to explain the challenges of SAC and answer people's questions, but sadly it wasn't published."
        a.href = '#'
        a.innerHTML = 'No link avalible'
        a.target = '_blank'
        break;

      case "volume":
        h1.innerHTML = 'Smoke'
        p.innerHTML = "I was kinda bored and had nothing to do, so I tried messing around with volumes to make a deep scene, and that's what I ended up with."
        a.href = '#'
        a.innerHTML = 'No link avalible'
        a.target = '_blank'
        break;

      case "tedx_reqruitment":
        h1.innerHTML = 'Dome recruitment'
        p.innerHTML = "So this's the recruitment design I made for TEDxYouth@GharbiyaSTEM; after many tries and many complications, I ended up with a simple Dome concept, and as said, 'less is more.'"
        a.href = 'https://www.facebook.com/TEDxYouthGharbiyaSTEM/posts/164303615179144'
        a.innerHTML = 'Link to this design'
        a.target = '_blank'
        break;

      case "fav_anime":
        h1.innerHTML = 'Anime collection'
        p.innerHTML = "I'm an otaku, and I really love anime, so it's natural to make a design gathering my favorite animes."
        a.href = '#'
        a.innerHTML = 'No link avalible'
        a.target = '_blank'
        break;

      case "doughnut":
        h1.innerHTML = 'A doughnut'
        p.innerHTML = "This one is really close to me; it was the first thing I made in my graphic design journey."
        a.href = '#'
        a.innerHTML = 'No link avalibe'
        a.target = '_blank'
        break;

      case "tedx_cover":
        h1.innerHTML = 'Dome cover'
        p.innerHTML = "Following up on the concept of the Dome, I made this cover for TEDxYouth@GharibyaSTEM."
        a.href = 'https://www.facebook.com/TEDxYouthGharbiyaSTEM/photos/a.111723577103815/163443065265199/'
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

