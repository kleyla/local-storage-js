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
  //   Tweets cargados
  document.addEventListener("DOMContentLoaded", localStorageListo);
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

  //   Agregar a local storage
  agregarTweetLocalStorage(tweet);
}

function borrarTweet(e) {
  e.preventDefault();
  if (e.target.className === "borrar-tweet") {
    e.target.parentElement.remove();
    // alert("Tweet eliminado!");
    // console.log(e.target.parentElement.innerText);
    borrarTweetLocalStorage(e.target.parentElement.innerText);
  }
}
function agregarTweetLocalStorage(tweet) {
  let tweets;
  tweets = getTweetLocalStorage();
  tweets.push(tweet);
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function getTweetLocalStorage() {
  let tweets;
  if (localStorage.getItem("tweets") === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem("tweets"));
  }
  return tweets;
}
function localStorageListo() {
  let tweets;
  tweets = getTweetLocalStorage();
  //   console.log(tweets);
  tweets.forEach(function(tweet) {
    const btnBorrar = document.createElement("a");
    btnBorrar.classList = "borrar-tweet";
    btnBorrar.innerText = "X";

    const li = document.createElement("li");
    li.innerText = tweet;
    li.appendChild(btnBorrar);
    listaTweets.appendChild(li);
  });
}
function borrarTweetLocalStorage(tweet) {
  let tweetBorrar;
  tweetBorrar = tweet.substring(0, tweet.length - 1);
  let tweets = getTweetLocalStorage();
  tweets.forEach(function(tweet, index) {
    // console.log(tweet);
    if (tweet === tweetBorrar) {
      tweets.splice(index, 1);
    }
  });
  //   console.log(tweets);
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
