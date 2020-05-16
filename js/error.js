//jshint esversion:6
exports.error = function(input) {
    let errorMessage = document.getElementsByClassName("completion")[0];
    if(input === "error"){
        errorMessage.style.color = "red";
        errorMessage.innerHTML = "There was a problem with the attempt. Try again!";
    }else{
        errorMessage.style.color = "green";
        errorMessage.innerHTML = "You have successfully subscribed to our mailing list!";
    }
};