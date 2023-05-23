var fname = document.getElementById("fname");
var sname = document.getElementById("sname");
var faname = document.getElementById("faname");
var button = document.getElementById("button");
var checkbox = document.getElementById("check")
var country = document.getElementById("country")
var city = document.getElementById("city")
var place = document.getElementById("place");
var tel = document.getElementById("tel")
var email = document.getElementById("email")
var age = document.getElementById("age")
var social = document.getElementById("social")
var genders = document.querySelectorAll(".genders")
var gendervalidation = document.querySelector(".gendervalidation")
var advice = document.querySelectorAll("input[name=advice")
var adValidation = document.querySelector(".adValidation")
var subject = document.getElementById("subjects")
var textareas = document.getElementById("textareas")
var select1 = document.getElementById("select1")
var select2 = document.getElementById("select2")





function isNullOrEmpty(item) {
    if (item.value == '') {
        item.nextElementSibling.style.display = "block";

    }
    else {
        item.nextElementSibling.style.display = "none";

    }
}


function selects(selectItem) {
    if (selectItem.value == '1') {
        selectItem.nextElementSibling.style.display = "block";

    }
    else {
        selectItem.nextElementSibling.style.display = "none";

    }
}

button.addEventListener("click", function () {
    isNullOrEmpty(fname);
    isNullOrEmpty(sname);
    isNullOrEmpty(faname);
    isNullOrEmpty(place);
    isNullOrEmpty(tel);
    isNullOrEmpty(age);

    selects(subject);
    selects(social);
    selects(select1);
    selects(select2);


    if (email.value == '') {
        email.nextElementSibling.style.display = "block";

    }
    else {
        email.nextElementSibling.style.display = "none";
        if (email.value.includes("@")) {
            email.nextElementSibling.style.display = "none"
        }
        else {
            email.nextElementSibling.innerHTML = "@ isaresi qoyulmayib";
            email.nextElementSibling.style.display = "block";
        }

    }

    var check = false;
    genders.forEach(element => {

        if (element.checked == true) {
            check = true;
        }
    });
    if (check == false) {
        gendervalidation.style.display = "block";
    }
    else {
        gendervalidation.style.display = "none";

    }

    var adCheck = false;
    advice.forEach(element => {
        if (element.checked == true) {
            adCheck = true;
        }
    });
    if (adCheck == false) {
        adValidation.style.display = "block";
    }
    else {
        adValidation.style.display = "none";
    }

});

checkbox.addEventListener("click", function () {

    if (checkbox.checked) {

        checkbox.nextElementSibling.nextElementSibling.style.display = "none";
        checkbox.parentElement.nextElementSibling.children[1].style.display = 'none';

        select1.style.display = "block";
        if (!select1.value == '1') {
            select2.style.display = "block"
        }
    }
    else {
        checkbox.nextElementSibling.nextElementSibling.style.display = "block";
        checkbox.parentElement.nextElementSibling.children[1].style.display = 'block';
        select1.style.display = "none";
        isNullOrEmpty(country);
        isNullOrEmpty(city);
    }

    if (textareas.value == '') {
        textareas.nextElementSibling.style.display = "block";

    }
    else {
        textareas.nextElementSibling.style.display = "none";
        count.innerHTML = 500 - textareas.value.length;

    }

})

