const $lockablesElements = document.querySelectorAll('.lockable');
console.log($lockablesElements);
const $buttons = document.querySelectorAll('.btn');
const $btnModal = document.querySelector('button[title="Regalo"]');
console.log($btnModal);
const $modalContainer = document.querySelector('.modal-container');
console.log($modalContainer);
const $modal = document.querySelector('.modal');
console.log($modal);
const $btnClose = document.getElementById('close')
console.log($btnClose);

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



$buttons.forEach( button => {
   button.addEventListener('click', ()=>{ redirectionDelay(button, url_1, url_2, url_3) } );
})

$btnModal.addEventListener('click', () => {
   $modal.style.display = $modal.style.display === 'none' || $modal.style.display === '' ? 'block' : 'none';
   $modalContainer.style.display = $modalContainer.style.display === 'none' || $modalContainer.style.display === '' ? 'block' : 'none';
   $modalContainer.classList.toggle('backdrop-blur-md');
   $lockablesElements.forEach( element => {
      element.style.display = 'none'
   })
});

$btnClose.addEventListener('click', () => {
   $modal.style.display = $modal.style.display === 'none' || $modal.style.display === '' ? 'block' : 'none';
   $modalContainer.style.display = $modalContainer.style.display === 'none' || $modalContainer.style.display === '' ? 'block' : 'none';
   $modalContainer.classList.toggle('backdrop-blur-md');
   $lockablesElements.forEach( element => {
      element.style.display = 'block'
   })
})






