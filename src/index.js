const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.children[1].value;

    fetch(`http://localhost:3000/movies/${input}`)
    .then((resp) => resp.json())
    .then((json) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        title.innerText = json.title;
        summary.innerText = json.summary;
    });
  });
};

document.addEventListener('DOMContentLoaded', init);