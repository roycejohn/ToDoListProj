document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input fields and buttons
    const taskNameInput = document.getElementById('taskNameInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const dateInput = document.getElementById('dateInput');
    const timeInput = document.getElementById('timeInput');
    const createBtn = document.getElementById('createBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    // Function to execute when the create button is clicked
    function createTask() {
        // Get the values from the input fields
        const taskName = taskNameInput.value;
        const description = descriptionInput.value;
        const date = dateInput.value;
        const time = timeInput.value;

        // Create a new task element
        const newTaskElement = document.createElement('div');
        newTaskElement.classList.add('row', 'py-4', 'rounded', 'border', 'border-dark');

        // Populate the task element with the task details
        newTaskElement.innerHTML = `
            <div class="col-md-1">${time}</div>
            <div class="col-md-7 text-center">${taskName}</div>
            <div class="col-md-1">
                <img src="assets/Check.svg" alt="check-icon">
            </div>
            <div class="col-md-1">
                <img src="assets/Edit.svg" alt="edit-icon">
            </div>
            <div class="col-md-1">
                <img src="assets/Delete.svg" alt="delete-icon">
            </div>
        `;

        // Append the new task element to the today's to-do list section
        const todaysToDoList = document.querySelector('.col-md-6 .bg-light:last-child');
        todaysToDoList.appendChild(newTaskElement);

        // Clear the input fields after creating the task
        clearInputFields();
    }

    // Function to execute when the cancel button is clicked
    function cancelTaskCreation() {
        // Clear the input fields
        clearInputFields();
    }

    // Function to clear the input fields
    function clearInputFields() {
        taskNameInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
    }

    // Add event listeners to the create and cancel buttons
    createBtn.addEventListener('click', createTask);
    cancelBtn.addEventListener('click', cancelTaskCreation);
});

// Function to execute when the create button is clicked
function createTask() {
    // Get the values from the input fields
    const taskName = taskNameInput.value;
    const description = descriptionInput.value;
    const date = dateInput.value;
    const time = timeInput.value;

    // Create a new task element
    const newTaskElement = document.createElement('div');
    newTaskElement.classList.add('row', 'py-4', 'rounded', 'border', 'border-dark');

    // Populate the task element with the task details
    newTaskElement.innerHTML = `
        <div class="col-md-1">${time}</div>
        <div class="col-md-7 text-center">${taskName}</div>
        <div class="col-md-1">
            <img src="assets/Check.svg" alt="check-icon">
        </div>
        <div class="col-md-1">
            <img src="assets/Edit.svg" alt="edit-icon">
        </div>
        <div class="col-md-1">
            <img src="assets/Delete.svg" alt="delete-icon">
        </div>
    `;

    // Append the new task element to the today's to-do list section
    const todaysToDoList = document.querySelector('.col-md-6 .bg-light:last-child .row');
    todaysToDoList.appendChild(newTaskElement);

    // Clear the input fields after creating the task
    clearInputFields();
}