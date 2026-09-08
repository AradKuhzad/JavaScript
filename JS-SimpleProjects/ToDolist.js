    // Ask this question: Why without this: let tasks = []; , Code still run? important!
    // Answer: Because of 39 line on this code, it will create a new array called tasks, and it will be empty.
    let tasks = [];
    function displayTasks() {
      let html = "";
      for (let i = 0; i < tasks.length; i++) {
        html +=  "<li>" + tasks[i] +
        " <button onclick = 'removeTask(" + i + ")'> x </li>"; 
       }
       document.getElementById("List").innerHTML = html;
    }  
    function addTask() {
      let taskInput = document.getElementById("task");
      let text = taskInput.value;
      if (text === "") {
        return;
      }
      tasks.push(text)
      taskInput.value = "";
      saveTasks();
      displayTasks();
    }
    function removeTask(i) {
      tasks.splice(i, 1);
      saveTasks();
      displayTasks();
    }
    function ClearAll() {
      tasks = [];
      saveTasks();
      displayTasks();
    }
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    function loadTask() {
      let saved = localStorage.getItem("tasks");
      if (saved !== null) {
        tasks = JSON.parse(saved);
      }
    }

    loadTask();
    displayTasks();
