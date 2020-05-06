import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo(): any {
    const apiInfo = {
      name: 'Desafio 03 - Comunicação WebRTC com Peer.js',
      version: '0.0.1',
      owner: 'Fernando Barbosa Silva',
      github: 'https://github.com/feebsilvaa'
    }
    return apiInfo;
  }
}
