var buttons = document.querySelectorAll(".btn-link");

buttons.forEach(element => {
    element.addEventListener("click", function () {

        var btnparent = element.parentElement;
        var text = btnparent.nextElementSibling;

        if (text.classList.contains("show")) {
            text.classList.remove("show")
        }
        else {
            text.classList.add("show")
            removeOthers()
        }


        function removeOthers() {
            var collapse = querySelectorAll("collapse")
            collapse.forEach(element => {
                if (element.classList.contains("show")) {
                    element.classList.remove("show")
                }
            });
        }



    })
});