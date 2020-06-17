import List from './List.js'

const father = document.getElementById('father')
const search = document.getElementById('search')
const list = new List()

list.addTask('Esto es una nota de prueba')
function detectComponent(e){
    const target = e.target.dataset
    
    if(target.btn === "search-tag"){
        const content = document.getElementById('toSearch').value
        list.searchTag(content)
    }
    if(target.btn === 'add-task'){
        let content = document.getElementById('taskContentToAdd')
        const nameTag = document.getElementById('tag-name')
        list.addTask(content.value,nameTag.value)
        content.value = '' ;   
        nameTag.value = ''
    }

    if(target.btn === 'edit-task'){
        list.editTask(e)
    }

    if(target.btn === 'listo'){
        list.ready(e)
    }

    if(target.btn === 'delete-task'){
        list.deleteTask(e)
    }
    
    if(target.btn === 'check'){
        list.checkTask(e)
    }
    
}

function enter(e){
    const keycode = e.keycode || e.which
    if(keycode === 13){
        const valueToSearch = document.getElementById('toSearch').value
        list.searchTag(valueToSearch)
    }
}

father.addEventListener('click',detectComponent)
search.addEventListener('keyup',enter)

