// Variables
const listaTweets = document.getElementById("lista-tweets");

// console.log(listaTweets)
eventListeners();

function eventListeners() {
  // Cuando se envia el form
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);
  listaTweets.addEventListener("click", borrarTweet);
}

function agregarTweet(e) {
  e.preventDefault();
  //   console.log("Formulario enviado");
  // leer el valor del texarea
  const tweet = document.getElementById("tweet").value;
  //btn de eliminar
  const btnBorrar = document.createElement("a");
  btnBorrar.classList = "borrar-tweet";
  btnBorrar.innerText = "X";

  const li = document.createElement("li");
  li.innerText = tweet;
  li.appendChild(btnBorrar);
  listaTweets.appendChild(li);
  console.log(tweet);
}

function borrarTweet(e) {
  e.preventDefault();
  if (e.target.className === "borrar-tweet") {
    console.log(e.target.parentElement.remove());
    alert("Tweet eliminado!")
  }
}
