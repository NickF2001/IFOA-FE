class TODOList {
    constructor () {
        this.tasks = [];
        console.log('tasks', this.tasks);

    };

    aggiungiTask (task) {
        this.tasks.push(task) // metto questo task dentro l'array tasks
        console.log('tasks', this.tasks);

        const todo = document.getElementById('todo');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task));
        todo.appendChild(li);
        li.addEventListener('click', ()=> {
            this.concludiTask(task);
            e.srcElement.remove();
        })
    }

    concludiTask(task) {
        console.log(`${task} completato!`);
    }
}




document.addEventListener('DOMContentLoaded', () => {
    const newTaskBtn = document.getElementById('new-task-btn');
    const input = document.getElementById('new-task');

    const todoList = new TODOList();

    newTaskBtn.addEventListener('click', ()=>{ // che evento deve succedere al click/keypress/...
        console.log('nuovo task', input.value);
        todoList.aggiungiTask(input.value);
    })
        input.addEventListener('keypress', (evento)=>{
            if (evento.key === 'Enter') {
                console.log();
                console.log('nuovo task', input.value);
        todoList.aggiungiTask(input.value);
        input.value = '';
            }
        })
    })
 //controllo extra