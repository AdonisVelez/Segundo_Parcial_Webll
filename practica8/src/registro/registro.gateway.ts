import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { RegistroService } from './registro.service';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({cors: true})
export class RegistroGateway implements OnGatewayConnection, OnGatewayDisconnect{

  @WebSocketServer()
  wss: Server;

  constructor(private readonly registroService: RegistroService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      // validar el token
      await this.registroService.registerClient(client, token);
    } catch (error) {
      client.disconnect();  
      return;    
    }
    this.wss.emit('clients-updated', this.registroService.getConnectedClients());
  }
  handleDisconnect(client: Socket) {
    this.registroService.removeClient(client.id);
    this.wss.emit('clients-updated', this.registroService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket) {
    //! todos reciben el mensaje
    this.wss.emit('message-from-server',{
      fullName: this.registroService.getUserFullName(client.id),
    });
  }


  @SubscribeMessage('agregar-transaccion')
  create(@MessageBody() createRegistroDto: CreateRegistroDto) {
    
    const inserted = this.registroService.create(createRegistroDto);
    this.wss.emit('newRegistro', this.findAll() );
    return inserted;
  }

  @SubscribeMessage('consultar-activos')
  findAll() {
    return this.registroService.findAll();
  }
}
