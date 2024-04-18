console.log('WE ARE CONNECTED!')


/* HERE IS WHAT GETS CREATED EVERY TIME THE TASKS IS ADDED IN REGARDS OF ICONS AND FOR PURPOUSE OF REWRITING THE CODE

                        <div class="row pt-3">
                            <div id="icon1 check" class="col-4 btn taskGroup${taskIdCounter}">
                                <img src="assets/Check.svg" alt="check-icon">
                            </div>
                            <div id="icon1 edit" class="col-4 btn taskGroup${taskIdCounter}">
                                <img src="assets/Edit.svg" alt="edit-icon">
                            </div>
                            <div id="icon1 delete" class="col-4 btn taskGroup${taskIdCounter}">
                                <img src="assets/Delete.svg" alt="delete-icon">
                            </div>
                        </div>

*/

function populateTasksFromStorage() {
    console.log("populateTasksFromStorage function is being executed.")
    // Get tasks from local storage
    let storedTasks = JSON.parse(localStorage.getItem('completeTaskList')) || [];
    console.log(storedTasks)
    // Iterate through stored tasks and create task elements
    storedTasks.forEach(task => {
        console.log('I am trying to add stuff')
        // Create task name and description elements
        let taskNameDesc = document.createElement('div');
        taskNameDesc.textContent = `${task.task} - ${task.desc}`;
        // Append task name and description to the appropriate container in your HTML
        document.getElementById('taskFilled').appendChild(taskNameDesc);

        // Create task date and time elements
        let taskDateTime = document.createElement('div');
        taskDateTime.textContent = `${task.date} - ${task.time}`;
        // Append task date and time to the appropriate container in your HTML
        document.getElementById('timeFilled').appendChild(taskDateTime);

        // Create task icons (check, edit, delete)
        // Create the check icon div
        let checkIconDiv = document.createElement('div');
        checkIconDiv.classList.add('col-4', 'btn');
        checkIconDiv.id = task.iconId + ' check'; // Use the iconId
        let checkIconImg = document.createElement('img');
        checkIconImg.src = task.checkIcon.src;
        checkIconImg.alt = task.checkIcon.alt;
        checkIconImg.width = task.checkIcon.width;
        checkIconImg.height = task.checkIcon.height;
        checkIconDiv.appendChild(checkIconImg);
        // Append check icon to the appropriate container in your HTML
        document.getElementById('taskIcons').appendChild(checkIconDiv);

        // Create the edit icon div
        let editIconDiv = document.createElement('div');
        editIconDiv.classList.add('col-4', 'btn');
        editIconDiv.id = task.iconId + ' edit'; // Use the iconId
        let editIconImg = document.createElement('img');
        editIconImg.src = task.editIcon.src;
        editIconImg.alt = task.editIcon.alt;
        editIconImg.width = task.editIcon.width;
        editIconImg.height = task.editIcon.height;
        editIconDiv.appendChild(editIconImg);
        // Append edit icon to the appropriate container in your HTML
        document.getElementById('taskIcons').appendChild(editIconDiv);

        // Create the delete icon div
        let deleteIconDiv = document.createElement('div');
        deleteIconDiv.classList.add('col-4', 'btn');
        deleteIconDiv.id = task.iconId + ' delete'; // Use the iconId
        let deleteIconImg = document.createElement('img');
        deleteIconImg.src = task.deleteIcon.src;
        deleteIconImg.alt = task.deleteIcon.alt;
        deleteIconImg.width = task.deleteIcon.width;
        deleteIconImg.height = task.deleteIcon.height;
        deleteIconDiv.appendChild(deleteIconImg);
        // Append delete icon to the appropriate container in your HTML
        document.getElementById('taskIcons').appendChild(deleteIconDiv);
    });
}

window.addEventListener('load', populateTasksFromStorage);



const completeTaskList = []

// Initialize a counter for generating unique IDs
let taskIdCounter = 1;

// Identify the complete form container
let taskFinal = document.getElementById('formTask');

// Add an event listener for the submit button
taskFinal.addEventListener("submit", (e) => {
    e.preventDefault();

    // Take the element for Task name, Task description, Date Entry and Time Entry   
    let taskName = document.getElementById("taskNameInput");
    let taskDesc = document.getElementById("descriptionInput");
    let dateEntry = document.getElementById("dateInput");
    let timeEntry = document.getElementById("timeInput");

    // IF ELSE for checking if the user didn't type the Name and Description of the task    
    if (taskName.value == "" || taskDesc.value == "") {
        alert("Ensure you input a value in both fields!");
    } else {
        alert("This task has been successfully submitted!");
        console.log(`This form has a Task Name of ${taskName.value} and Task Description of ${taskDesc.value}. It was also set with the date ${dateEntry.value} of and time of ${timeEntry.value}`);

    // Creates a variable for the Task created div        
    let divTask = document.getElementById('taskFilled');
    // Creates a paragraph to add to the Task div
    let finalTask = document.createElement('div');
    // Generate a unique ID for the task div
    finalTask.id = `task${taskIdCounter}`;
    // Creates the content for the paragraph based on what the user has written
    finalTask.textContent = `${taskName.value} - ${taskDesc.value}`;
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
    finalTime.textContent = `${dateEntry.value} - ${timeEntry.value}`;
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
    deleteIconDiv.classList.add(`taskGroup${taskIdCounter}`)

    const toDo = {
        id: taskIdCounter,
        task: taskName.value,
        desc: taskDesc.value,
        date: dateEntry.value,
        time: timeEntry.value,
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

        localStorage.setItem('completeTaskList', JSON.stringify(completeTaskList))



    

// ICONS FUNCTIONALITY

// DELETE

        deleteIconDiv.addEventListener('click', function() {
                // Extract the task ID from the deleteIconDiv ID
                let deleteIconDivId = this.id;
                let taskId = deleteIconDivId.match(/\d+/)[0];
                
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
                let checkIconDiv = this.id;
                let taskId = checkIconDiv.match(/\d+/)[0];
                
                // Select all elements with the taskGroup class containing the taskId
                let elementsToStrikeThrough = document.querySelectorAll(`.taskGroup${taskId}`);
                
                // Strike through all text inside the selected elements
                elementsToStrikeThrough.forEach(element => {
                element.style.textDecoration = "line-through";
                });
        });

// EDIT

        editIconDiv.addEventListener('click', function() {
                // Extract the task ID from the editIconDiv ID
                let editIconDiv = this.id;
                let taskId = editIconDiv.match(/\d+/)[0];
                
                // Select all elements with the taskGroup class containing the taskId
                let elementsToModify = document.querySelectorAll(`.taskGroup${taskId}`);
                
                // Make the content of the selected elements editable
                elementsToModify.forEach(element => {
                    element.contentEditable = true;
                });
        });



        // Increment the task ID counter
        taskIdCounter++;

        // Clears what the user wrote
        taskName.value = "";
        taskDesc.value = "";
        dateEntry.value = "";
        timeEntry.value = "";  
    }



});
















