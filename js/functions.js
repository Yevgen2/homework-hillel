'use strict';

const parent = document.getElementById('list');
const footer = document.getElementById('footer');
const secondLine = document.getElementById('secondLine');
const thirdLine = document.getElementById('thirdLine');
let mainForm = document.forms.mainForm;
    mainForm.hidden = true;
let mainFormSave = document.forms.mainFormSave;
let indexId;
let newTaskId = 4;
let mainFormAdd = document.forms.mainFormAdd

function firstPage() {
  parent.innerHTML="";

tasksList.forEach(function (item, i, tasksList) {
   let taskSell = document.createElement('div');
   taskSell.innerText = `${item.id}. Task: ${item.name}; Term: ${item.term}; Priority level: ${item.priority}; Status of execution: ${item.status}`;
   parent.append(taskSell);
   let index = i;
 buttonEdit (index, tasksList);
 buttonRemove (index, tasksList);

   let breakBr = document.createElement('div');
   breakBr.innerHTML="<br><br>";
   parent.append(breakBr);
   });
   mainFormCreate ();
   buttonAdd ();
}

function mainFormCreate (){
mainForm.innerHTML='';
 let breakBr = document.createElement('div');
 breakBr.innerHTML="<br>";
 let breakBr1 = document.createElement('div');
 breakBr1.innerHTML="<br>";
 let breakBr2 = document.createElement('div');
 breakBr2.innerHTML="<br>";
 let breakBr3 = document.createElement('div');
 breakBr3.innerHTML="<br>";

let nameCreate = document.createElement("INPUT");
  nameCreate.setAttribute("type", "text");
  nameCreate.setAttribute("name", "name");
  mainForm.append(nameCreate);
  mainForm.append(breakBr1);

let termCreate = document.createElement("INPUT");
  termCreate.setAttribute("type", "text");
  termCreate.setAttribute("name", "term");
  mainForm.append(termCreate);
  mainForm.append(breakBr);

      let priorityCreate = document.createElement("SELECT");
      priorityCreate.setAttribute("id", "priority");
      mainForm.append(priorityCreate);

      let low = document.createElement("option");
      low.setAttribute("value", "low");
      let lowText = document.createTextNode("Low");
      low.append(lowText);
      document.getElementById("priority").append(low);

      let minor = document.createElement("option");
      minor.setAttribute("value", "minor");
      let minorText = document.createTextNode("Minor");
      minor.append(minorText);
      document.getElementById("priority").append(minor);

      let major = document.createElement("option");
      major.setAttribute("value", "major");
      let majorText = document.createTextNode("Major");
      major.append(majorText);
      document.getElementById("priority").append(major);

      let high = document.createElement("option");
      high.setAttribute("value", "high");
      let highText = document.createTextNode("High");
      high.append(highText);
      document.getElementById("priority").append(high);

      mainForm.append(breakBr2);

      let statCreate = document.createElement("SELECT");
      statCreate.setAttribute("id", "stat");
      mainForm.append(statCreate);

      let open = document.createElement("option");
      open.setAttribute("value", "open");
      let openText = document.createTextNode("Open");
      open.append(openText);
      document.getElementById("stat").append(open);

      let inProgress = document.createElement("option");
      inProgress.setAttribute("value", "inProgress");
      let inProgressText = document.createTextNode("In Progress");
      inProgress.append(inProgressText);
      document.getElementById("stat").append(inProgress);

      let done = document.createElement("option");
      done.setAttribute("value", "done");
      let doneText = document.createTextNode("Done");
      done.append(doneText);
      document.getElementById("stat").append(done);

      mainForm.append(breakBr3);
  };

function buttonAdd (){
let buttonAdd = document.createElement('input');
  buttonAdd.setAttribute("type", "button");
  buttonAdd.setAttribute("id", "ButtonAdd");
  buttonAdd.setAttribute("value", "Add");
  parent.append(buttonAdd);
 buttonAdd.addEventListener('click', function(){
  footer.innerHTML="<br><br><br><br>";
  mainFormCreate ();
  mainForm.hidden = false;
    buttonSaveEdit ();
  });
};

function buttonEdit (index, tasksList){
let buttonEdit = document.createElement('input');
  buttonEdit.setAttribute("type", "button");
  buttonEdit.setAttribute("id", "ButtonEdit");
  buttonEdit.setAttribute("value", "Edit");
  parent.append(buttonEdit);
 buttonEdit.addEventListener('click', function(){
  footer.innerHTML="<br><br><br><br>";
  mainForm.hidden = false;
    let nameMainForm = document.forms.mainForm.name;
    let termMainForm = document.forms.mainForm.term;
  nameMainForm.setAttribute('value', tasksList[index].name);
  termMainForm.setAttribute('value', tasksList[index].term);
  buttonSaveEdit (index, tasksList, 1);
  });
};

