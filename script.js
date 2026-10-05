let romeoButton = document.querySelector("#romeoButton");
let julietButton = document.querySelector("#julietButton");

let romeoChat = document.querySelector("#romeoChat");
let julietChat = document.querySelector("#julietChat");

let phoneTitle = document.querySelector("#phoneTitle");
let contactName = document.querySelector("#contactName");
let contactStatus = document.querySelector("#contactStatus");
let profilePicture = document.querySelector("#profilePicture");

let revealButton = document.querySelector("#revealButton");
let secretMessage = document.querySelector("#secretMessage");

let modeButton = document.querySelector("#modeButton");

let sendButton = document.querySelector("#sendButton");
let messageInput = document.querySelector("#messageInput");


romeoButton.addEventListener("click", function () {

    romeoChat.classList.remove("hidden");
    julietChat.classList.add("hidden");

    phoneTitle.innerHTML = "Romeo's Phone";
    contactName.innerHTML = "Mercutio";
    contactStatus.innerHTML = "probably causing problems";
    profilePicture.src = "images/mercutio.jpg";

    secretMessage.classList.add("hidden");

    document.querySelector("#messages").scrollIntoView();
});


julietButton.addEventListener("click", function () {

    julietChat.classList.remove("hidden");
    romeoChat.classList.add("hidden");

    phoneTitle.innerHTML = "Juliet's Phone";
    contactName.innerHTML = "Romeo 💙";
    contactStatus.innerHTML = "last seen outside a balcony";
    profilePicture.src = "images/romeo.jpg";

    secretMessage.classList.add("hidden");

    document.querySelector("#messages").scrollIntoView();
});


revealButton.addEventListener("click", function () {

    secretMessage.classList.toggle("hidden");

    if (secretMessage.classList.contains("hidden")) {
        revealButton.innerHTML = "Reveal Unsent Message";
    } else {
        revealButton.innerHTML = "Hide Message";
    }

});


modeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        modeButton.innerHTML = "☀️ Day Mode";
    } else {
        modeButton.innerHTML = "🌙 Midnight Mode";
    }

});


sendButton.addEventListener("click", function () {

    let newMessage = messageInput.value;

    if (newMessage != "") {

        let messageBubble = document.createElement("div");

        messageBubble.classList.add("sent");

        messageBubble.innerHTML = newMessage;

        if (romeoChat.classList.contains("hidden")) {
            julietChat.appendChild(messageBubble);
        } else {
            romeoChat.appendChild(messageBubble);
        }

        messageInput.value = "";
    }

});
