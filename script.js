let p2l = document.getElementById("text");
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");
let s5 = document.getElementById("s5"); 

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    p2l.style.marginTop = value * 1.5 + 'px';
    s1.style.left = value * -.5 + 'px';
    s2.style.left = value * -.8 + 'px';
    s4.style.left = value * .5 + 'px';
    s5.style.left = value * .8 + 'px';
    s3.style.top = value * .5 + 'px';
});