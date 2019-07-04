
import * as mongoose from 'mongoose';
import { DB_URL } from '../constants';
import { DATABASE_CONNECTION } from '../constants';

export const databaseProviders = [
    {
        provide: DATABASE_CONNECTION,
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect(DB_URL, { useNewUrlParser: true }),
    },
];
