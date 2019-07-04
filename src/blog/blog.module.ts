import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';
import { DatabaseModule } from '../database/database.module';
import { blogProvider } from './blog.provider';
import { POST_MODEL_PROVIDER } from '../constants';

@Module({
  imports: [DatabaseModule,
    // MongooseModule.forFeature([{ name: POST_MODEL_PROVIDER, schema: BlogSchema }]),
  ],
  providers: [BlogService, ...blogProvider],
  controllers: [BlogController],
})
export class BlogModule { }
