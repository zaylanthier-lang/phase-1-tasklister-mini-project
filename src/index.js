document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = document.getElementById("new-task-description").value;
    buildToDo(task);
  });
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const ul = document.getElementById("tasks");
  ul.appendChild(li);
}