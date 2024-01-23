
const todoList = document.getElementById("todolist")
const todoForm = document.getElementById("todo-form")

let todoArray = [];

function saveTodos(){
  const todoString = JSON.stringify(todoArray)
  localStorage.setItem("myTodos", todoString)
}

function getTodos(){
  const myTodos = localStorage.getItem("myTodos")
  if(myTodos !== null){
    todoArray = JSON.parse(myTodos)
    displayTodos()
  }
}
getTodos()

function handleTodoDelBtnClick(clickedId){
  todoArray = todoArray.filter((aTodo) => {
    return aTodo.todoId !== clickedId;
  })
  displayTodos()
  saveTodos()
}


function handleTodoItemClick(clickedId){
  todoArray = todoArray.map((aTodo) => {
    if(aTodo.todoId === clickedId){
      return {
        ...aTodo, todoDone: !aTodo.todoDone
      }
    } else {
      return aTodo
    }
  })
  displayTodos()
  saveTodos()
}


function displayTodos(){
  todoList.innerHTML = "";
  todoArray.forEach((aTodo) => {
    const todoItem = document.createElement("li")
    const todoDelBtn = document.createElement("span")
    todoDelBtn.textContent = ' x'
    todoItem.textContent = aTodo.todoText
    if(aTodo.todoDone){
      todoItem.classList.add("done")
    }else{
      todoItem.classList.add("yet")
    }

    todoItem.addEventListener("click", () => {
      handleTodoItemClick(aTodo.todoId)
    })
    todoDelBtn.addEventListener("click", () => {
      handleTodoDelBtnClick(aTodo.todoId)
    })
    todoItem.appendChild(todoDelBtn)
    todoList.appendChild(todoItem)
  })
}


todoForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoDone: false,
  }
  todoForm.todo.value = ""
  todoArray.push(toBeAdded)
  displayTodos()
  saveTodos()
})
