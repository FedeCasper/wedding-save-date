const $picContainer = document.getElementById('pics-container')
const $footerButtons = document.querySelectorAll('.write-and-countdown')
const $picCircle = document.getElementById('pics-circle')
const picOne = document.getElementById('first-pic')
const picTwo = document.getElementById('second-pic')
const picThree = document.getElementById('third-pic')
const $agendarBtn = document.getElementById('agendar-btn') 

let toogle = true

$picContainer.addEventListener('touchstart', () => {
   if(toogle){
      toogle = false
      picOne.style.transform = 'translateY(-150px) translateX(-75%) rotate(15deg)';
      picThree.style.transform = 'translateY(150px) translateX(75%) rotate(-15deg)';
   }else{
      toogle = true
      picOne.style.transform = 'translateY(0) rotate(-15deg)'; 
      picThree.style.transform = 'translateY(0) rotate(15deg)'; 
   }
})

$picContainer.addEventListener('mouseenter', () => {
      picOne.style.transform = 'translateY(-150px) translateX(-75%) rotate(15deg)';
      picThree.style.transform = 'translateY(150px) translateX(75%) rotate(-15deg)';
})

$picContainer.addEventListener('mouseleave', () => {
   picOne.style.transform = 'translateY(0) rotate(-15deg)'; 
   picThree.style.transform = 'translateY(0) rotate(15deg)'; 
})

$footerButtons.forEach(element => element.addEventListener('mouseover', (e) => {
   if(e.target.classList[0]){
      element.style.color = '#5D7551'
      element.style.fontWeight = 'bold'
      element.style.transform = 'scale(1.2)'
   }
}))

$footerButtons.forEach(element => element.addEventListener('mouseleave', (e) => {
   if(e.target.classList[0]){
      element.style.color = 'black'
      element.style.fontWeight = 'normal'
      element.style.transform = 'scale(1)'
   }
}))

function redirectionDelay() {
   let url = 'https://www.google.com/calendar/event?action=TEMPLATE&text=Casamiento%20Fede%26Fede%20💒👉🏼🥳&dates=20240309/20240310&details=Nos%20casamos!%20y%20s%C3%AD,%20obviamente%20que%20est%C3%A1s%20invitado.%0A%0AA%20tener%20en%20cuenta%20%F0%9F%95%9C%F0%9F%91%87%F0%9F%8F%BC%0A%F0%9F%92%92El%20%C2%A1S%C3%AD!%20de%20la%20iglesia%20lo%20damos%20a%20las%2011%20a.m%0A%F0%9F%A5%82El%20brindis%20empieza%20a%20las%2013%20p.m%20en%20la%20finca%20AMproS%0A%F0%9F%8E%89%20La%20fiesta%20depende%20de%20ustedes,%20así%20que%20vayan%20con%20zapatos%20c%C3%B3modos%20para%20darlo%20todo.%0A%0ALos%20queremos%20%F0%9F%92%9C%0AF%26F&location=AMProS%20Finca,%20C.%20Pescara,%20Cruz%20de%20Piedra,%20Mendoza,%20Argentina'
   setTimeout( ( ) => {
         window.location.href = url;
   }, 1000);
}

$agendarBtn.addEventListener('click', redirectionDelay)
$agendarBtn.addEventListener('touchstart', redirectionDelay)