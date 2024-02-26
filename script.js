
    let fields = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];


    // Überprüfe horizontale, vertikale und diagonale Gewinnkombinationen
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontale
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertikale
    [0, 4, 8], [2, 4, 6]             // Diagonale
  ];


    let currentPlayer = 'circle';


    function init() {
      render();
  }


    function render() {
        let content = document.getElementById('content');
        let tableHTML = '<table>';
        for (let i = 0; i < 3; i++) {
            tableHTML += '<tr>';
            for (let j = 0; j < 3; j++) {
                let index = i * 3 + j;
                let value = '';
              if (fields[index] === 'circle') {
                value =  generateCircleHTML();
              } else if (fields[index] === 'cross') {
                value =  generateCrossHTML();
              }
                tableHTML += `<td onclick="handleClick(this,${index})">${value}</td>`;
            }
            tableHTML += '</tr>';
        }
        tableHTML += '</table>';
        content.innerHTML = tableHTML;
    }

    function handleClick(tdElement, index) {
       // Prüfen, ob das Feld bereits belegt ist 
      if (fields[index] === null) {
        // Dem Feld den aktuellen Spieler zuweisen
          fields[index] = currentPlayer;
           // HTML-Inhalt der Zelle aktualisieren, je nach aktuellen Spieler (IF/ELSE)
          tdElement.innerHTML = currentPlayer === 'circle' ? generateCircleHTML() : generateCrossHTML();
           // Entferne onclick-Funktion nach dem Klick
          tdElement.onclick = null;
          // Toggle zwischen Spieler 'circle' and 'cross'
          currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';
  
          const gameOver = isGameOver();
  
          if (gameOver) {
              const winningCombination = getWinningCombination();
              drawWinningLine(winningCombination);
          }
      }
  }


  function getWinningCombination() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            return combination;
        }
    }
    return null;
}
  

function isGameOver() {

   // Überprüfe horizontale, vertikale und diagonale Gewinnkombinationen
   const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontale
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertikale
    [0, 4, 8], [2, 4, 6]             // Diagonale
  ];

  for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
          return true; // Gewinnkombination gefunden
      }
      
  }
  // Überprüfe, ob alle Felder belegt sind (Unentschieden)
  if (fields.every(field => field !== null)) {
      return true; // Unentschieden
  }

  return false; // Spiel läuft weiter
}


function drawWinningLine(winningCombination) {
  const content = document.getElementById('content');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '314');
  svg.setAttribute('height', '314');
  svg.style.position = 'absolute';
  svg.style.zIndex = '1';

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  
  // Bestimme die Positionen basierend auf den gewinnenden Feldern
  const [start, middle, end] = winningCombination;
  const startPosition = getCellCenter(start);
  const middlePosition = getCellCenter(middle);
  const endPosition = getCellCenter(end);

  line.setAttribute('x1', startPosition.x);
  line.setAttribute('y1', startPosition.y);
  line.setAttribute('x2', endPosition.x);
  line.setAttribute('y2', endPosition.y);
  line.setAttribute('stroke', 'red');
  line.setAttribute('stroke-width', '6');

  svg.appendChild(line);
  content.appendChild(svg);
}

// Hilfsfunktion zur Bestimmung des Zentrums einer Zelle
function getCellCenter(index) {
  const cellSize =107;
  const row = Math.floor(index / 3);
  const col = index % 3;
  const x = col * cellSize + cellSize / 2;
  const y = row * cellSize + cellSize / 2;
  return { x, y };
}



function generateCircleHTML() {
  return  /*html*/ `<svg width="70" height="70">
            <circle cx="35" cy="35" r="30" stroke="#00B0EF" stroke-width="7" fill="none">
              <animate attributeName="stroke-dasharray" from="0 50" to="50 0" dur="0.2s" fill="none" />
            </circle>
          </svg>`;
}


function generateCrossHTML() {  
return  /*html*/ `<svg width="70" height="70">
            <line x1="10" y1="10" x2="60" y2="60" stroke="#FFC000" stroke-width="7">
              <animate attributeName="stroke-dasharray" from="0 20" to="20 0" dur="0.2s" fill="none" />
            </line>
            <line x1="60" y1="10" x2="10" y2="60" stroke="#FFC000" stroke-width="7">
              <animate attributeName="stroke-dasharray" from="0 20" to="20 0" dur="0.2s" fill="none" />
            </line>
          </svg>`;
}



























// function resetGame() {
//   fields = Array(9).fill(null);
//   currentPlayer = 'circle';

//   // Entferne die Siegeslinie
//   const content = document.getElementById('content');
//   const svg = content.querySelector('svg');
//   if (svg) {
//       content.removeChild(svg);
//   }

//   // Setze die Tabelle neu
//   render();
// }

