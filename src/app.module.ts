import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { DB_URL } from './constants';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ // MongooseModule.forRoot(DB_URL, { useNewUrlParser: true }),
    BlogModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
