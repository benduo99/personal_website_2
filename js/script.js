const intro = document.querySelector('.intro');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        intro.classlist.add('display-none');
    }, 2000);
})