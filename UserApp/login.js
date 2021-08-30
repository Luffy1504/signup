const p = document.getElementsByTagName('p')
const passMsg = document.getElementsByClassName('pass-msg')
const dobMsg = document.getElementsByClassName('dob-msg')


document.querySelector('#for-email').addEventListener('input', e => {
 
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const inputEmailId = e.target.value;
   if(inputEmailId.match(mailformat)) 
    validMailDisplay();
   else
    InvalidMailDispaly();  
    
})

document.querySelector('#for-pass').addEventListener('input', e => {
      
     if(e.target.value.length<=8)
       invalidPasswordDisplay();
     else
       validPasswordDisplay();
     
})

document.querySelector('#for-dob').addEventListener('input' , e => {
   const splitdate = (e.target.value).split('-')
   const today = new Date()
   const currentYear = today.getFullYear()

   if(currentYear-splitdate[0] >= 15)
   validDate()
   else
   invalidDate()
})