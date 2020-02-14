const container = document.querySelector(".container")
const WINNIE = [
  { name: "1", image: "./images/winnie-the-pooh_01.png" },
  { name: "2", image: "./images/winnie-the-pooh_02.png" },
  { name: "3", image: "./images/winnie-the-pooh_03.png" },
  { name: "4", image: "./images/winnie-the-pooh_04.png" },
  { name: "5", image: "./images/winnie-the-pooh_05.jpg" },
  { name: "6", image: "./images/winnie-the-pooh_06.jpg" },
  { name: "7", image: "./images/winnie-the-pooh_07.jpg" },
  { name: "8", image: "./images/winnie-the-pooh_08.jpg" },
]

const showItem = (dom, data) => {
  let output = '';
  data.forEach(({name, image}) => {
    output += `
      <div class="card">
        <img class="card--avator" src="${image}" />
        <h1 class="card--title">${name}</h1>
      </div>
      `
  })
  dom.innerHTML = output;
}

document.addEventListener('DOMContentLoaded', showItem(container, WINNIE));


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}