const d = document,
  w = window,
  local = localStorage;

//TODO: envio de formulario
const links = (formulario) => {
  const $form = d.getElementById(formulario);

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      w.open("./thanks.html", "_blank");
    }
  });
};

//TODO: scroll-the-top-button
const scrollTopBotton = (btn) => {
  const $scrollBoton = d.querySelector(btn);
  const svg = d.querySelector(`${btn} *`);

  w.addEventListener("scroll", e => {
      let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
      
      if (scrollTop > 600) {
          $scrollBoton.classList.remove("hidden");
      }else{
          $scrollBoton.classList.add("hidden");
      }
  });

  d.addEventListener("click", e => {
      if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
          w.scrollTo({
              behavior: "smooth",
              top: 0
          });
      }
  });

  d.addEventListener('mouseover', e => {
    if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
      svg.style.backgroundImage = 'url("../../MyResources/arrowUp-white.svg")';
    } else {
      svg.style.backgroundImage = 'url("../../MyResources/arrowUp-black.svg")'
    }
  })
}

//TODO: Dark-Mode
const Storage = () => {
  let item = local.getItem('theme');
  const svg = d.querySelector(`.dark-mode *`);
  const cuerpo = d.querySelector('.body');

  if (item !== null) {
    cuerpo.classList.add(item);
        svg.style.backgroundImage = 'url("../../MyResources/sun.svg")';
  } else {
        svg.style.backgroundImage = 'url("../../MyResources/moon.svg")';
  }
}

const darkModeBtn = (btn, darkClase) => {
  const darkBoton = d.querySelector(btn);
  const svg = d.querySelector(`${btn} *`);
  const theme = local.getItem("theme") === null ? darkClase : local.getItem("theme");
  const cuerpo = d.querySelector('.body');

  darkBoton.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if(cuerpo.classList.toggle(theme)){
        local.setItem("theme", darkClase);
      } else {
        local.removeItem("theme");
      }

      if(cuerpo.classList.contains(theme)){
        svg.style.backgroundImage = 'url("../../MyResources/sun.svg")';
      } else {
        svg.style.backgroundImage = 'url("../../MyResources/moon.svg")';
      }
    }
  });
};


//TODO: Carga de elementos (MAIN)
d.addEventListener("DOMContentLoaded", (e) => {
  Storage();
  links("formulario");
  scrollTopBotton(".btn-scroll");
  darkModeBtn('.dark-mode', 'darkTheme')
});
