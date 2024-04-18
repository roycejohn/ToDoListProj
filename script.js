console.log('WE ARE CONNECTED!')


let taskFinal = document.getElementById('formTask')

taskFinal.addEventListener("submit", (e) => {
    e.preventDefault();
 
    let taskName = document.getElementById("taskNameInput").value;
    let taskDesc = document.getElementById("descriptionInput").value;
    let date = document.getElementById('dateInput').value;
    let time = document.getElementById('timeInput').value;

  
    if (taskName === "" || taskDesc === "") {
        alert("Ensure you input a value in both fields!");
    } else {
        alert("This task has been successfully submitted!");
        
   
        let taskDetails = {
            name: taskName,
            description: taskDesc,
            date: date,
            time: time
        };

        
        saveTask(taskDetails);

        document.getElementById("taskNameInput").value = "";
        document.getElementById("descriptionInput").value = "";
        document.getElementById('dateInput').value = "";
        document.getElementById('timeInput').value = "";
    }    
});

window.onload = displayAllTasks;


function saveTask(taskDetails) {
  
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
   
    tasks.push(taskDetails);
    
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    displayTask(taskDetails);
}


function displayTask(taskDetails) {
    
    let finalTask = document.createElement('div');
    finalTask.classList.add('row', 'py-2');

    let timeCol = document.createElement('div');
    timeCol.classList.add('col-md-1');
    timeCol.textContent = taskDetails.time;
    finalTask.appendChild(timeCol);

    let taskCol = document.createElement('div');
    taskCol.classList.add('col-md-8', 'text-center');
    taskCol.textContent = `${taskDetails.name} - ${taskDetails.description}`;
    finalTask.appendChild(taskCol);

    let checkCol = document.createElement('div');
    checkCol.classList.add('col', 'text-end');
    let checkImg = document.createElement('img');
    checkImg.src = 'assets/Check.svg';
    checkImg.alt = 'check-icon';
    checkImg.height = '24';
    checkImg.width = '24';
    checkImg.onclick = function() { markAsDone(this); };
    checkCol.appendChild(checkImg);
    finalTask.appendChild(checkCol);

    let editCol = document.createElement('div');
    editCol.classList.add('col-md-1');
    let editImg = document.createElement('img');
    editImg.src = 'assets/Edit.svg';
    editImg.alt = 'edit-icon';
    editImg.height = '24';
    editImg.width = '24';
    editImg.onclick = function() { editTask(this); };
    editCol.appendChild(editImg);
    finalTask.appendChild(editCol);

    let deleteCol = document.createElement('div');
    deleteCol.classList.add('col-md-1');
    let deleteImg = document.createElement('img');
    deleteImg.src = 'assets/Delete.svg';
    deleteImg.alt = 'delete-icon';
    deleteImg.height = '24';
    deleteImg.width = '24';
    deleteImg.onclick = function() { deleteRow(this); };
    deleteCol.appendChild(deleteImg);
    finalTask.appendChild(deleteCol);

    
    let taskFilled = document.getElementById('taskFilled');
    taskFilled.appendChild(finalTask);
}


function displayAllTasks() {
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
   
    tasks.forEach(task => {
        displayTask(task);
    });
}

// status
function markAsDone(element) {
    let taskRow = element.closest('.row');
    let checkImg = taskRow.querySelector('img');

    if (checkImg.src.includes('Check.svg')) {
        checkImg.src = 'assets/Check2.svg';
    } else {
        checkImg.src = 'assets/Check.svg';
    }

  
    if (taskRow.style.textDecoration) {
        taskRow.style.textDecoration = '';
    } else {
        taskRow.style.textDecoration = 'line-through';
    }


    let currentState = {
        checked: checkImg.src.includes('Check2.svg'),
        textDecoration: taskRow.style.textDecoration
    };
    localStorage.setItem('currentState', JSON.stringify(currentState));
}





   

// edit task 
function editTask(element) {
   
    let taskRow = element.parentElement.parentElement;
    let taskCell = taskRow.querySelector('.col-md-8.text-center');
    let taskDetails = taskCell.textContent.split(' - ');
    let taskName = taskDetails[0].trim();
    let taskDescription = taskDetails[1].trim();
    let newTaskName = prompt('Enter the new task name:', taskName);
    let newTaskDescription = prompt('Enter the new task description:', taskDescription);
    if (newTaskName !== null && newTaskName.trim() !== '' && newTaskDescription !== null) {
        taskCell.textContent = `${newTaskName} - ${newTaskDescription}`;
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let index = tasks.findIndex(task => task.name === taskName && task.description === taskDescription);
        if (index !== -1) {
            tasks[index].name = newTaskName;
            tasks[index].description = newTaskDescription;
           
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
}


//delete row
function deleteRow(element) {

        let taskRow = element.parentElement.parentElement;
        let taskName = taskRow.querySelector('.col-md-8').textContent.split(' - ')[0].trim();
        let taskDesc = taskRow.querySelector('.col-md-8').textContent.split(' - ')[1].trim();
        let time = taskRow.querySelector('.col-md-1').textContent;
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
        tasks = tasks.filter(task => !(task.name === taskName && task.description === taskDesc && task.time === time));
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskRow.remove();
}
        

// script for index0.html
function saveName() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    
    if (name !== "") {
      localStorage.setItem("username", name);
      window.location.href = "index.html";
    }
}

// script for index.html

const username = localStorage.getItem("username");
if (username) {
  document.getElementById("username").textContent = username;
} else {
  window.location.href = "index0.html";
}


//script for date
const todayElement = document.getElementById('today');
const currentDateElement = document.getElementById('currentDate');

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-DE');

const options = { weekday: 'long' };
const formattedDay = currentDate.toLocaleDateString('en-DE', options);

todayElement.textContent = formattedDay;
currentDateElement.textContent = formattedDate;

