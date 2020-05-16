
    function onClick() {
        var fc = document.getElementById("calc");
        var r = String((Math.floor(30 * fc[0].value +  0.075* fc[2].value + 10* fc[1].value)));
        var retWeb = document.getElementsByClassName("ret");
        retWeb[0].innerHTML = "You will pay an estimated sum of $" + r + ".";
        retWeb[0].style.color = "darkblue";
    }