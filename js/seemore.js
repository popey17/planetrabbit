var section1 = document.querySelectorAll(".section.one");
var section2 = document.querySelectorAll(".section.two");
var section3 = document.querySelectorAll(".section.three");
var section4 = document.querySelectorAll(".section.four");

var section = [section1,section2,section3,section4]   

var btn = document.querySelector('#seemore');
var i = 0;

btn.addEventListener('click',()=>{
    i+=1;
    var main = section[i];
    section[i].forEach(add);
    function add(x){
        x.classList.add('active');
    }
})
