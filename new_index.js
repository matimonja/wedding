const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})


document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

function timerCasamiento() {
    let fechaCasamiento = new Date('Feb 5, 2022 11:00:00').getTime();
    let now = new Date().getTime();
    let gap = fechaCasamiento - now;
  
    let segs = 1000;
    let mins = segs * 60;
    let horas = mins * 60;
    let dias = horas * 24;
  
    let diasFaltantes = Math.floor(gap / dias);
    let horasFaltantes = Math.floor((gap % dias) / horas);
    let minutosFaltantes = Math.floor((gap % horas) / mins);
    let segundosFaltantes = Math.floor((gap % mins) / segs);
  
    let listaTiempo = [diasFaltantes, horasFaltantes, minutosFaltantes, segundosFaltantes,gap];
  
    return listaTiempo;
  }

  function modifyTimeHtml(){
    let valores = timerCasamiento();
  
    document.querySelector('.dias').innerText = valores[0];
    document.querySelector('.horas').innerText = valores[1];
    document.querySelector('.minutos').innerText = valores[2];
    document.querySelector('.segundos').innerText = valores[3];
  }

  setInterval(modifyTimeHtml,500)