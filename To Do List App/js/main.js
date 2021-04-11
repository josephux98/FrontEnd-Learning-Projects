//selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');

//event listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", filterTodo)

function addTodo(event) {
    event.preventDefault();

    //todo Div
    const todoDiv = document.createElement('li');
    todoDiv.classList.add('todo');

    //todo LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.nodeValue;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);

    if (todoInput.value === "") {
        return null;
    }
    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"> </i>';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    todoInput.value = ""
}

//Delete and Check

function deleteCheck(e) {
    const item = e.target;

    //Delet Item

    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;


        // animation Transitions

        todo.classList.add("fall")
        todo.addEventListener('transitionend', function() {
            todo.remove()
        })
    }

    //Complete Item
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")

    }

}

//filtering the tasks according the option

function filterTodo(e) {
    const todos = todoList.childNodes;
    for (let i = 1; i < todos.length; i++) {
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":

                if (todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;

            case "uncompleted":
                if (!todo[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
}