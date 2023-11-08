const $btnModal = document.querySelector('button[title="Regalo"]');
console.log($btnModal);
const $modalContainer = document.querySelector('.modal-container');
console.log($modalContainer);
const $modal = document.querySelector('.modal');
const $btnClose = document.getElementById('close')
console.log($btnClose);
const $lockablesElements = document.querySelectorAll('.lockable');
console.log($lockablesElements);
const $buttons = document.querySelectorAll('.btn');

function toogleModal(modalElement, modalContainerElement, lockableElementsList) {
   modalElement.style.display = $modal.style.display === 'none' || $modal.style.display === '' ? 'block' : 'none';
   $modalContainer.style.display = $modalContainer.style.display === 'none' || $modalContainer.style.display === '' ? 'block' : 'none';
   modalContainerElement.classList.toggle('backdrop-blur-md');
   lockableElementsList.forEach(element => {
      element.style.display === 'none' ? element.style.display = 'block' : element.style.display = 'none';
   })
}

function redirectionDelay() {
   let url = 'https://www.google.com/calendar/event?action=TEMPLATE&text=Casamiento%20Fede%26Fede%20💒👉🏼🥳&dates=20240309/20240310&details=¡Nos%20casamos!%20y%20sí,%20obviamente%20que%20estás%20invitado.%0A%0AA%20tener%20en%20cuenta%20%F0%9F%95%9C%F0%9F%91%87%F0%9F%8F%BC%0A%F0%9F%92%92El%20%C2%A1S%C3%AD!%20de%20la%20iglesia%20lo%20damos%20a%20las%2017%3A15%20p.m,%20en%20la%20iglesia%20de%20Chacras%0A%F0%9F%A5%82El%20brindis%20empieza%20a%20las%2019%20p.m%20en%20la%20finca%20AMproS,%20Maip%C3%BA%0A%F0%9F%8E%89%20La%20fiesta%20depende%20de%20ustedes,%20así%20que%20vayan%20con%20zapatos%20cómodos%20para%20darlo%20todo.%0A%0AF%26F'
   setTimeout(() => {
      window.open(url, '_blank')
   }, 1000);
}

$btnModal.addEventListener('click', () => {
   toogleModal($modal, $modalContainer, $lockablesElements);
});

$btnClose.addEventListener('click', () => {
   toogleModal($modal, $modalContainer, $lockablesElements);
})

$buttons.forEach( button => {
   button.addEventListener( 'click', redirectionDelay );
   button.addEventListener( 'touchstart', redirectionDelay );
})