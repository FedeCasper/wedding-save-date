const $buttons = document.querySelectorAll('.btn');

let url_1 = './pages/second.html'
let url_2 = './pages/third.html'
let url_3 = 'https://api.whatsapp.com/send?phone=2616189574'

$buttons.forEach( button => {
   button.addEventListener('click', ()=>{ redirectionDelay(button, url_1, url_2, url_3) } );
})

function redirectionDelay(element, url1, url2, url3) {
   if(element.outerText == 'Save the date'){
      setTimeout( ( ) => { window.location.href = url1 }, 500);
   }else if(element.outerText == 'Cuenta Regresiva'){
      setTimeout( ( ) => { window.location.href = url2 }, 500);
   } else{
      setTimeout( ( ) => { window.open( url3, '_blank' ) }, 1000);
   }
}




