
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


    function handleClick(tdElement,index) {
        if (fields[index] === null) {
          fields[index] = currentPlayer;
          tdElement.innerHTML = currentPlayer === 'circle' ? generateCircleHTML() :  generateCrossHTML();
          tdElement.onclick = null; // Entferne onclick-Funktion nach dem Klick
          currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle'; // Toggle between 'circle' and 'cross'
            // render();
        }
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

  