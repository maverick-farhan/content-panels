const close = document.querySelector('.close')
const modalBox = document.getElementById('modal');
function modal(){
    modalBox.classList.add('popup');
}

close.addEventListener('click',()=>{
    modalBox.style.display='none';
});
setTimeout(modal,5000)

function counting(seconds){
const count = document.querySelector(".timeCount");
const interval = setInterval(()=>{
count.textContent = `Redirection will be start at ${seconds}....`;
seconds-=1;
if(seconds<1){
    clearInterval(interval);
}
},1000)
}
counting(5)