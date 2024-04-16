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
        // Increment the task ID counter
        taskIdCounter++;
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

        // Clears what the user wrote
        taskName.value = "";
        taskDesc.value = "";
        dateEntry.value = "";
        timeEntry.value = "";  
    }    
});