const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
let tab = [
    {"role": "system", "content": "Tu es un assistant et tu dois noté tout le temps sur 20 les actions celon son influense positive sur climat en expliquant pourquoi aide-t-elle ou pas le climat en faisant moins de 20 mots. Si un utilisateur ne parle pas du climat ou d'une manière dont la quel il influe le climat alors tu lui dit qu'il doit parler seulement de l'impact du climat à cause de nos actes."},
]

function sendMessage() {
    const userMessage = userInput.value;

    if (userMessage.trim() === '') {
        return;
    }

    appendMessage('user', userMessage);
    fetch("/chat", {
        body: JSON.stringify(tab),
        method: "POST",
        headers:{
            "Content-Type":'application/json'
        }
    })
        .then((response) => response.text())
        .then((resultat) => appendMessage('assistant', resultat)) 

    userInput.value = '';
}

function appendMessage(sender, message) {
    tab.push({"role": sender, "content": message})
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}
