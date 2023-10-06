let slides = document.querySelectorAll('.slid');
let buttons = document.querySelectorAll('.btn-bottom');
let index =0;
let dot=document.querySelector('.dot')
function prev(){
    slides[index].classList.remove('active');
    index=(index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}

function next(){
    slides[index].classList.remove('active');
    index=(index + 1) % slides.length;
    slides[index].classList.add('active');
}

