const inputs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');
const output = document.querySelector('span');

function add(num1, num2){
  num1 = Number(inputs[0].value);
  num2 = Number(inputs[1].value);
  let result = num1 + num2;
  output.innerText = result;
}

function clearContents(){
  inputs[0].value = '';
  inputs[1].value = '';
  output.innerText = '';
}

buttons[0].addEventListener('click', add);
buttons[2].addEventListener('click', clearContents);