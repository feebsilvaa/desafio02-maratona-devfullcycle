import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo(): any {
    const apiInfo = {
      name: 'Desafio 02 - Api de listagem das aulas da Maratona Dev Fullcycle',
      version: '0.0.1',
      owner: 'Fernando Barbosa Silva',
      github: 'https://github.com/feebsilvaa'
    }
    return apiInfo;
  }
}
