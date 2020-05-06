import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MaratonaModule } from './maratona/maratona.module';
import { Maratona } from './maratona/maratona.model';
import { SenderController } from './sender/sender.controller';
import { ReceiverController } from './receiver/receiver.controller';
import 'reflect-metadata';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Maratona],
    }),
    MaratonaModule
  ],
  controllers: [AppController, SenderController, ReceiverController],
  providers: [AppService],
})
export class AppModule {}
