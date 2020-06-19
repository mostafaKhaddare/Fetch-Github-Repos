//get selectors
let input = document.querySelector("input");
let button = document.querySelector(".button");
let showData = document.querySelector(".show-data");

button.addEventListener("click", getRepos);

function getRepos() {
  if (input.value === "") {
    showData.innerHTML = `<span> please write usename github </span>`;
  } else if (showData.innerHTML === "") {
    showData.innerHTML = `<span> we d'ont found your search</span>`;
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        showData.innerHTML = "";
        //loop on the data
        data.forEach((repo) => {
          //create div
          let div = document.createElement("div");
          //add class
          div.classList.add("repo-box");
          //create contenu
          let contenu = document.createTextNode(repo.name);
          //append on the div
          div.appendChild(contenu);
          //appen on data-shox wontaner

          //create anckor eelemnt
          let theUrl = document.createElement("a");
          // txt in the url
          let theUrlText = document.createTextNode("visit");
          // add the hyper text referece
          theUrl.href = `https://github.com/${input.value}/${repo.name}`;
          //add blank attribute
          theUrl.setAttribute("target", "_blank");

          // append on the url
          theUrl.appendChild(theUrlText);
          div.appendChild(theUrl);

          showData.appendChild(div);
        });
      });
  }
}
