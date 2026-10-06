let romeoButton = document.querySelector("#romeoButton");
let julietButton = document.querySelector("#julietButton");

let romeoMessages = document.querySelector("#romeoMessages");
let julietMessages = document.querySelector("#julietMessages");

let secretButton = document.querySelector("#secretButton");
let secretMessage = document.querySelector("#secretMessage");


romeoButton.addEventListener("click", function () {

    romeoMessages.style.display = "block";
    julietMessages.style.display = "none";

});


julietButton.addEventListener("click", function () {

    julietMessages.style.display = "block";
    romeoMessages.style.display = "none";

});


secretButton.addEventListener("click", function () {

    if (secretMessage.style.display == "block") {

        secretMessage.style.display = "none";

    } else {

        secretMessage.style.display = "block";

    }

});
