const taskKey = '@tasks'

// Função para adicionar tarefa
function addTask(event) {
  event.preventDefault() // Evita o recarregamento da página
  const taskId = new Date().getTime()
  const taskList = document.querySelector('#taskList')

  const form = document.querySelector('#taskForm')
  const formData = new FormData(form)

  const taskTitle = formData.get('title')
  const taskDescription = formData.get('description')

  const li = document.createElement('li')

  li.id = taskId
  li.innerHTML = `
      <h2>${taskTitle}</h2>
      <p>${taskDescription}</p>
      <button class="edit-button" title="Editar Tarefa" onclick="openModal(event)">✏️</button>
  `
  
  taskList.appendChild(li)

  // Salvar tarefas no localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  tasks.push({ title: taskTitle, description: taskDescription })
  localStorage.setItem(taskKey, JSON.stringify(tasks))

  form.reset()
}

function updateTask(event) {
    event.preventDefault() // Evita o recarregamento da página
    
    const form = event.srcElement
    const formData = new FormData(form)

    const newTitle = formData.get('title')
    const newDescription = formData.get('description')
    // não consegui terminar :(


    // Salvar tarefas no localStorage
    // const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
    // tasks.push({ title: taskTitle, description: taskDescription })
    // localStorage.setItem(taskKey, JSON.stringify(tasks))
  
    // form.reset()
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || []
  const taskList = document.querySelector('#taskList')
  taskList.innerHTML = tasks
    .map((task) => `
    <li>
        <h2>${task.title}</h2>
        <p>${task.description}</p>
        <button class="edit-button" title="Editar Tarefa" onclick="openModal(event)">✏️</button>
    </li>`)
    .join('')
})

function openModal(e){
    document.querySelector("dialog").showModal()
    console.log(e)
}

function closeModal(){
    document.querySelector("dialog").close()
}