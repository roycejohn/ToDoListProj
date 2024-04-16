console.log('WE ARE CONNECTED!')

// Identify the complete form container
let taskFinal = document.getElementById('formTask')

// Add an event listener for the submit button

taskFinal.addEventListener("submit", (e) => {
    e.preventDefault();

    
 // Take the element for Task name and Task description   
    let taskName = document.getElementById("taskNameInput");
    let taskDesc = document.getElementById("descriptionInput");
    //added
    let date = document.getElementById('dateInput');
    let time = document.getElementById('timeInput');
    

// IF ELSE for checking if the user didn't type the Name and Description of the task    
    if (taskName.value == "" || taskDesc.value == "") {
        alert("Ensure you input a value in both fields!")
    } else {
        alert("This task has been successfully submitted!")
        console.log(`This form has a Task Name of ${taskName.value} and Task Description of ${taskDesc.value}`)
 
        
// Creates a variable for the Task created div        
        let divTask = document.getElementById('taskFilled');
// Creates a paragraph to add to the Task div
        let finalTask = document.createElement('div');
        //add, change p to div, to include the icons
         finalTask.classList.add('row', 'py-2');

        let timeCol = document.createElement('div');
        timeCol.classList.add('col-md-1');
        timeCol.textContent = time.value;
        finalTask.appendChild(timeCol);

        let taskCol = document.createElement('div');
        taskCol.classList.add('col-md-8', 'text-center');
        taskCol.textContent = `${taskName.value} - ${taskDesc.value}`;
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

        let editCol = document.createElement('div');
        editCol.classList.add('col-md-1');
        let editImg = document.createElement('img');
        editImg.src = 'assets/Edit.svg';
        editImg.alt = 'edit-icon';
        editImg.height = '24';
        editImg.width = '24';
        editImg.onclick = function() { editTask(this); };
        editCol.appendChild(editImg);

        let deleteCol = document.createElement('div');
        deleteCol.classList.add('col-md-1');
        let deleteImg = document.createElement('img');
        deleteImg.src = 'assets/Delete.svg';
        deleteImg.alt = 'delete-icon';
        deleteImg.height = '24';
        deleteImg.width = '24';
        deleteImg.onclick = function() { deleteRow(this); };
        deleteCol.appendChild(deleteImg);

        // Append elements to task row
        finalTask.appendChild(timeCol);
        finalTask.appendChild(taskCol);
        finalTask.appendChild(checkCol);
        finalTask.appendChild(editCol);
        finalTask.appendChild(deleteCol);

        // Append task row to taskFilled div
        let taskFilled = document.getElementById('taskFilled');
        taskFilled.appendChild(finalTask);


     

// Creates the content for the paragraph based on what the user has written
//added time
        // finalTask.textContent = `${time.value}   ${taskName.value} - ${taskDesc.value}`

// Appends the created content   
        divTask.appendChild(finalTask)


// Clears what the user wrote
        taskName.value = "";
        taskDesc.value = "";
        // added
        date.value = ""
        time.value = ""  
    }
    
});


function markAsDone(element) {
        let taskRow = element.parentElement.parentElement;
        if (taskRow.style.backgroundColor === '') {
            taskRow.style.backgroundColor = 'green'; 
        } else {
            taskRow.style.backgroundColor = '';
        }
    }
    
    
    function editTask(element) {
        let taskRow = element.parentElement.parentElement;
        let taskCell = taskRow.querySelector('.col-md-8.text-center');
        let newTaskName = prompt('Enter the new task name:', taskCell.textContent);
        if (newTaskName !== null && newTaskName.trim() !== '') {
            taskCell.textContent = newTaskName;
        }
    }
    
    
    function deleteRow(element) {
        let taskRow = element.parentElement.parentElement;
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

