const slides = document.querySelectorAll('.slide')
const btns = document.querySelectorAll('.btn');
let currentSlide = 1;

const manualSlide = (manual)=>{
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    });
    btns.forEach((btn)=>{
        btn.classList.remove('active');
    })

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        manualSlide(i);
        currentSlide = i;
    })
})

const repeat = (activeClass)=>{
    let active = document.getElementsByClassName('active');
    let i = 1;
    let repeater = ()=>{
        setTimeout(function(){
        [...active].forEach((activeSlide)=>{
            activeSlide.classList.remove('active')
        })
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
            if(slides.length===i){
                i=0;
            }
            if(i>=slides.length){
                return;
            }
            repeater()
        },3000);
    }
    repeater();   
}
repeat(currentSlide)
