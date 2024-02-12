//Shadow header
const shadowHeader = () =>
{
  const header = document.getElementById('header')
  //Quando o scroll for superior a 50 altura da viewport, adicione a classe do cabeçalho da sombra à etiqueta do cabeçalho
  this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)