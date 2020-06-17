import List from './List.js'

const father = document.getElementById('father')
const search = document.getElementById('search')
const list = new List()

function detectComponent(e){
    const target = e.target.dataset
    
    if(target.btn === "search"){
        const content = document.getElementById('toSearch').value
        list.search(content)
    }
    
}

function enter(e){
    const keycode = e.keycode || e.which
    if(keycode === 13){
        const valueToSearch = document.getElementById('toSearch').value
        list.search(valueToSearch)
    }
}

father.addEventListener('click',detectComponent)
search.addEventListener('keyup',enter)

