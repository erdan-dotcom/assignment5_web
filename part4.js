let tasksArray = [];

document.getElementById('add-task-btn').addEventListener('click', function() {
    let titleInput = document.getElementById('task-title');
    let descInput = document.getElementById('task-desc');
    
    if (titleInput.value.trim() === "" || descInput.value.trim() === "") {
        return;
    }

    let newTask = {
        id: Date.now(),
        title: titleInput.value,
        description: descInput.value,
        completed: false
    };

    tasksArray.push(newTask);
    titleInput.value = "";
    descInput.value = "";
    renderTasks();
});

function renderTasks() {
    let container = document.getElementById('todo-list-container');
    container.innerHTML = "";

    tasksArray.forEach(function(task) {
        let taskDiv = document.createElement('div');
        taskDiv.className = "task-item";
        
        let contentDiv = document.createElement('div');
        contentDiv.className = "task-content";
        if (task.completed) {
            contentDiv.classList.add("completed");
        }
        
        let titleEl = document.createElement('strong');
        titleEl.innerText = task.title;
        let descEl = document.createElement('p');
        descEl.innerText = task.description;
        descEl.style.margin = "5px 0 0 0";
        descEl.style.fontSize = "14px";
        
        contentDiv.appendChild(titleEl);
        contentDiv.appendChild(descEl);

        let actionsDiv = document.createElement('div');
        
        let doneBtn = document.createElement('button');
        doneBtn.className = "done-btn";
        doneBtn.innerHTML = "&#10003;"; 
        doneBtn.addEventListener('click', function() {
            task.completed = !task.completed;
            renderTasks();
        });

        let deleteBtn = document.createElement('button');
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "&#10007;"; 
        deleteBtn.addEventListener('click', function() {
            tasksArray = tasksArray.filter(t => t.id !== task.id);
            renderTasks();
        });

        actionsDiv.appendChild(doneBtn);
        actionsDiv.appendChild(deleteBtn);

        taskDiv.appendChild(contentDiv);
        taskDiv.appendChild(actionsDiv);

        container.appendChild(taskDiv);
    });
}