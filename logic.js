let ms = 01;
let sec = 01;
let min = 01;
let clear;
let clr = false;


let up =document.querySelector('.up');
let but =document.querySelector('.upbtn');

up.addEventListener('mouseenter',(e)=>{
    //up.style.background-color = red;
    
        document.querySelector('.up').innerHTML ="Press Enter To Start/Stop <br>Press Space To Reset";
});
up.addEventListener('mouseleave',(e)=>{
    //up.style.background-color = red;
        console.log(but);
        document.querySelector('.up').innerHTML = "<button >i</button>";
        up.firstChild.setAttribute('class','upbtn');
       
})

function eventNew(){
    clr =true;
    clear = setInterval(function setTime (){
        if(ms < 100){
            if (ms < 10){
            document.querySelector('.disp').value = "0"+ ms++;
            //console.log(ms)
            }
            else{
            document.querySelector('.disp').value = ms++;
            //console.log(ms)
            }
        }
        if (ms >= 100 && sec< 60){
            ms = 0;
            document.querySelector('.disp').value = "0"+ ms++;
            if (sec < 10){
                document.querySelector('.disp1').value = "0"+ sec++;
                //console.log(sec)
            }
            else{
                document.querySelector('.disp1').value = sec++;
                //console.log(sec)
            }
              
        }
        if (ms >= 100 && sec >= 60 && min < 60){
            ms = 0;
            sec =0;
            document.querySelector('.disp').value = "0"+ ms++;
            document.querySelector('.disp1').value = "0"+ sec++;
            if (min < 10){
                document.querySelector('.disp2').value = "0"+ min++;
                //console.log(min)
            }
            else{
                document.querySelector('.disp2').value = min++;
                //console.log(min)
            } 
        }
    },10);
}
window.addEventListener('keypress',(e)=>{
    console.log(e.key);
    if (e.key == "Enter"){
        if (clr == false){
            eventNew();
        }
        else {
            clr = false;
            clearInterval(clear);
        }
        
    }
    if (e.key == " "){
        window.location.reload(true);
    }
    
})
let button = document.querySelectorAll('.button');

Array.from(button).forEach((butt)=>{
    butt.addEventListener('click',(e)=>{
        console.log(e.target.value);
        if (e.target.value == "Start"){
            eventNew();
           
        }
        else if (e.target.value == "Stop"){
            clr =false;
            clearInterval(clear);
        }
        else {
            window.location.reload(true);
        }
    })
})