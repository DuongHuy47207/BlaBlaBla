let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");
let taskInput = document.getElementById("taskInput");





// Add erase button 
let listTask = document.querySelectorAll(".task");
listTask.forEach((task) => {
    addErase(task);
    task.addEventListener('click', () => checked(task));
});

addBtn.addEventListener('click', addTask)

//FUNCTIONS 

//Add task function
function addTask(){
    inputValue = taskInput.value;
    if (inputValue.trim() === ""){
        alert("Do nothing?");
    }
    else {
        let newTask = document.createElement("LI");
        newTask.innerText = inputValue;
        todoList.appendChild(newTask);
        addErase(newTask);}
    taskInput.value = '';
    }


//Add erase function
function addErase(task){
    let erase = document.createElement("SPAN");
    erase.className = "erase-btn";
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-eraser");
    erase.appendChild(icon);
    task.appendChild(erase);    

    erase.addEventListener('click', () => {
        task.remove();
    })
}


// Checked function
function checked(task){
    task.classList.toggle('checked');
}