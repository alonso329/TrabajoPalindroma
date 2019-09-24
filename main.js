var dt = new Date();

document.getElementById('datetime').innerHTML = dt.toLocaleTimeString();

function invertir(cadena) {
  var x = cadena.length;
  var cadenaInvertida = '';

  while (x >= 0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return cadenaInvertida;
}

function comprobar() {
  var divResultado = document.getElementById('resultado');
  divResultado.innerHTML = '';
  var areaTexto = document.getElementById('areaTexto').value;
  var palabrasArea = areaTexto.split(' ');
  var palindroma = new Array(palabrasArea.length);
  var palabraInvertida;
  for (var i = 0; i < palabrasArea.length; i++) {
    palabraInvertida = invertir(palabrasArea[i]);
    if (palabrasArea[i] == palabraInvertida) {
      palindroma[i] = 'Si es palindroma';
    } else {
      palindroma[i] = 'No es palindroma';
    }
    if (
      palabrasArea[i] != '' ||
      palabrasArea[i] != undefined ||
      palabrasArea[i] != ' '
    ) {
      divResultado.innerHTML += `
        <p style="font-size: 20px">${palabrasArea[i]}: ${palindroma[i]}<p>
    `;
    }
  }
}
