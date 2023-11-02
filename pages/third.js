const $agendarBtn = document.getElementById('agendar-btn') 
function countdown() {
   const targetDate = new Date('2024-03-10 17:00:00').getTime();
   const now = new Date().getTime();
   const timeLeft = (targetDate - now)

   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

   document.getElementById('days').innerHTML = days;
   document.getElementById('hours').innerHTML = hours;
   document.getElementById('minutes').innerHTML = minutes;
   document.getElementById('seconds').innerHTML = seconds;
}

setInterval(countdown, 1000);

function redirectionDelay() {
   let url = 'https://www.google.com/calendar/event?action=TEMPLATE&text=Casamiento%20Fede%26Fede%20💒👉🏼🥳&dates=20240309/20240310&details=Nos%20casamos!%20y%20s%C3%AD,%20obviamente%20que%20est%C3%A1s%20invitado.%0A%0AA%20tener%20en%20cuenta%20%F0%9F%95%9C%F0%9F%91%87%F0%9F%8F%BC%0A%F0%9F%92%92El%20%C2%A1S%C3%AD!%20de%20la%20iglesia%20lo%20damos%20a%20las%2011%20a.m%0A%F0%9F%A5%82El%20brindis%20empieza%20a%20las%2013%20p.m%20en%20la%20finca%20AMproS%0A%F0%9F%8E%89%20La%20fiesta%20depende%20de%20ustedes,%20así%20que%20vayan%20con%20zapatos%20c%C3%B3modos%20para%20darlo%20todo.%0A%0ALos%20queremos%20%F0%9F%92%9C%0AF%26F&location=AMProS%20Finca,%20C.%20Pescara,%20Cruz%20de%20Piedra,%20Mendoza,%20Argentina'
   setTimeout( ( ) => {
         window.open(url, '_blank')
   }, 1000);
}

$agendarBtn.addEventListener('click', redirectionDelay)
$agendarBtn.addEventListener('touchstart', redirectionDelay)