console.log('WE ARE CONNECTED!')

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
        console.log(`This form has a Task Name of ${taskName.value} and Task Description of ${taskDesc.value}`);

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
        finalTime.id = `task${taskIdCounter}`;
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
        iconsRowContainer.classList.add('row', 'pt-3');

        // Create the check icon div
        let checkIconDiv = document.createElement('div');
        checkIconDiv.classList.add('col-4');
        checkIconDiv.id = `task${taskIdCounter}`;
        let checkIconImg = document.createElement('img');
        checkIconImg.src = "assets/Check.svg";
        checkIconImg.alt = "check-icon";
        checkIconDiv.appendChild(checkIconImg);

        // Create the edit icon div
        let editIconDiv = document.createElement('div');
        editIconDiv.classList.add('col-4');
        editIconDiv.id = `task${taskIdCounter}`;
        let editIconImg = document.createElement('img');
        editIconImg.src = "assets/Edit.svg";
        editIconImg.alt = "edit-icon";
        editIconDiv.appendChild(editIconImg);

        // Create the delete icon div
        let deleteIconDiv = document.createElement('div');
        deleteIconDiv.classList.add('col-4');
        deleteIconDiv.id = `task${taskIdCounter}`;
        let deleteIconImg = document.createElement('img');
        deleteIconImg.src = "assets/Delete.svg";
        deleteIconImg.alt = "delete-icon";
        deleteIconDiv.appendChild(deleteIconImg);

        // Append icon divs to the row container
        iconsRowContainer.appendChild(checkIconDiv);
        iconsRowContainer.appendChild(editIconDiv);
        iconsRowContainer.appendChild(deleteIconDiv);

        // Append the row container to the taskIcons div
        taskIconsDiv.appendChild(iconsRowContainer);
        
        // Increment the task ID counter
        taskIdCounter++;

        // Clears what the user wrote
        taskName.value = "";
        taskDesc.value = "";
        dateEntry.value = "";
        timeEntry.value = "";  
    }    
});



// ICONS FUNCTIONALITY

