//Accordion
let controls = document.querySelectorAll('.accordion-control');
let content = document.querySelectorAll('div.accordion-panel');
let icons = document.querySelectorAll('span#show i');

    controls.forEach((control) => {
    control.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(control.children);
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
