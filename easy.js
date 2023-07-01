function borrarMitadgridEasy(matriz) {
  const gridEasy = matriz.map(arr => [...arr]);
  const n = gridEasy.length;
  const m = gridEasy[0].length;

  const totalElementos = n * m;
  const elementosABorrar = Math.floor(totalElementos / 2);

  const indices = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      indices.push([i, j]);
    }
  }

  for (let i = 0; i < elementosABorrar; i++) {
    const randomIndex = Math.floor(Math.random() * indices.length);
    const [fila, columna] = indices[randomIndex];
    gridEasy[fila][columna] = ''; // Opcionalmente, puedes asignar otro valor para representar los elementos borrados
    indices.splice(randomIndex, 1);
  }

  return gridEasy;
}
