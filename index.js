

let str="";
 let buttons = document.querySelectorAll('.btn');
 Array.from(buttons).forEach((btn)=>{
     
     btn.addEventListener('click',(e)=>{
            //    console.log(e.target)
    
             if(e.target.innerHTML=='='){
                str=eval(str);
                document.querySelector('input').value=str;
             }
             else if(e.target.innerHTML=='C'){
                str="";
                document.querySelector('input').value=str;
             }
             
         else{
            str=str + e.target.innerHTML;
            document.querySelector('input').value=str;
            }
     })
 })