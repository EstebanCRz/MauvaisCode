const x = document.getElementById('chatMessages');
const y = document.getElementById('userInput');
let t = [
    {"role": "system", "content": "Tu es un assistant et tu dois noter chaque action sur 20 celon leurs influenses positive sur le climat en expliquant pourquoi aide-t-elle ou pas le climat en faisant moins de 20 mots. Si un utilisateur ne parle pas du climat ou d'une manière dont la quel il influe le climat quelconque alors tu lui dit qu'il doit parler seulement de l'impact du climat à cause de nos actes."},
]

function sendMessage() {
    const um = y.value;

    if (um.trim() === '') {
        return;
    }

    appendMessage('user', um);
    fetch("/chat", {
        body: JSON.stringify(t),
        method: "POST",
        headers:{
            "Content-Type":'application/json'
        }
    })
        .then((response) => response.text())
        .then((r) => appendMessage('assistant', r))

    y.value = '';
}

function appendMessage(s, m) {
    t.push({"role": s, "content": m})
    const me = document.createElement('div');
    me.classList.add('message', s);
    me.innerText = m;
    x.appendChild(me);

    x.scrollTop = x.scrollHeight;
}