const e = document.querySelector('#foot-btn');
console.log(e);

e.addEventListener('click', annotateFn);
function annotateFn() {
   console.log("object");
   const annotation = RoughNotation.annotate(e, { type: 'highlight', color: '#c49f5f5c', animationDuration: 500, strokeWidth: 5 });
   annotation.show();
   setTimeout(() => {
      window.location.href = 'https://api.whatsapp.com/send?phone=2616189574';
   }, 700)
}

