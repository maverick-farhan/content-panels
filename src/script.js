//Accordion
let controls = document.querySelectorAll('.accordion-control');
//let current = document.querySelector('div.active');
controls.forEach((control) => {
    control.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if (control.classList.contains("active"))
    {
            control.classList.remove("active")
    }
        else{
        let active = document.querySelectorAll('.active');
            active.forEach((active)=>{
            active.classList.remove('active');
            });
           
            control.classList.add('active');
          }       
    e.stopPropagation();
},true);
});
//Tabbed Panel
//Modal Window
//Responsive Slider
//Photo Viewer