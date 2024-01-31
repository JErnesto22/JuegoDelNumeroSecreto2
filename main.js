let numSecret = 0;
let intentos = 0;
let numUsados = [];
let numMax = 5;

initialConditions();

function initialConditions() {
  messageGenerator("title", "Bienvenido al juego de adivinar un numero");
  messageGenerator("message", `Ingresa un numero del 1 al ${numMax}`);
  numSecret = generateSecretNum();
  intentos = 1;
  document.getElementById("otherPlay").setAttribute("disabled", "true");
  document.getElementById("resetButton").setAttribute("disabled", "true");
}

function Reset() {
  numUsados = [];
  initialConditions();
}

function newGame() {
  /**
   *   numSecret = generateSecretNum();
  intentos = 1;
  clearInput();
  messageGenerator("message", `Ingresa un numero del 1 al ${numMax}`);
 */
  numSecret = generateSecretNum();
  intentos = 1;
  document.getElementById("otherPlay").setAttribute("disabled", "true");
  clearInput();
  
}

function Comparator() {
  let numUser = document.getElementById("numuser").value;
  if (numUser == numSecret) {
    messageGenerator(
      "message",
      `Acertaste!! lo lograste en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("otherPlay").removeAttribute("disabled");
  } else if (numUser < numSecret) {
    messageGenerator("message", "Upss... Intenta con un numero mayor ;)");
    intentos++;
    clearInput();
  } else {
    messageGenerator("message", "Upss... Intenta con un numero menor ;)");
    intentos++;
    clearInput();
  }
}

function messageGenerator(element, text) {
  let message = document.getElementById(element);
  message.innerHTML = text;
}

function clearInput() {
  document.getElementById("numuser").value = ""; //indicamos que el valor del input sera vacio, en otras palabras, limpiamos el input
  //document.querySelector('#id'); usando el # podemos indicarle al queryselector que estamos usando un id
  /**
   *let valueInput = document.getElementById("numuser");
  valueInput.value = ""; //indicamos que el valor del input sera vacio, en otras palabras, limpiamos el input
 
   */
}
function generateSecretNum() {
  numSecret = Math.floor(Math.random() * numMax) + 1;
  console.log(numSecret);
  console.log(numUsados);
  // Verificar si ya se sortearon todos los numeros para finalizar juego.
  if (numUsados.length == numMax) {
    console.log("Se sortearon todos los numeros");
    messageGenerator(
      "message",
      "Parece que ya adivinaste todos lo numeros posibles."
    );
    document.getElementById("resetButton").removeAttribute("disabled");
  } else {
    if (numUsados.includes(numSecret)) {
      //.includes se encarga de recorrer la lista para verificar si el parametro que se le asigno se encuentra en la lista.
      return generateSecretNum();
    } else {
      numUsados.push(numSecret); // .push agrega un elemento al final e una lista
      return numSecret;
    }
  }
}

/**
 * !Notas
 * *Recursividad: Una funcion puede llamarse a si misma.
 * hay que tener cuidado con la recursividad debido a que la funcion puede terminar repitiendose una cantidad infinita de veces.
 * * Ctrl + f para buscar un elemento en el codigo en vs code
 */
