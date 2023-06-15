var inputs = document.querySelectorAll(".clip");

var buttons = document.getElementById("btn");

buttons.addEventListener("click", function (e) {
    e.preventDefault()
    inputs.forEach(function (input) {
        var b = input.value;
        if (b == "") {
            input.parentNode.nextElementSibling.classList.add("view");
        }
        else {
            input.parentNode.nextElementSibling.classList.remove("view");
        }


        var password = document.getElementById("pass");
        var c = password.value;
        var d = c.split("");
        var e = d.length;
        if (e < 8) {
            password.parentNode.nextElementSibling.nextElementSibling.classList.remove("length");
            password.parentNode.nextElementSibling.nextElementSibling.classList.add("view");
        }
        else {
            password.parentNode.nextElementSibling.nextElementSibling.classList.add("length");
            password.parentNode.nextElementSibling.nextElementSibling.classList.remove("view");
        }
        var empty = 0;
        d.forEach(function (pass) {
            if (pass == " ") {
                empty++;
            }
            if (empty >= 1) {
                password.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("empty");
                password.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("view");
            }
            else {
                password.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("empty");
                password.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("view");
            }
        })


        var confirm = document.getElementById("confirm");
        var f = confirm.value;
        if (c == f) {
            confirm.parentNode.nextElementSibling.nextElementSibling.classList.remove("view");
        }
        else {
            confirm.parentNode.nextElementSibling.nextElementSibling.classList.add("view");
        }
        var name = document.getElementById("user");
        var f = name.value;
        localStorage.setItem("Name", f);
        localStorage.setItem("Password", c);

        var reg = document.getElementsByClassName("view");
        var comp = reg.length;
        if (comp == 0) {
            buttons.nextElementSibling.classList.remove("register");
            buttons.nextElementSibling.classList.add("view");
        }

    })
})


