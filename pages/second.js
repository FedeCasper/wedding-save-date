const $picContainer = document.getElementById('pics-container')
const picOne = document.getElementById('first-pic')
const picTwo = document.getElementById('second-pic')
const picThree = document.getElementById('third-pic')

$picContainer.addEventListener('mouseover', () => {
   picOne.style.transform = 'translateY(-150px) translateX(-100%) rotate(-15deg)';
   picThree.style.transform = 'translateY(150px) translateX(100%) rotate(15deg)';
})

$picContainer.addEventListener('mouseleave', () => {
   picOne.style.transform = 'translate(0) rotate(-15deg)'; 
   picThree.style.transform = 'translate(0) rotate(15deg)'; 
});
// translateY(-150px) translateX(-100%) rotate(-15deg)