console.log('WE ARE CONNECTED!')

// This array will store all the tasks and will be reused later when we reload the page
const completeTaskList = []

function createTheTask(taskNameValue, taskDescValue, dateValue, timeValue) {
    // Creates a variable for the Task created div        
    let divTask = document.getElementById('taskFilled');
    // Creates a paragraph to add to the Task div
    let finalTask = document.createElement('div');
    // Generate a unique ID for the task div
    finalTask.id = `task${taskIdCounter}`;
    // Creates the content for the paragraph based on what the user has written
    finalTask.textContent = `${taskNameValue} - ${taskDescValue}`;
    // Add Bootstrap padding top class
    finalTask.classList.add('pt-3'); // Adjust the padding value as needed
    // Appends the created content   
    divTask.appendChild(finalTask);

    // Creates a variable for the Time created div    
    let divTime = document.getElementById('timeFilled');
    // Creates a paragraph to add to the Time div
    let finalTime = document.createElement('div');
    // Generate a unique ID for the time div
    finalTime.id = `time${taskIdCounter}`;
    // Creates the content for the paragraph based on what the user has written
    finalTime.textContent = `${dateValue} - ${timeValue}`;
    // Add Bootstrap padding top class
    finalTime.classList.add('pt-3'); // Adjust the padding value as needed
    // Appends the created content   
    divTime.appendChild(finalTime);

    // Get the taskIcons div
    let taskIconsDiv = document.getElementById('taskIcons');

    // Create a container for the row of icons
    let iconsRowContainer = document.createElement('div');
    iconsRowContainer.classList.add('row', 'pt-1');

    // Create the check icon div
    let checkIconDiv = document.createElement('div');
    checkIconDiv.classList.add('col-4', 'btn');
    checkIconDiv.id = `icon${taskIdCounter} check`;
    let checkIconImg = document.createElement('img');
    checkIconImg.src = "assets/Check.svg";
    checkIconImg.alt = "check-icon";
    checkIconImg.width = '24'
    checkIconImg.height = '24'
    checkIconDiv.appendChild(checkIconImg);

    // Create the edit icon div
    let editIconDiv = document.createElement('div');
    editIconDiv.classList.add('col-4', 'btn');
    editIconDiv.id = `icon${taskIdCounter} edit`;
    let editIconImg = document.createElement('img');
    editIconImg.src = "assets/Edit.svg";
    editIconImg.alt = "edit-icon";
    editIconImg.width = '24'
    editIconImg.height = '24'
    editIconDiv.appendChild(editIconImg);

    // Create the delete icon div
    let deleteIconDiv = document.createElement('div');
    deleteIconDiv.classList.add('col-4', 'btn');
    deleteIconDiv.id = `icon${taskIdCounter} delete`;
    let deleteIconImg = document.createElement('img');
    deleteIconImg.src = "assets/Delete.svg";
    deleteIconImg.alt = "delete-icon";
    deleteIconImg.width = '24'
    deleteIconImg.height = '24'
    deleteIconDiv.appendChild(deleteIconImg);

    // Append icon divs to the row container
    iconsRowContainer.appendChild(checkIconDiv);
    iconsRowContainer.appendChild(editIconDiv);
    iconsRowContainer.appendChild(deleteIconDiv);

    // Append the row container to the taskIcons div
    taskIconsDiv.appendChild(iconsRowContainer);

    finalTask.classList.add(`taskGroup${taskIdCounter}`);
    finalTime.classList.add(`taskGroup${taskIdCounter}`);
    checkIconDiv.classList.add(`taskGroup${taskIdCounter}`);
    editIconDiv.classList.add(`taskGroup${taskIdCounter}`);
    deleteIconDiv.classList.add(`taskGroup${taskIdCounter}`);

    const toDo = {
        id: taskIdCounter,
        task: taskNameValue,
        desc: taskDescValue,
        date: dateValue,
        time: timeValue,
        checkIcon: {
            src: "assets/Check.svg",
            alt:"check-icon",
            width: '24',
            height: '24',
        },
        editIcon: {
            src: "assets/Edit.svg",
            alt:"check-icon",
            width: '24',
            height: '24',
        },
        deleteIcon: {
            src: "assets/Delete.svg",
            alt:"check-icon",
            width: '24',
            height: '24',
        }
    }

    completeTaskList.push(toDo)

    localStorage.setItem('completeTaskList', JSON.stringify(completeTaskList));

    // ICONS FUNCTIONALITY

    // DELETE
    deleteIconDiv.addEventListener('click', function() {
        // Extract the task ID from the deleteIconDiv ID
        let deleteIconDivId = this.id;
        let taskId = deleteIconDivId.match(/\d+/)[0];
        
        // Remove the task from the completeTaskList array
        completeTaskList.splice(taskId - 1, 1);

        // Update local storage
        localStorage.setItem('completeTaskList', JSON.stringify(completeTaskList));
        
        // Select all elements with the taskGroup class containing the taskId
        let elementsToRemove = document.querySelectorAll(`.taskGroup${taskId}`);

        // Remove all selected elements
        elementsToRemove.forEach(element => {
            element.remove();
        });
    });

    // CHECK
    checkIconDiv.addEventListener('click', function() {
    // Extract the task ID from the checkIconDiv ID
    let checkIconDivId = this.id;
    let taskId = parseInt(checkIconDivId.match(/\d+/)[0]);

    // Update the task status in the completeTaskList array
    completeTaskList[taskId - 1].checked = true;

    // Update local storage
    localStorage.setItem('completeTaskList', JSON.stringify(completeTaskList));

    // Update the task element in the DOM to visually indicate that it's checked
    let elementsToCheck = document.querySelectorAll(`.taskGroup${taskId}`);
    elementsToCheck.forEach(element => {
        element.style.textDecoration = "line-through";
    });
});

    // EDIT
    editIconDiv.addEventListener('click', function() {
        // Extract the task ID from the editIconDiv ID
        let editIconDivId = this.id;
        let taskId = editIconDivId.match(/\d+/)[0];

        // Update the task content in the completeTaskList array
        let newTaskNameValue = prompt("Enter the new task name:");
        let newTaskDescValue = prompt("Enter the new task description:");

        completeTaskList[taskId - 1].task = newTaskNameValue;
        completeTaskList[taskId - 1].desc = newTaskDescValue;

        // Update local storage
        localStorage.setItem('completeTaskList', JSON.stringify(completeTaskList));

        // Select all elements with the taskGroup class containing the taskId
        let elementsToModify = document.querySelectorAll(`.taskGroup${taskId}`);

        // Make the content of the selected elements editable
        elementsToModify.forEach(element => {
            element.contentEditable = true;
        });

    });

    // Increment the task ID counter
    taskIdCounter++;
}

