let vector115 = document.getElementById('vector115');
let vector119 = document.getElementById('vector119');
let harmony1 = document.getElementById('harmony1');
let harmony2 = document.getElementById('harmony2');
let tamquantrong = document.getElementById('tamquantrongtext');
let suckhoetamthan = document.getElementById('suckhoetamthantext');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
let line4 = document.getElementById('line4');
let line5 = document.getElementById('line5');
let line6 = document.getElementById('line6');
let blurvector = document.getElementById('blurvector');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    vector115.style.left = value * -0.3 + 'px';
    vector119.style.right = value * -0.3 + 'px';
    harmony1.style.right = value * -0.7 +'px';
    harmony2.style.left = value * -0.7 +'px';
    tamquantrongtext.style.top = value * -0.7 +'px';
    suckhoetamthantext.style.top = value * 0.7 +'px';
    blurvector.style.right = value * -0.7 +'px';

})
