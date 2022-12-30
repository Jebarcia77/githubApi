import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsController } from './controllers/commits.controller';

@Module({
  imports: [],
  controllers: [AppController, CommitsController],
  providers: [AppService],
})
export class AppModule {}
