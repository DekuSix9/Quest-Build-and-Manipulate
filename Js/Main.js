function donationCount() {
  const EntermoneyInput = document.getElementById('enter-money').value;
  const TotalMoney = document.getElementById('total-money').innerText;
  const DonatedMoney = document.getElementById('donated-money').innerText;

  if (EntermoneyInput > 0 && TotalMoney >= EntermoneyInput) {
    const newBalance = parseFloat(TotalMoney) - parseFloat(EntermoneyInput);
    const newDonated = parseFloat(DonatedMoney) + parseFloat(EntermoneyInput);

    document.getElementById('total-money').innerText = newBalance;
    document.getElementById('donated-money').innerText = newDonated;
    

    const text=document.createElement('h1');
    text.innerText=`${EntermoneyInput} Donate for Flood at Noakhali, Bangladesh.`;
    document.getElementById('history-section').appendChild(text);


    document.getElementById('conrats-card').classList.remove('hidden');
    
  } else {
    alert('You donot have enough money.');
  }
}

 function closeBtn(){
    document.getElementById('conrats-card').classList.add('hidden');
 }



function donationCount2() {
  const EntermoneyInput = document.getElementById('enter-money-2').value;
  const TotalMoney = document.getElementById('total-money').innerText;
  const DonatedMoney = document.getElementById('donated-money-2').innerText;

  if (EntermoneyInput > 0 && TotalMoney >= EntermoneyInput) {
    const newBalance = parseFloat(TotalMoney) - parseFloat(EntermoneyInput);
    const newDonated = parseFloat(DonatedMoney) + parseFloat(EntermoneyInput);

    document.getElementById('total-money').innerText = newBalance;
    document.getElementById('donated-money-2').innerText = newDonated;

    
    const text=document.createElement('h1');
    text.innerText=`${EntermoneyInput} Donate for Flood Relief in Feni,Bangladesh.`;
    document.getElementById('history-section').appendChild(text);

      document.getElementById('conrats-card1').classList.remove('hidden');

  } else {
    alert('You donot have enough.');
  }
}

 function closeBtn1(){
    document.getElementById('conrats-card1').classList.add('hidden');
 }



function donationCount3() {
  const EntermoneyInput = document.getElementById('enter-money-3').value;
  const TotalMoney = document.getElementById('total-money').innerText;
  const DonatedMoney = document.getElementById('donated-money-3').innerText;

  if (EntermoneyInput > 0 && TotalMoney >= EntermoneyInput) {
    const newBalance = parseFloat(TotalMoney) - parseFloat(EntermoneyInput);
    const newDonated = parseFloat(DonatedMoney) + parseFloat(EntermoneyInput);

    document.getElementById('total-money').innerText = newBalance;
    document.getElementById('donated-money-3').innerText = newDonated;

    
    const text=document.createElement('h1');
    text.innerText=`${EntermoneyInput} Aid for Injured in the Quota Movement.`;
    document.getElementById('history-section').appendChild(text);

     document.getElementById('conrats-card2').classList.remove('hidden');

  } else {
    alert('You donot have enough.');
  }
}

 function closeBtn2(){
    document.getElementById('conrats-card2').classList.add('hidden');
 }