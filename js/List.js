export default class List {
    showTasks(tasks){
        (tasks.length === 0)?console.log('No hay tareas con ese nombre'):undefined;

        for(const task of tasks){
            console.log(task)
        }
    }

    searchTag(valueToSearch){
        const tasks = [...document.getElementsByClassName('task')]
        const tasksFiltered = tasks.filter(task=>task.classList[1] === valueToSearch)
        this.showTasks(tasksFiltered)
    }

    addTask(content,tag){
        if(!content){
            swal("Este campo no puede estar vacio","", "error");
            return
        }
        const list = document.getElementById('listOfTasks')
        const newTask = document.createElement('li')
        let nameTag = tag || 'anonymous-tag'
        newTask.setAttribute('class', `task ${nameTag}`)
        newTask.innerHTML = `<div class="task_tag"><span class="task_tag-content"><i class="fas fa-tags icon-tag"></i>${nameTag}</span></div>
                            <label class="task_content" data-btn="check" >${content}</label>
                            <textarea class="task_content--edit">${content}</textarea>
                            <div class="task_options">
                                <button class="task_btn-listo" data-btn="listo">Listo</button>
                                <button class="task_btn-edit" data-btn="edit-task">Edit</button>
                                <button class="task_btn-delete" data-btn="delete-task">Delete</button>
                            </div>
                        `
        list.insertBefore(newTask, list.childNodes[0]);
    }

    editTask(e){
        const theActualTask = e.path[2]
        theActualTask.classList.add('editMode')    
    }

    ready(e){
        const theActualTask = e.path[2]
        let contentOfTheActualTask= theActualTask.childNodes[2]
        let contentOfTheEditTask = theActualTask.childNodes[4]
        contentOfTheActualTask.textContent = contentOfTheEditTask.value
        
        theActualTask.classList.remove('editMode')
        contentOfTheActualTask.classList.remove('check-task')
    }
    
    deleteTask(e){
        const theActualTask = e.path[2];
        theActualTask.remove()
    }

    checkTask(e){
        const checkThisTask = e.target
        checkThisTask.classList.add('check-task')
    }
}