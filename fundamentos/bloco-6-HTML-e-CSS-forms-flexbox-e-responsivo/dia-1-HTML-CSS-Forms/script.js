// script.js
function createStateOptions() {
//Cria as <options> para a <select> onde os usuários escolhem o estado onde moram pela lista.
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = stateOptions[index];
    option.value = stateOptions[index];
    states.appendChild(option);
  }
}

let inputs = {
// estabelece os atributos maxLength e required para os inputs
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true
  },
  cpf: {
    maxLength: 11,
    required: true
  },
  address: {
    maxLength: 200,
    required: true
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  houseType: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  roleDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  }
}

function defaultValidation(input, name){
// verifica se os valores que os usuarios colocaram
//nos inputs respeitam os pre requisitos apresentados no objeto input
  let trimmed = input.value.trim();
  let validation = inputs[name];

  if(validation.required && trimmed.length === 0){
  // verifica se o input em questão tem a categoria required e caso tenha
  // e o usuario não tenha digitado nada a função retornará o valor falso.
    return false;
  }

  if(validation.maxLength && trimmed.length > validation.maxLength){
  // verifica se o tamanho do que o usuario digitou é maior que o requisito 
  // de tamanho máximo.
    return false;
  }
  
  return true;
}

function dateValidation(input, name){
// Verifica se a data foi preenxida corretamente
  if(input.value.length === 0){
    return {
      message: 'A data não foi preenchida!'
    }
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
  
  if(!regex.test(input.value)){
  //Se o valor do input for diferente do modelo regex a função retorna uma mensagem.
    return {
      message: 'Data: Formato inválido'
    };
  }

  let splitted = input.value.split('/');
  //divide a data escrita em dias, meses e ano, para logo abaixo verificar se 
  // os numeros representam uma data válida
  let day = splitted[0];
  let month = splitted[1];
  let year = splitted[2];

  if(day < 0 || day > 30){
    return {
      message: 'Dia inválido'
    };
  }

  if(month < 0 || month > 12){
    return {
      message: 'Mês inválido'
    }
  }

  if(year < 0) {
    return {
      message: 'Ano inválido'
    };
  }

  return true;
}

function getSelectedOption(select){
  return select.options[select.selectedIndex];
}

function selectValidation(select, name){
  // verifica se a option do selected escolhido pelo usuario é válida
  let option = getSelectedOption(select);
  let validation = inputs[name];

  if(validation.required && (!option || option.disabled)){
    return false;
  }

  return true;
}

function radioValidation(radio, name){
  //verifica se os usuarios preenxeram os tipos de imovel
  let checked = document.querySelector(`[name=${name}]:checked`)
  
  if(checked === null){
    return false;
  }

  return true;
}

let validationStrategies = {
  // objeto que tem todas as validações que o usuário precisa passar.
  default: defaultValidation,
  date: dateValidation,
  select: selectValidation,
  radio: radioValidation,
}

function validateInput(inputName){
  let inputType = inputs[inputName].type;
  let input = document.querySelector(`[name=${inputName}]`)

  if(inputType){
    let validationFunction = validationStrategies[inputType];
    return validationFunction(input, inputName);
  }

  return validationStrategies.default(input, inputName);
}
  
function renderErrorMessages(messages){
  let form = document.querySelector('#cv-form');
  let messageDiv = document.createElement('div');
  messageDiv.className = 'error';
  form.prepend(messageDiv);

  for(let message of messages){
    let p = document.createElement('p');
    p.innerText = message;

    messageDiv.appendChild(p);
  }
}

function defaultRendering(input){
  // cria paragrafos com o texto dos inputs.
  let p = document.createElement('p');
  p.innerText = input.value;

  return p;
}

function radioRendering(input){
  // renderiza as opções para tipos de casa
  let p = document.createElement('p');
  let name = input.getAttribute('name');
  let checked = document.querySelector(`[name=${name}]:checked`);

  if(checked){
    p.innerText = checked.value;
  }

  return p;
}

function selectRendering(input){
  //renderiza o select
  let p = document.createElement('p');
  let option = getSelectedOption(input)
  p.innerText = option.value;
  
  return p;
}

let renderStrategies = {
  // Objeto com as funções usadas para renderizar o conteudo dos inputs
  default: defaultRendering,
  radio: radioRendering,
  select: selectRendering,
}

function renderData(){
// Para manter as informações na página
  let dataDiv = document.createElement('div');
  dataDiv.className = 'data';

  let form = document.querySelector('#cv-form');
  form.prepend(dataDiv);

  for(let name in inputs){
    let inputType = inputs[name].type;
    let input = document.querySelector(`[name=${name}]`);

    let element;

    if(renderStrategies[inputType]){
      element = renderStrategies[inputType](input, dataDiv)
    } else {
      element = renderStrategies.default(input, dataDiv)
    }

    dataDiv.appendChild(element);
  }
}

function validateData(){
  //verifica se os valores do objeto input passam nos testes
  let validationsList = {};

  for(let inputName in inputs){
  //Percorre o objeto inputs, colocando cada um deles dentro do objeto validationLinst
    let isValid = validateInput(inputName);
    validationsList[inputName] = isValid;
  }
  
  let counter = 0;
  let messages = [];

  for(let index in validationsList){
    if(validationsList[index] === false){
      counter += 1;
    }

    if(validationsList[index].message){
      counter += 1;
      messages.push(validationsList[index].message);
    }
  }

  return {
    errorQtd: counter,
    messages,
  }
}

function clearDivs(){
  //limpa as divs com erros para que não ocorra a renderização das mesmas
  let errorDivs = document.querySelectorAll('.error');

  for(div of errorDivs){
    div.remove();
  }

  let dataDiv = document.querySelector('.data');

  if(dataDiv){
    dataDiv.remove();
  }
}

function handleSubmit(event) {
//Trata de retirar o defaut do botão submit.
  event.preventDefault();

  let validation = validateData();

  clearDivs();
  
  if(validation.errorQtd === 0){
    renderData();
  } else {
    validation.messages.unshift('Dados Inválidos')

    renderErrorMessages(validation.messages)
  }
}

function clearFields() {
//remove os valores de dis inputs e textArea
  let formElements = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea')
  let div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    let userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

window.onload = function () {
  createStateOptions();
  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', handleSubmit);

  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', clearFields)
}