function changeImg(smallImg){
    let fullImg = document.getElementById('imageBox');
    
    fullImg.src = smallImg.src;

}
const miniImg = document.querySelectorAll('.mini-map img')

miniImg.forEach(mini => {
mini.addEventListener('click',(e)=>{
    let target = e.target;
    miniImg.forEach(mini=>{
    if(mini.classList.contains('active')){
    mini.classList.remove('active')
    }
});
    mini.classList.add('active')
    changeImg(target);
});
});