const $footerBtns = document.querySelectorAll('.foot-btn');
console.log($footerBtns);
let url_1 = 'https://api.whatsapp.com/send?phone=2616189574'
let url_2 = './pages/third.html'


function annotateFn(element, url1, url2) {
   const annotation = RoughNotation.annotate(element, { type: 'highlight', color: '#c49f5f5c', animationDuration: 500, strokeWidth: 5 });
   annotation.show();
   
   setTimeout(() => {
      element.outerText == 'Escribinos' ?
      window.location.href = url1:
      window.location.href = url2;
      annotation.remove();
   }, 700)
}

$footerBtns.forEach( button => {
   button.addEventListener('click', ()=>{ annotateFn(button, url_1, url_2) } );
})





