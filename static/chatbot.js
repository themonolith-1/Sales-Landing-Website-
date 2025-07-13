document.addEventListener("DOMContentLoaded", function() {
    const chatWindow = document.getElementById("chat-window");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const popupBtn = document.getElementById("chatbot-popup-btn");
    const popup = document.getElementById("chatbot-popup");
    const closeBtn = document.getElementById("chatbot-close-btn");

    function appendMessage(sender, text) {
        const msgDiv = document.createElement("div");
        msgDiv.className = sender === "user" ? "chat-user" : "chat-bot";
        msgDiv.textContent = text;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    sendBtn.onclick = function() {
        const message = chatInput.value.trim();
        if (!message) return;
        appendMessage("user", message);
        chatInput.value = "";
        fetch("/chatbot/ask", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({message})
        })
        .then(res => res.json())
        .then(data => appendMessage("bot", data.response));
    };

    chatInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") sendBtn.click();
    });

    // Popup open/close logic
    popupBtn.onclick = function() {
        popup.style.display = "flex";
        chatInput.focus();
        if (!chatWindow.hasChildNodes()) {
            appendMessage("bot", "Welcome! Ask me anything about our company, offers, or contact info.");
        }
    };
    closeBtn.onclick = function() {
        popup.style.display = "none";
    };
});
