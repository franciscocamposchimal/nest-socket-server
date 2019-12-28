import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { UsersService } from './users/users.service';

@WebSocketGateway({
  origins: '*:*',
  transports: [
    'websocket',
    'polling'
  ],
})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor(
    private readonly userService: UsersService
  ){}

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('GET_USERS')
  async handleMessage(client: Socket, payload: any): Promise<any> {
    let allUser = await this.userService.findAll();
    this.server.emit('ALL_USERS', allUser);
  }

  @SubscribeMessage('LOGIN')
  async login(client: Socket, payload: any) {
    this.logger.log(`Client : ${client.id}, username: ${payload.username}, msg: ${payload.message}`);
  }


  @SubscribeMessage('PRIVATE_MSN')
  async privateMsn(client: Socket, payload: any): Promise<any> {
    let allUser = await this.userService.findAll();
    //client.emit('GET_PVT_MSN', {message: "eded"});
    this.server.to(`${payload.to}`).emit('GET_PVT_MSN', allUser);
  }

  afterInit(server: Server) {
    this.logger.log('Server websocket init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  async handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    await this.userService.create(client.id);
  }

}
