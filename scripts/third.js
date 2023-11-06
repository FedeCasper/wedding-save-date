const $agendarBtn = document.getElementById('agendar-btn')
const $btnModal = document.querySelector('button[title="Regalo"]');
console.log($btnModal);
const $modalContainer = document.querySelector('.modal-container');
console.log($modalContainer);
const $modal = document.querySelector('.modal');

function redirectionDelay() {
      let url = 'https://www.google.com/calendar/event?action=TEMPLATE&text=Casamiento%20Fede%26Fede%20💒👉🏼🥳&dates=20240309/20240310&details=Y%20hasta%20que%20un%20día%20dijimos%20vamos%20por%20el%20¡Sí,%20queremos!%20💍.%0A%0ANuestra%20tarea%20n°1%20👉🏼%20lista%20de%20las%20mejores%20personas%20de%20nuestros%20universos%20que%20no%20podrían%20faltarnos%20para%20compartir%20ese%20momento.%20Y%20bueno,%20vos%20sos%20parte%20de%20esa%20reducida%20selección%20🫂💫.%20Así%20que,%20¡sí!,%20estás%20invitado,%20invitada,%20a%20nuestra%20pequeña%20celebración%20de%20amor.%0A%0AA%20tener%20en%20cuenta%20🕜👇🏼%0A%0A💒%2011%20a.m%20|%20Damos%20el%20¡Sí!%20en%20la%20iglesia%20Nuestra%20Señora%20del%20Perpetuo%20Socorro%0A%0A🥂%2012%2030%20p.m%20|%20Empieza%20el%20brindis%20en%20la%20finca%20AMproS%0A%0A🎉%20Y%20acá%20no%20hay%20límites,%20la%20fiesta%20depende%20de%20ustedes,%20así%20que%20vayan%20con%20zapatos%20cómodos%20y%20listos%20para%20darlo%20todo.%0A%0ALos%20esperamos,%20y%20los%20queremos%20💜%0AF%26F&location=AMProS%20Finca,%20C.%20Pescara,%20Cruz%20de%20Piedra,%20Mendoza,%20Argentina';
      setTimeout(() => {
            window.open(url, '_blank')
      }, 1000);
}

$agendarBtn.addEventListener('click', redirectionDelay)
$agendarBtn.addEventListener('touchstart', redirectionDelay)