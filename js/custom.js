const d = document,
  w = window;

const links = (formulario) => {
  const $form = d.getElementById(formulario);

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      w.open("./thanks.html", "_blank");
    }
  });
};

d.addEventListener("DOMContentLoaded", (e) => {
  links("formulario");
});
