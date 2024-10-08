import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, // makes the configuration globally available
  }),
  MongooseModule.forRoot('mongodb://localhost:27017/google-auth-db'), AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

