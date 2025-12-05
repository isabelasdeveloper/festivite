import "../styles/main.scss";

function themes() {
  const btnColor = document.querySelectorAll(".color-btn");

  btnColor.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  const btnThemes = document.querySelectorAll(".card-theme");

  btnThemes.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}

themes();
