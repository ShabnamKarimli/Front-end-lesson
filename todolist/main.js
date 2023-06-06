// var pTag=document.querySelectorAll(".text")
// pTag.forEach(element => {
//     element.innerHTML="salam"
//     element.style.color="red"
// });


var text = document.getElementById("textInput")
var list = document.getElementById("list")
var btn = document.getElementById("btn")

var dataArr = [];


btn.addEventListener("click", function () {

    if (!text.value == '') {
        dataArr.push(text.value);
        localStorage.setItem("todolist", JSON.stringify(dataArr))
    }

    var jsonarr = JSON.parse(localStorage.getItem("todolist"))
    jsonarr.forEach(element => {
        var li = document.createElement("li");
        li.innerHTML = text.value + '<i onclick="Remove(this)" class="ml-5 fa-solid fa-trash"></i>' + '<i onclick="Ckecked(this)" class="ml-5 fa-regular fa-circle-check"></i>'
        li.style.textTransform = "Capitalize";
        li.style.fontSize = "20px"
        list.appendChild(li)
        text.value = '';

    });
})











function Remove(element) {
    // console.log(element.parentElement)  //li qaytardi hansi ki icinde icona click olunub
    var li = element.parentElement
    list.removeChild(li)

}

function Ckecked(element) {
    var li = element.parentElement;
    li.style.textDecoration = "line-through"
    li.style.textDecorationColor = "red"
    li.style.textDecorationThickness = "5px"
}

