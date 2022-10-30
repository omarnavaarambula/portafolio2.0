const menuHamburguesa = document.querySelector(".menu-hamburguesa")
const menuNav = document.getElementById("nav")
const body = document.querySelector("body")
const headerTop = document.querySelector(".header-top")
const form = document.getElementById("form-contact")
const mailTo = document.getElementById("mail-to")
const sections = document.querySelectorAll(".sections")

menuHamburguesa.addEventListener("click", (e) => {
  body.classList.toggle("body-open-nav")
  menuNav.classList.toggle("nav-open")
})

menuNav.addEventListener("click", (e) => {
  body.classList.toggle("body-open-nav")
  menuNav.classList.remove("nav-open")
})

window.addEventListener("scroll", (e) => {
  if(scrollY > 0){
    if(!headerTop.classList.contains("scroll-window")) {
      headerTop.classList.add("scroll-window") 
    }
  } else if(scrollY === 0){
    headerTop.classList.remove("scroll-window")
  }
})

form.addEventListener("submit", e => {
  e.preventDefault()
  const formulario = new FormData(form)
  mailTo.setAttribute("href", `mailto:omarnavaarambula@gmail.com?subject=${formulario.get("name")} - ${formulario.get("correo")}&body=${formulario.get("correo-message")}`)
  mailTo.click()
  form.querySelector("#input-name").value = ""
  form.querySelector("#input-correo").value = ""
  form.querySelector("#message").value = ""
})


let tamanioMarker
let indexSectionActive
const observer = new IntersectionObserver(entries => {
  entries.forEach(entrada => {
    if(entrada.isIntersecting){
      let listLinks = menuNav.querySelectorAll("a")
      indexSectionActive = [...sections].indexOf(entrada.target)
      for(let i = 0; i < listLinks.length; i++) {
        if(indexSectionActive !== i) {
          listLinks[i].classList.remove("marker")
        }
      }
      listLinks[indexSectionActive].classList.add("marker")
    }
  })
}, {
  rootMargin: "-83px 0px 0px 0px",
  threshold: 0.7
})

sections.forEach(section => observer.observe(section))