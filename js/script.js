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