function buttonSaveEdit (index, tasksList, typeFunctionSelector){
mainFormSave.innerHTML='';
indexId=index;
let buttonSave = document.createElement('input');
  buttonSave.setAttribute("type", "button");
  buttonSave.setAttribute("id", "buttonSave");
  buttonSave.setAttribute("value", "Save");
  mainFormSave.append(buttonSave);
  if (typeFunctionSelector === 1){
  buttonSave.addEventListener('click', saveTask);
  } else {
  buttonSave.addEventListener('click', addTask);
  }
 };

function addTask (){
 footer.innerHTML="<br><br><br><br>";
 let nameForm1 = mainForm.elements.name.value;
 let termMainForm1 = mainForm.elements.term.value;
 let priorityForm1 = priority.options[priority.selectedIndex];
 let statForm1 = stat.options[stat.selectedIndex];
   let priorityValue1 = priorityForm1.value;
   let statValue1 = statForm1.value;

 //const nameFormRedex = /^[A-Z][a-z]{1,}$/;            // проверка исключена для свободы пользования. Может быть подключена
 //const surnameFormRedex = /^[A-Z][a-z]{1,}$/;

 // if (!nameFormRedex.test(nameForm)||!surnameFormRedex.test(surnameForm)) {
 //  document.getElementById("bankCardError").style.display = 'block';
 //  return;
 //  } else {
 //  document.getElementById("bankCardError").style.display = 'none';
     let newTask = { id: newTaskId, name: nameForm1, term: termMainForm1, priority: priorityValue1, status: statValue1};
     ++newTaskId;
     tasksList.push(newTask);
     mainForm.hidden = true;
     mainFormSave.innerHTML='';
     mainFormCreate ();
     firstPage();
    // }
};

function saveTask (){
 footer.innerHTML="<br><br><br><br>";
  let editId = indexId;
  ++editId;
 let nameForm2 = mainForm.elements.name.value;
 let termMainForm2 = mainForm.elements.term.value;
 let priorityForm2 = priority.options[priority.selectedIndex];
 let statForm2 = stat.options[stat.selectedIndex];
   let priorityValue2 = priorityForm2.value;
   let statValue2 = statForm2.value;

 //const nameFormRedex = /^[A-Z][a-z]{1,}$/;       // проверка исключена для свободы пользования. Может быть подключена
 //const surnameFormRedex = /^[A-Z][a-z]{1,}$/;

 // if (!nameFormRedex.test(nameForm)||!surnameFormRedex.test(surnameForm)) {
 //   document.getElementById("bankCardError").style.display = 'block';
 //    return;
 //   } else {
 //    document.getElementById("bankCardError").style.display = 'none';
     let editedTask = { id: editId, name: nameForm2, term: termMainForm2, priority: priorityValue2, status: statValue2};
     tasksList.splice(indexId, 1, editedTask);
     mainForm.hidden = true;
     mainFormSave.innerHTML='';
     mainFormCreate ();
     firstPage();
         // }
};

function buttonRemove (index, tasksList){
let buttonRemove = document.createElement('input');
  buttonRemove.setAttribute("type", "button");
  buttonRemove.setAttribute("id", "ButtonRemove");
  buttonRemove.setAttribute("value", "Remove");
  parent.append(buttonRemove);
    buttonRemove.addEventListener('click', function(){
    footer.innerHTML="<br><br><br><br>";
    mainForm.hidden = true;
    footer.innerHTML="<br><br><br><br>";
    let confirmation = confirm('Delete task' + '  ' +tasksList[index].name +'?');
    if (confirmation) {
        tasksList.splice(index, 1);
        firstPage();

      } else {
        alert ('We will not delete' + '  ' +tasksList[index].name +'!');
      }
     });
};

function buttonSaveLocalStorage(){
 let buttonSaveLocalStorage = document.createElement('input');
   buttonSaveLocalStorage.setAttribute("type", "button");
   buttonSaveLocalStorage.setAttribute("id", "buttonSaveLocalStorage");
   buttonSaveLocalStorage.setAttribute("value", "Save to local storage");
   document.body.append(buttonSaveLocalStorage);
     buttonSaveLocalStorage.addEventListener('click', function(){
        localStorage.setItem('tasksList', JSON.stringify(tasksList))
     });
};

function buttonOpenLocalStorage(){
 let buttonOpenLocalStorage = document.createElement('input');
   buttonOpenLocalStorage.setAttribute("type", "button");
   buttonOpenLocalStorage.setAttribute("id", "buttonOpenLocalStorage");
   buttonOpenLocalStorage.setAttribute("value", "Load from local storage");
   document.body.append(buttonOpenLocalStorage);
     buttonOpenLocalStorage.addEventListener('click', function(){
        const tasksData = localStorage.getItem('tasksList');
        if (!tasksData) {
        return;
        }
        tasksList = JSON.parse(tasksData);
        console.log(tasksList);
          parent.innerHTML="";
          firstPage();
        });
     };