// Initialize a counter for generating unique IDs
let taskIdCounter = 1;

// Identify the complete form container
let taskFinal = document.getElementById('formTask');

// Add an event listener for the submit button
taskFinal.addEventListener("submit", (e) => {
    e.preventDefault();

    // Take the element for Task name, Task description, Date Entry and Time Entry   
    let taskName = document.getElementById("taskNameInput").value;
    let taskDesc = document.getElementById("descriptionInput").value;
    let dateEntry = document.getElementById("dateInput").value;
    let timeEntry = document.getElementById("timeInput").value;

    // IF ELSE for checking if the user didn't type the Name and Description of the task    
    if (taskName == "" || taskDesc == "") {
        alert("Ensure you input a value in both fields!");
    } else {
        alert("This task has been successfully submitted!");
        console.log(`This form has a Task Name of ${taskName} and Task Description of ${taskDesc}. It was also set with the date ${dateEntry} of and time of ${timeEntry}`);

        createTheTask(taskName, taskDesc, dateEntry, timeEntry);

        // Clears what the user wrote
        document.getElementById("taskNameInput").value = "";
        document.getElementById("descriptionInput").value = "";
        document.getElementById("dateInput").value = "";
        document.getElementById("timeInput").value = "";
    }
});

// This function will repopulate the tasklist starting from what we stored in the completasklist and iterating through it via for loop
function populateTasksFromStorage() {
    // Get tasks from local storage
    let storedTasks = JSON.parse(localStorage.getItem('completeTaskList')) || [];
    // Iterate through stored tasks and create task elements
    storedTasks.forEach(task => {
        createTheTask(task.task, task.desc, task.date, task.time);
    });
}

// This will launch the repopulate function when the page is reloaded
document.addEventListener('DOMContentLoaded', function() {
    populateTasksFromStorage();
});
















