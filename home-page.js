import { tasks } from "./tasks.js"


function renderTasks() {
    let containerHTML = '';

    tasks.forEach( (task) => {
        containerHTML += `
            <aside class="To-Do">
                <div class="task-class">${task.class}</div>

                <div class="task-headline">
                    <h4>${task.headline}</h4>
                </div>

                <div class="task-description">
                    <p>${task.description}</p>
                </div>

                <div class="below">
                    <div class="assignee">Insert name or picture</div>

                    <div class="priority">High</div>
                </div>
                <!--Attach link image here-->
                <div class="relevant-files"></div>
            </aside>
        `
    });

    document.querySelector('.main-body').innerHTML = containerHTML;
}

function addTasks() {
    let addTaskBtn = document.querySelector('.js-add-task');
    addTaskBtn.addEventListener('click', () => {
        
    })
}

addTasks();
renderTasks()