var input = document.getElementById("inputtext")
var list = document.getElementById("list")
function ToDoList() {
    var li = document.createElement("li");
    var hr = document.createElement("hr")
    li.innerHTML = input.value + '<p>Edit<p>';
    list.appendChild(li);
    list.appendChild(hr);
    li.style.fontSize = "15px";
    li.style.fontWeight = "bold";
    li.style.textTransform = "Capitalize";
    hr.style.height = "3px";
    hr.style.borderRadius = "3px";
    hr.style.width = "100%";
    hr.style.backgroundColor = "black";
    input.value = "";
}