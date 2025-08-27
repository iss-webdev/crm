const input = document.querySelector('.text');
const btn = document.querySelector('.btn');
const taskInput = document.querySelector('.task-list');
const editBtn = document.querySelector('.edit-btn');
const status = document.getElementById('status');

getTasks();

btn.addEventListener('click', (e) => {
    e.preventDefault();


    const task = input.value;
    console.log(task);

    const li = document.createElement('li');
    li.classList.add('tasks');
    li.innerHTML = `${task} <span id="status" class="status-pending">Pending</span>
      <span><i class=" tick-btn fa-solid fa-check"></i></span><span><i class="edit-btn fa-solid fa-pen-to-square"></i></span>`
    span();

    taskInput.appendChild(li);


    if (input.value === '') {
        li.remove();
        return;
    }

    localStorage.getItem(li)

    const editBtn = li.querySelector('.edit-btn');

    editBtn.addEventListener('click', () => {
        const edit = prompt('Edit Text:');
        li.textContent = edit;
        li.innerHTML = `${edit} <span id="status" class="status-pending">Pending</span>
      <span><i class=" tick-btn fa-solid fa-check"></i></span><span><i class="edit-btn fa-solid fa-pen-to-square"></i></span>`

        span();
    });

    function span() {
        const ticker = li.querySelector('.tick-btn');
        const statusSpan = li.querySelector('#status');


        ticker.addEventListener('click', () => {
            console.log('click');
            statusSpan.classList.add('status-completed');
            statusSpan.classList.remove('status-pending');
            statusSpan.innerHTML = 'Completed';
        });
    }


    input.value = '';


});

function saveTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
}

function updateTask(li, updatedTask) {
    let tasks = getTasks();
    tasks = tasks.map(t => (t.text === updatedTask.text ? updatedTask : t));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
