let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];


let messageContainer = document.getElementById("messageContainer")
let userInput = document.getElementById("userInput")
let buttonEl = document.getElementById("button")


buttonEl.addEventListener("click", addFunction)

function addFunction(){
    let userInputValue = userInput.value 
    
    let divContainer = document.createElement("div")
    divContainer.classList.add("me-card")
    messageContainer.appendChild(divContainer)

    let mesEl = document.createElement("span")
    mesEl.classList.add("message")
    mesEl.textContent = userInputValue 
    divContainer.appendChild(mesEl)

    userInput.value = ""
    serverReply()
}

function serverReply(){
    let length = chatbotMsgList.length 
     
    let index = Math.ceil(Math.random() * (length-1))
    let text = chatbotMsgList[index]
    
    let serverDiv = document.createElement("div")
    serverDiv.classList.add("server-card")
    messageContainer.appendChild(serverDiv)
   
    let serverRe = document.createElement("span")
    serverRe.classList.add("message")
    serverRe.textContent= text 
    serverDiv.appendChild(serverRe)
}

