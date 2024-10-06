const taskForm = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks')


function addTask() {
        const taskInput = document.getElementById('new-task-description');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;
    
    // for some reason you can't write listItem after const and also in the pink brackets 😂😂this this is confusing//
    const listItem = document.createElement('li')
    listItem.textContent = taskText;

    const removeButton = document.createElement('button')
    removeButton.textContent = '☠️☠️';//😂
    removeButton.onclick = function() {
        taskList.removeChild(listItem)
    };

    listItem.appendChild(removeButton)
    taskList.appendChild(listItem)

    taskInput.value = ''
}

taskForm.addEventListener('submit', function(event) {
  event.preventDefault()
  addTask()
})
//finally🥳🥳🎉🎉🪩