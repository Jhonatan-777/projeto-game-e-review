import listGames from '../dados-games/listGames.js';


document.addEventListener('DOMContentLoaded', function ()
{
  const btnAnalise = document.querySelectorAll('.btn-analise-game');


  btnAnalise.forEach(link =>
  {
    link.addEventListener('click', function (event)
    {
      event.preventDefault(); // Evita que o link seja seguido imediatamente

      const gameId = Number(this.id);
      const gameSelecionado = listGames.find(game => game.id === gameId);

      if (gameSelecionado)
      {
        localStorage.setItem('gameSelecionado', JSON.stringify(gameSelecionado));
        window.location.href = this.href;
      }
    });
  });
});