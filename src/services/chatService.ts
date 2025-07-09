export class ChatService {
    private connection: WebSocket | null = null;
    private messageCallback: Function | null = null;

    connect(url: string): void {
        this.connection = new WebSocket(url);

        this.connection.onmessage = (event) => {
            if (this.messageCallback) {
                this.messageCallback(event.data);
            }
        };
    }

    disconnect(): void {
        if (this.connection) {
            this.connection.close();
            this.connection = null;
        }
    }

    onMessage(callback: Function): void {
        this.messageCallback = callback;
    }

    sendMessage(message: string): void {
        if (this.connection && this.connection.readyState === WebSocket.OPEN) {
            this.connection.send(message);
        }
    }
}