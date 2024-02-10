// Show Menu
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')


// Menu Show
// Validate if constant exists
if (navToggle)
{
  navToggle.addEventListener('click', () =>
  {
    navMenu.classList.add('show-menu');
  })
}

// Menu Hidden
// Validate if constant exists
if (navClose)
{
  navClose.addEventListener('click', () =>
  {
    navMenu.classList.remove('show-menu');
  })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>
{
  const navMenu = document.getElementById('nav-menu')
  //Quando clicamos em cada nav-link, removemos a classe show-menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Shadow header
const shadowHeader = () =>
{
  const header = document.getElementById('header')
  //Quando o scroll for superior a 50 altura da viewport, adicione a classe do cabeçalho da sombra à etiqueta do cabeçalho
  this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

// Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>
{
  const scrollDown = window.scrollY

  sections.forEach(current =>
  {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 200,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight)
    {
      sectionsClass.classList.add('active-link')
    } else
    {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// Scroll Smooth
const linkLogo = document.querySelectorAll('.logo-container .logo');
const links = document.querySelectorAll('.nav-menu a');
const linksFooter = document.querySelectorAll('.footer-links a');


linkLogo.forEach(link =>
{
  link.addEventListener('click', scrollToSection);
});

links.forEach(link =>
{
  link.addEventListener('click', scrollToSection);
});

linksFooter.forEach(link =>
{
  link.addEventListener('click', scrollToSection);
});


function getScrollTopByHref(element)
{
  // Verifica se o próprio elemento clicado é um link <a>
  if (element.tagName.toLowerCase() === 'a')
  {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  } else
  {
    const parentAnchor = element.closest('a');
    if (parentAnchor)
    {
      const id = parentAnchor.getAttribute('href');
      return document.querySelector(id).offsetTop;
    }
  }
}

function scrollToSection(event)
{
  event.preventDefault();
  const to = getScrollTopByHref(event.target)

  scrollToPosition(to);
}

function scrollToPosition(to)
{
  smoothScrollTo(0, to)
}


/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration)
{
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) =>
  {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() =>
  {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration)
    {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

// slide seção top games
document.addEventListener("DOMContentLoaded", function ()
{
  const slideControllers = document.querySelectorAll(".slide-controller");
  const slidesList = document.querySelector(".slides-list");

  let currentIndex = 0; // variável para rastrear o índice do slide atual
  const intervalTime = 5000; // tempo em milissegundos entre cada transição de slide
  let slideInterval; // variável para armazenar o intervalo de temporizador

  // Função para avançar para o próximo slide
  function nextSlide()
  {
    currentIndex = (currentIndex + 1) % slideControllers.length;
    updateSlide();
  }

  // Função para atualizar a exibição do slide com base no índice atual
  function updateSlide()
  {
    slidesList.style.left = `calc(${currentIndex * -100}%)`;
    // Atualiza o controle de slide selecionado
    slideControllers.forEach((controller, index) =>
    {
      controller.checked = index === currentIndex;
    });
  }

  // Adiciona um ouvinte de evento para cada controlador de slide
  slideControllers.forEach((controller, index) =>
  {
    controller.addEventListener("change", () =>
    {
      currentIndex = index;
      clearInterval(slideInterval); // Limpa o temporizador atual
      slideInterval = setInterval(nextSlide, intervalTime); // Define um novo temporizador
      updateSlide();
    });
  });

  // Define o temporizador inicial para alterar automaticamente os slides
  slideInterval = setInterval(nextSlide, intervalTime);

  // Adiciona o evento click aos spans checkmark
  const checkmarks = document.querySelectorAll('.checkmark');
  checkmarks.forEach((checkmark, index) =>
  {
    checkmark.addEventListener('click', () =>
    {
      slideControllers[index].click();
    });
  });
});