export default class List {
    constructor(target){
        this.target = target
    }
    showTasks(tasks){
        (tasks.length === 0)?console.log('No hay tareas con ese nombre'):undefined;

        for(const task of tasks){
            console.log(task)
        }
    }
    search(valueToSearch){
        const tasks = [...document.getElementsByClassName('task')]
        const tasksFiltered = tasks.filter(task=>task.classList[1] === valueToSearch)
        this.showTasks(tasksFiltered)
    }
}