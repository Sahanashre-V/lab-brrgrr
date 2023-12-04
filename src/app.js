// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
};

function renderPrice() {
  wholeWheatBun = 10;

  if (state["Patty"]) {
    wholeWheatBun = wholeWheatBun + ingredients["Patty"];
  }
  if (state["Cheese"]) {
    wholeWheatBun = wholeWheatBun + ingredients["Cheese"];
  }
  if (state["Tomatoes"]) {
    wholeWheatBun = wholeWheatBun + ingredients["Tomatoes"];
  }
  if (state["Onions"]) {
    wholeWheatBun = wholeWheatBun + ingredients["Onions"];
  }
  if (state["Lettuce"]) {
    wholeWheatBun = wholeWheatBun + ingredients["Lettuce"];
  }

  let price = document.querySelector(".price-details");
  price.textContent = "INR" + wholeWheatBun;
}

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
  renderPrice();
}

function renderButtons() {
  let buttonPatty = document.querySelector(".btn-patty");
  if (state["Patty"]) {
    buttonPatty.classList.add("active");
  } else {
    buttonPatty.classList.remove("active");
  }

  let buttonCheese = document.querySelector(".btn-cheese");
  if (state["Cheese"]) {
    buttonCheese.classList.add("active");
  } else {
    buttonCheese.classList.remove("active");
  }


let buttonTomatoes = document.querySelector(".btn-tomatoes");
  if (state["Tomatoes"]) {
    buttonTomatoes.classList.add("active");
  } else {
    buttonTomatoes.classList.remove("active");
  }

  let buttonOnion = document.querySelector(".btn-onions");
  if (state["Onions"]) {
    buttonOnion.classList.add("active");
  } else {
    buttonOnion.classList.remove("active");
  }

  let buttonLettuce = document.querySelector(".btn-lettuce");
  if (state["Lettuce"]) {
    buttonLettuce.classList.add("active");
  } else {
    buttonLettuce.classList.remove("active");
  }
}



function renderIngredientsBoard(){
  let ingboard = document.querySelectorAll(".items")
  // console.log(ingboard)
  if (state.Patty){
    ingboard[0].style.display="inherit";
  }
  else{
    ingboard[0].style.display="none"
  }

  let ingboard1 = document.querySelectorAll(".items")
  // console.log(ingboard)
  if (state.Cheese){
    ingboard1[1].style.display="inherit";
  }
  else{
    ingboard1[1].style.display="none"
  }

  let ingboard2 = document.querySelectorAll(".items")
  // console.log(ingboard)
  if (state.Onions){
    ingboard2[3].style.display="inherit";
  }
  else{
    ingboard2[3].style.display="none"
  }

  let ingboard3 = document.querySelectorAll(".items")
  // console.log(ingboard)
  if (state.Tomatoes){
    ingboard3[2].style.display="inherit";
  }
  else{
    ingboard3[2].style.display="none"
  }

  let ingboard4 = document.querySelectorAll(".items")
  // console.log(ingboard)
  if (state.Lettuce){
    ingboard4[4].style.display="inherit";
  }
  else{
    ingboard4[4].style.display="none"
  }
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }

  // patty.style.display = state.Patty ? "inherit" : "none"
}

function renderCheese() {
  let ingredient = document.querySelector("#cheese");
  if (state.Cheese) {
    ingredient.style.display = "inherit";
  } else {
    ingredient.style.display = "none";
  }
}

function renderTomatoes() {
  let ingredient = document.querySelector("#tomato");
  if (state.Tomatoes) {
    ingredient.style.display = "inherit";
  } else {
    ingredient.style.display = "none";
  }
}

function renderOnions() {
  let ingredient = document.querySelector("#onion");
  if (state.Onions) {
    ingredient.style.display = "inherit";
  } else {
    ingredient.style.display = "none";
  }
}

function renderLettuce() {
  let ingredient = document.querySelector("#lettuce");
  if (state.Lettuce) {
    ingredient.style.display = "inherit";
  } else {
    ingredient.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

renderButtons();
renderPrice();
renderIngredientsBoard();

//Challenge 1 - Add/Remove the class active to the buttons based on state

//Challenge 2 - Render only the items selected in the ingredients board based on the state

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
