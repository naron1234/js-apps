const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

let tasks = [];

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return; 

    tasks.push(taskText);

    taskInput.value = '';

    console.log(tasks);
    
})
       