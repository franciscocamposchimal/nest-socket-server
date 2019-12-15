import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
//import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    AppGateway, 
    UsersService
  ],
})
export class AppModule {}
