const $picContainer = document.getElementById('pics-container')
const $picCircle = document.getElementById('pics-circle')
console.log($picCircle);
const picOne = document.getElementById('first-pic')
const picTwo = document.getElementById('second-pic')
const picThree = document.getElementById('third-pic')

let toogle = true

// $picContainer.addEventListener('mouseover', () => {
//    picOne.style.transform = 'translateY(-150px) translateX(-100%) rotate(-15deg)';
//    picThree.style.transform = 'translateY(150px) translateX(100%) rotate(15deg)';
//    $picCircle.style.transform = 'rotate(360deg)';
// })

// $picContainer.addEventListener('mouseleave', () => {
//    picOne.style.transform = 'translate(0) rotate(-15deg)'; 
//    picThree.style.transform = 'translate(0) rotate(15deg)'; 
//    $picCircle.style.transform = 'rotate(0deg)';
// });
// translateY(-150px) translateX(-100%) rotate(-15deg)

$picContainer.addEventListener('touchstart', () => {
   if(toogle){
      toogle = false
      picOne.style.transform = 'translateY(-150px) translateX(-100%) rotate(-15deg)';
      picThree.style.transform = 'translateY(150px) translateX(100%) rotate(15deg)';
   }else{
      toogle = true
      picOne.style.transform = 'translateY(0) rotate(-15deg)'; 
      picThree.style.transform = 'translateY(0) rotate(15deg)'; 
   }
})

$picContainer.addEventListener('mouseenter', () => {
      picOne.style.transform = 'translateY(-150px) translateX(-100%) rotate(-15deg)';
      picThree.style.transform = 'translateY(150px) translateX(100%) rotate(15deg)';
})

$picContainer.addEventListener('mouseleave', () => {
   picOne.style.transform = 'translateY(0) rotate(-15deg)'; 
   picThree.style.transform = 'translateY(0) rotate(15deg)'; 
})