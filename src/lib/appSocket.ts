import io from 'socket.io';
import http from 'http';

class AppSocket {
    private socket: io.Server;

    constructor(server: http.Server) {
        this.socket = io(server, {
            pingInterval: 10000,
            pingTimeout: 5000,
            cookie: false
        });

        this.socket.on('connect', this.onConnect.bind(this));
    }

    private onConnect(client: io.Socket) {
        client    
            .on('joinRoom', this.onJoinRoom.bind(this, client))
            .on('leaveRoom', this.onLeaveRoom.bind(this, client))
            .on('message', this.onMessage.bind(this, client))
            .on('disconnect', this.onDisconnect.bind(this, client));
    }

    private onJoinRoom(client: io.Socket, user: string, room: string) { 
        client.join(room).to(room).emit('message', user, room, `${user} has entered ...`);
    }

    private onLeaveRoom(client: io.Socket, user: string, room: string) { 
        client.leave(room, () => client.to(room).emit('message', user, room, `${user} has left ...`));
    }

    private onMessage(client: io.Socket, user: string, room: string, message: string) { 
        client.to(room).emit('message', user, room, message);
    }

    private onDisconnect(client: io.Socket) {
                
    }
}

export { AppSocket };