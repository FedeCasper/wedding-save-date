const $picContainer = document.getElementById('pics-container')
const $picCircle = document.getElementById('pics-circle')
const picOne = document.getElementById('first-pic')
const picTwo = document.getElementById('second-pic')
const picThree = document.getElementById('third-pic')
const $buttons = document.querySelectorAll('.btn');

let url_1 = 'https://www.google.com/calendar/event?action=TEMPLATE&text=Casamiento%20Fede%26Fede%20💒👉🏼🥳&dates=20240309/20240310&details=Nos%20casamos!%20y%20s%C3%AD,%20obviamente%20que%20est%C3%A1s%20invitado.%0A%0AA%20tener%20en%20cuenta%20%F0%9F%95%9C%F0%9F%91%87%F0%9F%8F%BC%0A%F0%9F%92%92El%20%C2%A1S%C3%AD!%20de%20la%20iglesia%20lo%20damos%20a%20las%2011%20a.m%0A%F0%9F%A5%82El%20brindis%20empieza%20a%20las%2013%20p.m%20en%20la%20finca%20AMproS%0A%F0%9F%8E%89%20La%20fiesta%20depende%20de%20ustedes,%20así%20que%20vayan%20con%20zapatos%20c%C3%B3modos%20para%20darlo%20todo.%0A%0ALos%20queremos%20%F0%9F%92%9C%0AF%26F&location=AMProS%20Finca,%20C.%20Pescara,%20Cruz%20de%20Piedra,%20Mendoza,%20Argentina'
let url_2 = './third.html'
let url_3 = 'https://api.whatsapp.com/send?phone=2616189574'
let toogle = true

const anchoViewport = window.innerWidth;
console.log('Ancho del viewport:', anchoViewport);

$picContainer.addEventListener('touchstart', () => {
   if(toogle){
      picOne.style.transform = 'translateY(-150px) translateX(-75%) rotate(15deg)';
      picThree.style.transform = 'translateY(150px) translateX(75%) rotate(-15deg)';
   }else{
      picOne.style.transform = 'translateY(0) rotate(-15deg)'; 
      picThree.style.transform = 'translateY(0) rotate(15deg)'; 
   }
   toogle = true
})

$picContainer.addEventListener('mouseenter', () => {
   if(window.innerWidth >= 1024){
      console.log("grande");
      picOne.style.transform = 'translateY(-250px) translateX(-100%) rotate(-15deg)';
      picThree.style.transform = 'translateY(250px) translateX(100%) rotate(-15deg)';
   }else{
      console.log("chico");
      picOne.style.transform = 'translateY(-150px) translateX(-75%) rotate(15deg)';
      picThree.style.transform = 'translateY(150px) translateX(75%) rotate(-15deg)';
   }
})

$picContainer.addEventListener('mouseleave', () => {
   picOne.style.transform = 'translateY(0) rotate(-15deg)'; 
   picThree.style.transform = 'translateY(0) rotate(15deg)'; 
})

$buttons.forEach( button => {
   button.addEventListener('click', () => { redirectionDelay(button, url_1, url_2, url_3) } );
})

function redirectionDelay(element, url1, url2, url3) {
   if(element.outerText == 'Agendar'){
      setTimeout( ( ) => { window.location.href = url1 }, 500);
   }else if(element.outerText == 'Cuenta Regresiva'){
      setTimeout( ( ) => { window.location.href = url2 }, 500);
   } else{
      setTimeout( ( ) => { window.open( url3, '_blank' ) }, 500);
   }
}
