import mongoose from 'mongoose';
import Logger from 'bunyan';

import { config } from './config';

const log: Logger = config.createLogger('database');

const connectDatabase = () => {
  const connect = () => {
    mongoose
      .connect(config.DATABASE_URL as string)
      .then(() => {
        log.info('Successfully connected to database.');
      })
      .catch((error) => {
        log.error('Error connecting to database: ', error);
        process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};

export default connectDatabase;
