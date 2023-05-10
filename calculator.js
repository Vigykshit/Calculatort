function opt(same){

    let a = document.getElementById('first')
 
     if(same == "AC"){
        a.value =""
     }
     else if (same == "DEL"){
        a.value = ""
     }
     else if (same == "="){
         let out = eval(a.value)
         a.value = `${out}`
     }
     else {
         a.value += `${same}`
     }
 }
  