class ChatBox {
    constructor() {
        this.messages = [];
    }

    sendMessage(message: string) {
        if (this.validateMessage(message)) {
            // Logic to send the message
            this.messages.push(message);
            this.render();
        }
    }

    receiveMessage(message: string) {
        this.messages.push(message);
        this.render();
    }

    render() {
        // Logic to display the chat UI
        console.log("Chat messages:", this.messages);
    }

    private validateMessage(message: string): boolean {
        // Basic validation logic
        return message.trim().length > 0;
    }
}

export default ChatBox;