let romeoButton = document.querySelector("#romeoButton");
let julietButton = document.querySelector("#julietButton");

let romeoChat = document.querySelector("#romeoChat");
let julietChat = document.querySelector("#julietChat");

let chatTitle = document.querySelector("#chatTitle");

let secretButton = document.querySelector("#secretButton");
let secretMessage = document.querySelector("#secretMessage");

let modeButton = document.querySelector("#modeButton");


romeoButton.addEventListener("click", function () {

    romeoChat.style.display = "block";
    julietChat.style.display = "none";

    chatTitle.innerHTML = "Romeo's Messages";

});


julietButton.addEventListener("click", function () {

    julietChat.style.display = "block";
    romeoChat.style.display = "none";

    chatTitle.innerHTML = "Juliet's Messages";

});


secretButton.addEventListener("click", function () {

    if (secretMessage.style.display == "block") {

        secretMessage.style.display = "none";
        secretButton.innerHTML = "Show Secret Message";

    } else {

        secretMessage.style.display = "block";
        secretButton.innerHTML = "Hide Secret Message";

    }

});


modeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});
