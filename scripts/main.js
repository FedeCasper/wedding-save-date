const $buttons = document.querySelectorAll('.btn');
const $btnModal = document.querySelector('button[title="Regalo"]');
const $modalContainer = document.querySelector('.modal-container');
const $modal = document.querySelector('.modal');
const $lockablesElements = document.querySelectorAll('.lockable');
const $btnClose = document.getElementById('close')

let url_1 = './pages/second.html'
let url_2 = './pages/third.html'
let url_3 = 'https://api.whatsapp.com/send?phone=2616189574'

function redirectionDelay(element, url1, url2, url3) {
   if(element.outerText == 'Save the date'){
      setTimeout( ( ) => { window.location.href = url1 }, 500);
   }else if(element.outerText == 'Cuenta Regresiva'){
      setTimeout( ( ) => { window.location.href = url2 }, 500);
   } else{
      setTimeout( ( ) => { window.open( url3, '_blank' ) }, 1000);
   }
}

function toogleModal(modalElement, modalContainerElement, lockableElementsList) {
   modalElement.style.display = modalElement.style.display === 'none' || modalElement.style.display === '' ? 'block' : 'none';
   modalContainerElement.style.display = modalContainerElement.style.display === 'none' || modalContainerElement.style.display === '' ? 'block' : 'none';
   modalContainerElement.classList.toggle('backdrop-blur-md');
   lockableElementsList.forEach( element => {
      element.style.display === 'none' ? element.style.display = 'block' : element.style.display = 'none';
   })
}

$buttons.forEach( button => {
   button.addEventListener('click', ()=>{ redirectionDelay(button, url_1, url_2, url_3) } );
})

$btnModal.addEventListener('click', () => {
   toogleModal($modal, $modalContainer, $lockablesElements);
});

$btnClose.addEventListener('click', () => {
   toogleModal($modal, $modalContainer, $lockablesElements);
})






