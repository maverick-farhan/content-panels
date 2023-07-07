//Accordion
let controls = document.querySelectorAll('.accordion-control');
let content = document.querySelectorAll('div.accordion-panel')
content.forEach((elem)=>{
        elem.style.transition = "clip-path 1s ease";
        console.log(elem)
    })

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
