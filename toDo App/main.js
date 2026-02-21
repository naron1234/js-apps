const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

let tasks = [];

loadTasks();

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return; 

    tasks.push(taskText);

    taskInput.value = '';

    console.log(tasks);

    saveTasks();
    renderTasks();


    
});

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {

    const li = document.createElement('li');

    li.className = 'task-group-item d-flex justify-content-between align-items-center';

    li.innerHTML = `
        <span>${task}</span>
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    `;
   
    li.querySelector('button').addEventListener('click', () => {
    deleteTask(index);

 });

    taskList.appendChild(li);





 });

   taskCount.textContent = tasks.length;


 

}    
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    saveTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }

}
       