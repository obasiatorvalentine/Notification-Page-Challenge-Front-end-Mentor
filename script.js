
  let completed = document.querySelector('.completed');
  let bottomContainer = document.querySelector('.bottom-container');
  let confirmBtn = document.getElementById('confirm-btn');
  let userNumber = document.getElementById('number');
  let userCvc = document.getElementById('cvc');
  let userName = document.getElementById('name');
  let userExpiryMonth = document.getElementById('month');
  let userExpiryYear = document.getElementById('year');
  let cardExpiryDate = document.querySelector('.expiry-date');
  let cardNumber = document.querySelector('.card-number');
  let thankYou = document.querySelector('.finished-container');
  let allInputs = document.querySelectorAll('.input');
  let cardImages =document.querySelector('.card-images');
  
  confirmBtn.addEventListener('click', ()=>{
    for (let index = 0; index < allInputs.length; index++) {
      if (allInputs[index].value == '') {
        if (index < 4) {
          document.querySelectorAll('.warning')[index].innerText = "can't be blank";
          allInputs[index].style.borderColor = 'red';
          allInputs[index].style.borderStyle = 'groove';
        }
        else {
          document.querySelectorAll('.warning')[3].innerText = "can't be blank";
          allInputs[4].style.borderColor = 'red';
          allInputs[4].style.borderStyle = 'groove';
        }
      }
      if (allInputs[3].value == ''){
          document.querySelectorAll('.warning')[2].innerText = "can't be blank";
      }
      if (allInputs[index].value != '')
          {
        if (index < 4) {
          document.querySelectorAll('.warning')[index].innerText = "";
          allInputs[index].style.borderColor = 'black';
        }
      }
      
      else if (allInputs[4].value != '') {
        document.querySelectorAll('.warning')[3].innerText = "";
        allInputs[4].style.borderColor = 'black';
      }
    }
    if ((userName.value != '') && (userCvc.value != '') && (userExpiryMonth.value != '') && (userExpiryYear.value != '') && (userNumber.value != '')) {
        document.querySelector('.card-holder-name').innerText = userName.value;
        document.querySelector('.cvv-bar').innerText = userCvc.value;
        cardExpiryDate.innerHTML = `${userExpiryMonth.value}/${userExpiryYear.value}`;
        cardNumber.firstElementChild.innerText = userNumber.value;
        thankYou.style.display = 'flex';
        bottomContainer.style.display = 'none';
      }
  })
  
  function space(){
    if (userNumber.value.length == 4) {
      userNumber.value = userNumber.value + ' ';
    }
    else if (userNumber.value.length == 9){
      userNumber.value = userNumber.value + ' ';
    }
    else if (userNumber.value.length == 14){
      userNumber.value = userNumber.value + ' ';
    }
  }
  
  function happen (e, x){
    if (e.code.indexOf('Digit') <= -1) {
     x.value = x.value.slice(0, -1)
    }
    }
    