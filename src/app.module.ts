import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { User } from './models/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: "mssql",
      host: "localhost",
      username: "admin",
      password: "12345678",
      database: "test_vue",
      options: {
        encrypt: false, // MSSQL-specific option
      },
      synchronize: true, //use this with development environment
      entities: [
        User
      ],
    }
  ), UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { 
}
