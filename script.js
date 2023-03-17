const inputTask = document.getElementById('input-task');
const addTaskButton = document.getElementById('button-addon2');
const taskList = document.getElementById('task-list');


addTaskButton.addEventListener('click', function() {
 
  const taskText = inputTask.value;
if(taskText=="")
{
    alert("lütfen bir şeyler yazın ")
    return null
}

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Çıkar';
  removeButton.addEventListener('click', function() {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(removeButton).classList.add('btn');
  removeButton.classList.add('btn-outline-secondary')
  

  taskList.appendChild(taskItem).classList.add('list-group-item');
  inputTask.value = '';
});


