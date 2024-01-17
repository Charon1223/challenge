

const printNumber = document.querySelector(".print-number");
let isNewNumber = true;

function addValue(number){
  
  if(isNewNumber){
    printNumber.value = number;
    isNewNumber = false;
  } else {
    printNumber.value += number;
  }
};
function clearNumber(){
  printNumber.value = '';
  isNewNumber = true;
}
function result(){
  printNumber.value = eval(printNumber.value);
  isNewNumber = true;
}
