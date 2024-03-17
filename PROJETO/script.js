function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light1")

  // if (html.classList.contains('light1')) {
  // html.classList.remove('light1')//
  //}
  //else {
  // html.classList.add('light1')
  //

  //pegar a tag img
  const img = document.querySelector("#profile img");

  //depois e so subistituir imagem
  if (html.classList.contains("light1")) {
    //mas se tiver light mode colocar colocar foto de lihgt mode
    img.setAttribute("src", "./assets/avatar-light.png");
;
  
  }
  else{
    img.setAttribute("src", "./assets/avatar.png")
    // agr se tiver dark mode pegar a foto dark
  }

}
