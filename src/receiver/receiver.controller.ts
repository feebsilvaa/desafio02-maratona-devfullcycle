import { Controller, Get, Render } from '@nestjs/common';

@Controller('receiver')
export class ReceiverController {

  @Get()
  @Render('receiver')
  root() {
    return {
      titleMessage: 'WebRTC Receiver',
    }
  }
  

}
