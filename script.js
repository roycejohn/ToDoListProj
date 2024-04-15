let taskName = document.getElementById('taskNameInput')
let taskDesc = document.getElementById('descriptionInput')

let taskFinal = [taskName, taskDesc]


formTask.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // handle submit
  });


taskFinal.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let taskName = document.getElementById("taskNameInput");
    let taskDesc = document.getElementById("descriptionInput");
  
    if (taskName.value == "" || taskDesc.value == "") {
        alert("Ensure you input a value in both fields!")
    } else {
        alert("This task has been successfully submitted!")
        console.log(`This form has a Task Name of ${taskName.value} and password of ${taskDesc.value}`)

        taskName.value = "";
        taskDesc.value = "";
    }
});