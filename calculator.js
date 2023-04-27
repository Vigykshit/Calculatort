let screen= document.getElementById('first');
buttons = document.querySelectorAll('button');
let screenValue = "";
 for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttontext= e.target.innerText;
        console.log('buttonText');
        if(buttonText== X){
            screenValue += "*";
            screen.value=screenValue;
        }
        
        else if (buttonText =='C'){
            screenValue += "";
            
        } 
        else if (buttonText =='='){
            screenValue += eval(screenValue); 
        }
        else{
            screenValue += buttontext;
            screen.value=screenValue;
        }
      })
    }
 