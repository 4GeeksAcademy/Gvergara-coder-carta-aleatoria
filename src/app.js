function generarCartaAleatoria(numbers, palos){
  const valueRandom = numbers[Math.floor(Math.random() * numbers.length)];
  const sticksRandom = palos[Math.floor(Math.random() * palos.length)];
    return { value: valueRandom, sticks: sticksRandom};
}


function showCart(){
  const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Rey", "Reina", "Jota", "As"];
  const sticks = ["♦",  "♥",  "♠",  "♣"];

  const newCart = generarCartaAleatoria(value, sticks);
  const stickElement = document.getElementById("stick-up");
  const numberElemt = document.getElementById("number");
  const stickElement2 = document.getElementById("stick-down");
  const newCartBtn = document.getElementById("newCart");
  
  stickElement.innerText = newCart.sticks
  numberElemt.innerText = newCart.value
  stickElement2.innerText = newCart.sticks
  newCartBtn.addEventListener("click", showCart)

  console.log(newCart.sticks);
  
}
window.onload = function(){
  showCart()
}
