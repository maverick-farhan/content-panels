//Accordion
let contents = document.querySelectorAll('.accordion-panel');
let controls = document.querySelectorAll('.accordion-control');
let current = document.querySelector('div.active');
controls.forEach(element => {
    element.addEventListener('click',(e)=>{
    e.preventDefault();
console.log(e);
})
});
//Tabbed Panel
//Modal Window
//Responsive Slider
//Photo Viewer