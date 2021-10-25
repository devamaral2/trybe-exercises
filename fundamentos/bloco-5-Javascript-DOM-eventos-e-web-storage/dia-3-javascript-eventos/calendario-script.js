
  function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  function createDay () {   
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];    
   for (let i = 0; i < dezDaysList.length; i += 1) {
      let dias = dezDaysList[i]; 
      let diasNoCalendario = document.createElement ('li');
      diasNoCalendario.innerText = dias;
      document.querySelector('#days').appendChild(diasNoCalendario);
      diasNoCalendario.classList.add('day');
      if (dias === 24 | dias === 31 | dias === 25) {
        diasNoCalendario.classList.add('holiday');
      } if (dias === 4 | dias === 11 | dias === 18 | dias === 25) {
        diasNoCalendario.classList.add('friday');
      } 
    }
  }

  function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    newButton.innerHTML = buttonName;
    newButton.id = 'btn-holiday';
    buttonContainer.appendChild(newButton);
  };

  
    
  function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'red';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };

  function createFriday(buttonName) {
    let btnFridayCreate = document.createElement('button');
    btnFridayCreate.innerText = buttonName;
    btnFridayCreate.id = 'btn-friday';
    document.querySelector('.buttons-container').appendChild(btnFridayCreate);  
 }

 function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

function dayMouseOver() {
  const $dias = document.querySelectorAll('.day');
  // Aprendi some fro each aqui: https://www.youtube.com/watch?v=esXH65f7_n8
  $dias.forEach(
    $li => $li.addEventListener("mouseover", function (event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '800';
    }) 
  )
};
  //Solução da Trybe:
  //let days = document.querySelector('#days');
  //days.addEventListener('mouseover', function(event) {
  //  event.target.style.fontSize = '30px';
  //  event.target.style.fontWeight = '800';
  //})


function dayMouseOut() {
  const $dias = document.querySelectorAll('.day')
  $dias.forEach(
    $li => $li.addEventListener("mouseout", function (event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    }) 
  )
};

 //Solução da Trybe:
 // days.addEventListener('mouseout', function(event) {
 //   event.target.style.fontWeight = '200';
 //   event.target.style.fontSize = '20px';
 // })
//};
function createTassk (texto) {
  const tasks = document.createElement ('span');
  const container = document.querySelector('.my-tasks');
  container.appendChild (tasks);
  tasks.innerHTML = texto;
}

function createColor (cor) {
  const legenda = document.createElement ('div');
  const container = document.querySelector('.my-tasks');
  legenda.className = 'task';
  container.appendChild (legenda);
  legenda.style.backgroundColor = cor;

}
//function createTaskSelector () {
 // const seletor = document.querySelector('.task')
  //seletor.addEventListener ('click', function (event) {
 //   event.target.className = 'task selected'
 // })

//}

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
 });
};

//function setTaskClass() {
//  let myTasks = document.querySelector('.task');
//  let red = 'red';
//  let background = 'white';

//  myTasks.addEventListener('click', function(event) {
//    if (myTasks.style.backgroundColor !== red) {
//      event.target.style.backgroundColor = red;
//      } else  {event.target.style.backgroundColor = background;
//    }
//  });
//};


//  let corDaLegenda = document.querySelector('.task').style.backgroundColor;
//  const $dia = document.querySelectorAll('.dia')
//  $dia.forEach(
//    $li => $li.addEventListener ('click', function (event) {
//      if (event.target.style.backgroundColor !== 'red') {
//        event.target.style.backgroundColor = 'red'
//      } else {
//        event.target.style.backgroundColor = 'rgb(238,238,238)';
//      }
//    })
//  )
//}
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};



let diasDeSexta = [4, 11, 18, 25]
createDay();
createDaysOfTheWeek();
createHolidayButton('Feriados')
displayHolidays();
createFriday('Sexta-feira');
displayFridays(diasDeSexta);
dayMouseOver();
dayMouseOut();
createTassk ('Cozinhar');
createColor ('red');
//createTaskSelector();
setTaskClass();
setDayColor();
addNewTask();


//document.querySelectorAll('.holiday')[0].addEventListener ('click', colorChange)
//document.querySelectorAll('.holiday')[1].addEventListener ('click', colorChange)
//document.querySelectorAll('.holiday')[2].addEventListener ('click', colorChange)
//document.querySelectorAll('.holiday')[3].addEventListener ('click', colorChange)
  
  //applyHolidayAndFriday() 
 

  // Escreva seu código abaixo.