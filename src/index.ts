import { ChatBox } from './components/ChatBox';
import { ChatService } from './services/chatService';

const chatService = new ChatService();
const chatBox = new ChatBox(chatService);

chatService.connect();

chatService.onMessage((message: string) => {
    chatBox.receiveMessage(message);
    chatBox.render();
});

const sendButton = document.getElementById('sendButton');
const messageInput = document.getElementById('messageInput') as HTMLInputElement | null;

if (sendButton && messageInput) {
    sendButton.addEventListener('click', () => {
        const message = messageInput.value;

        if (chatBox.validateMessage(message)) {
            chatService.sendMessage(message);
            chatBox.sendMessage(message);
            messageInput.value = '';
        }
    });
}

chatBox.render();