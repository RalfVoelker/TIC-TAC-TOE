
    let fields = [
        null, null, null,
        null, null, null,
        null, null, null,
    ];

    function generateCircleHTML() {
        const color = '#00B0EF';
        return `<svg width="70" height="70">
                    <circle cx="35" cy="35" r="30" stroke="${color}" stroke-width="5" fill="none">
                        <animate attributeName="stroke-dasharray" from="0 200" to="200 0" dur="0.5s" fill="none" />
                    </circle>
                </svg>`;
    }

    function generateCrossHTML() {
        const color = '#FFC000';
        return `<svg width="70" height="70">
                    <line x1="10" y1="10" x2="60" y2="60" stroke="${color}" stroke-width="5">
                        <animate attributeName="stroke-dasharray" from="0 70" to="70 0" dur="0.5s" fill="freeze" />
                    </line>
                    <line x1="60" y1="10" x2="10" y2="60" stroke="${color}" stroke-width="5">
                        <animate attributeName="stroke-dasharray" from="0 70" to="70 0" dur="0.5s" fill="freeze" />
                    </line>
                </svg>`;
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
                    value = generateCircleHTML();
                } else if (fields[index] === 'cross') {
                    value = generateCrossHTML();
                }
                tableHTML += `<td onclick="handleClick(${index})">${value}</td>`;
            }
            tableHTML += '</tr>';
        }
        tableHTML += '</table>';
        content.innerHTML = tableHTML;
    }

    function handleClick(index) {
        if (fields[index] === null) {
            fields[index] = fields[index] === 'circle' ? 'cross' : 'circle';
            let tdElement = document.getElementsByTagName('td')[index];
            tdElement.innerHTML = fields[index] === 'circle' ? generateCircleHTML() : generateCrossHTML();
            tdElement.onclick = null; // Entferne onclick-Funktion nach dem Klick
           
        }
    }

    // Initial rendering
    render();
