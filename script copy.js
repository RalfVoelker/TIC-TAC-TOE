
    let fields = [
        null, 
        'x', 
        'x',
        null,
        'o', 
        null,
        'o', 
        null, 
        null,
    ];





    function render() {
        let contentDiv = document.getElementById('content');
        
        
        let tableHTML = '<table>';
        for (let i = 0; i < 3; i++) {
            tableHTML += '<tr>';
            for (let j = 0; j < 3; j++) {
                let index = i * 3 + j;
                
                let value = fields[index];
                tableHTML += `<td onclick="handleClick(${index})">${value || ''}</td>`;
            }
            tableHTML += '</tr>';
        }

        tableHTML += '</table>';
        contentDiv.innerHTML = tableHTML;
    }













    function handleClick(index) {
        if (fields[index] === null) {
            // Toggle between 'circle' and 'cross'
            fields[index] = fields[index] === 'o' ? 'x' : 'o';
            render();
        }
    }

    // Initial rendering
    render();




    function createAnimatedCircle() {
      const svgContainer = document.getElementById('svg-container');

      // SVG element erstellen
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '70');
      svg.setAttribute('height', '70');

      // Kreis erstellen
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', '35');
      circle.setAttribute('cy', '35');
      circle.setAttribute('r', '0'); // Start mit Radius 0
      circle.setAttribute('fill', '#00B0EF');

      // SVG und Kreis zum Container hinzufügen
      svg.appendChild(circle);
      svgContainer.appendChild(svg);

      // Animation mit requestAnimationFrame
      let radius = 0;

      function animate() {
          radius += 1;
          circle.setAttribute('r', radius);

          if (radius < 35) {
              requestAnimationFrame(animate);
          }
      }

      animate();
  }

  // Aufruf der Funktion
  createAnimatedCircle();