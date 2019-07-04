
import { Connection } from 'mongoose';
import { BlogSchema } from './schemas/blog.schema';
import { POST_MODEL_PROVIDER, DATABASE_CONNECTION } from '../constants';

export const blogProvider = [
  {
    provide: POST_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model(POST_MODEL_PROVIDER, BlogSchema),
    inject: [DATABASE_CONNECTION],
  },
];
