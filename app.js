// Splitting the bill function
const splitting = function() {
    let total = parseInt(document.querySelector('#total').value);
    let people = parseInt(document.querySelector('#people').value);
    let tipPercent = document.querySelector('#tipPercent')

if(tipPercent.value !== '') {
   let calcPercent = parseInt(tipPercent.value);
   const totalWithTip = total + (calcPercent * total) / 100;
   document.querySelector('#perPerson').innerHTML = (totalWithTip / people).toFixed(2);
    } 
    else {
       const noTip = total / people;
       document.querySelector('#perPerson').innerHTML = noTip.toFixed(2);
    }
}
// event listener for 'Add a tip'
let addTip = document.querySelector('#addTip');
addTip.addEventListener('click', addTips);
function addTips(e){
e.preventDefault();
showTipInput();
}

// function to bring out the input box after you press add tip
function showTipInput(){
    const tipValue = document.querySelector('#tipInput')
    if(tipValue.style.display === 'block'){
        tipValue.style.display = 'none'
    } else {
        tipValue.style.display = 'block';
    }
}

// event listener for split button and calling the splitting function inside the button
const splitBtn = document.querySelector('#splitBtn')
splitBtn.addEventListener('click', splitBill);
function splitBill(e){
    e.preventDefault();
    splitting();
}

//reset button deleting data off of forms and resetting the #perPerson value to 0
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', resetButton);
function resetButton(e) {
    e.preventDefault();
    document.querySelector('form').reset();
    document.querySelector('#perPerson').innerHTML = 0;
}
