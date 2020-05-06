import { Controller, Get, Render } from '@nestjs/common';

@Controller('sender')
export class SenderController {

  @Get()
  @Render('sender')
  root() {
    return {
      titleMessage: 'WebRTC Sender',
    }
  }
}
