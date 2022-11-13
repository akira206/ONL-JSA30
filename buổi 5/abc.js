var inp = document.querySelector('.TaskName');
var list = document.querySelector('.tasklist');
var AddTask = document.querySelector('.btnTask');
var TaskList = [];

function btnAdd() {
    // console.log(inp.value)
    // console.log(list)

    if (inp.value == "") {
        alert("Nhập gì đó đi?")
    }else{
        var newTask = document.createElement("li")
        // console.log(newTask)
        newTask.innerHTML = inp.value
        TaskList.push(inp.value)
        list.appendChild(newTask)
        inp.value = ""
        // console.log(TaskList)
        localStorage.setItem('todolist', JSON.stringify(TaskList))
    }
}

