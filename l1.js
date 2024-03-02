let contain=document.querySelector('.container');
let output=document.querySelector('.output');
let fill=document.querySelector('.fill');
let click1=document.querySelector('#button');
var counter=document.querySelector('.counter');

click1.addEventListener('click',()=>{
    var a=0;
    var run=setInterval(frames,50)
    function frames(){
        a=a + 1;
        if(a==101){
            clearInterval(run);
            contain.style.display='none';
            output.style.display='block';
        }
        else{
            counter.textContent= a + '%';
            fill.style.width= a + '%';
            // output.style.display='none';
        }
    }
})