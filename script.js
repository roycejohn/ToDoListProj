console.log('WE ARE CONNECTED!')

// Identify the complete form container
let taskFinal = document.getElementById('formTask')

// Add an event listener for the submit button

taskFinal.addEventListener("submit", (e) => {
    e.preventDefault();

    
 // Take the element for Task name and Task description   
    let taskName = document.getElementById("taskNameInput");
    let taskDesc = document.getElementById("descriptionInput");

// IF ELSE for checking if the user didn't type the Name and Description of the task    
    if (taskName.value == "" || taskDesc.value == "") {
        alert("Ensure you input a value in both fields!")
    } else {
        alert("This task has been successfully submitted!")
        console.log(`This form has a Task Name of ${taskName.value} and Task Description of ${taskDesc.value}`)
 
        
// Creates a variable for the Task created div        
        let divTask = document.getElementById('taskFilled')
// Creates a paragraph to add to the Task div
        let finalTask = document.createElement('p')
// Creates the content for the paragraph based on what the user has written
        finalTask.textContent = `${taskName.value} - ${taskDesc.value}`
// Appends the created content   
        divTask.appendChild(finalTask)
// Clears what the user wrote
        taskName.value = "";
        taskDesc.value = "";  
    }
    
});

