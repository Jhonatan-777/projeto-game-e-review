

document.addEventListener("DOMContentLoaded", function ()
{
  const gameSelecionado = JSON.parse(
    localStorage.getItem("gameSelecionado")
  );

  if (gameSelecionado)
  {
    const titleElement = document.getElementById("title");
    const platformElement = document.getElementById("platform");
    const genresElement = document.getElementById("genres");
    const developerElement = document.getElementById("developer");
    const designerElement = document.getElementById("designer");
    const launchElement = document.getElementById("launch");
    const imageElement = document.getElementById("image");
    const approvalElement = document.getElementById("approval");

    const description01 = document.getElementById("description01");
    const description02 = document.getElementById("description02");
    const description03 = document.getElementById("description03");

    const rateJogabilidade = document.getElementById("rate-jogabilidade");
    const rateHistoria = document.getElementById("rate-historia");
    const rateGraficos = document.getElementById("rate-graficos");
    const rateSom = document.getElementById("rate-som");
    const rateReplayability = document.getElementById("rate-replayability");
    const rateInovacao = document.getElementById("rate-inovacao");
    const rateDificuldade = document.getElementById("rate-dificuldade");


    titleElement.textContent = `${gameSelecionado.title}`;
    platformElement.textContent = `${gameSelecionado.plataformas}`;
    genresElement.textContent = `${gameSelecionado.generos}`;
    developerElement.textContent = `${gameSelecionado.desenvolvedor}`;
    designerElement.textContent = `${gameSelecionado.projetista}`;
    launchElement.textContent = `${gameSelecionado.lancamento}`;
    approvalElement.textContent = `${gameSelecionado.aprovacao} `;
    imageElement.setAttribute("src", gameSelecionado.imagem);

    description01.textContent = `${gameSelecionado.descricao01}`;
    description02.textContent = `${gameSelecionado.descricao02}`;
    description03.textContent = `${gameSelecionado.descricao03}`;

    rateJogabilidade.textContent = `${gameSelecionado.notaJogabilidade}`;
    rateHistoria.textContent = `${gameSelecionado.notaHistoria}`;
    rateGraficos.textContent = `${gameSelecionado.notaGraficos}`;
    rateSom.textContent = `${gameSelecionado.notaSom}`;
    rateReplayability.textContent = `${gameSelecionado.notaReplayability}`;
    rateInovacao.textContent = `${gameSelecionado.notaInovacao}`;
    rateDificuldade.textContent = `${gameSelecionado.notaDificuldade}`;

  } else
  {
    // Fallback caso não haja livro selecionado
    const titleElement = document.getElementById("title");
    const platformElement = document.getElementById("platform");
    const genresElement = document.getElementById("genres");
    const developerElement = document.getElementById("developer");
    const designerElement = document.getElementById("designer");
    const launchElement = document.getElementById("launch");
    const imageElement = document.getElementById("image");
    const approvalElement = document.getElementById("approval");

    const description01 = document.getElementById("description01");
    const description02 = document.getElementById("description02");
    const description03 = document.getElementById("description03");

    const rateJogabilidade = document.getElementById("rate-jogabilidade");
    const rateHistoria = document.getElementById("rate-historia");
    const rateGraficos = document.getElementById("rate-graficos");
    const rateSom = document.getElementById("rate-som");
    const rateReplayability = document.getElementById("rate-replayability");
    const rateInovacao = document.getElementById("rate-inovacao");
    const rateDificuldade = document.getElementById("rate-dificuldade");


    titleElement.textContent = `Analise do Game não Disponível`;
    platformElement.textContent = `Analise não Disponível`;
    genresElement.textContent = `Analise não Disponível`;
    developerElement.textContent = `Analise não Disponível`;
    designerElement.textContent = `Analise não Disponível`;
    launchElement.textContent = `Analise não Disponível`;
    approvalElement.textContent = `Analise não Disponível`;
    imageElement.textContent = `Analise não Disponível`;

    description01.textContent = `Sem Dados`;
    description02.textContent = ``;
    description03.textContent = ``;

    rateJogabilidade.textContent = `-`;
    rateHistoria.textContent = `-`;
    rateGraficos.textContent = `-`;
    rateSom.textContent = `-`;
    rateReplayability.textContent = `-`;
    rateInovacao.textContent = `-`;
    rateDificuldade.textContent = `-`;
  }
});

//Shadow header
const shadowHeader = () =>
{
  const header = document.getElementById('header')
  //Quando o scroll for superior a 50 altura da viewport, adicione a classe do cabeçalho da sombra à etiqueta do cabeçalho
  this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);