


function caesarCipherEncrypt(x) {
    let encryptedText = '';
    let text=""
    let shift=0
    let result = document.getElementById("result");
    if(x==1){
        text=document.getElementById('encrypt').value
        shift=document.getElementById('secretkey').value
       
    }
    else{
        text=document.getElementById('Decrypt').value
        shift=26-document.getElementById('secretKey').value;
        // alert("dee")
    }
    
   //B=66 shift=2 encr=68=>D 26-2=24 (68+24)%26

    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      if (char.match(/[a-zA-Z]/)) {
        let charCode = text.charCodeAt(i);
   
        let isUpperCase = char === char.toUpperCase();
        
        if(x==1){
            if(isUpperCase)
            {
                charCode=((65 + shift) %26)+(charCode)
                if(charCode>90 ){
                    charCode-=26
                    }
            }else{
                charCode= (charCode+parseInt(shift))
                // console.log(charCode);
                if(charCode>122){
                    charCode-=26
                }
            }



        }else{
            charCode = ((charCode - (isUpperCase ? 65 : 97) + shift) % 26) + (isUpperCase ? 65 : 97);

        }
        // ((68-((65+2)))%26)+65
       
        encryptedText += String.fromCharCode(charCode);
        // console.log(charCode)
      } else {
        encryptedText += char;
      }
    }
  if(x==1){
    document.getElementById('encrypted').value=encryptedText
  }else{
    result.innerHTML=encryptedText
  }
    return encryptedText;
  }
  
 
  
  
  
