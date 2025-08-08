import express, { Express } from 'express';

import connectDatabase from './setup-database';
import { ChattyServer } from './setup-server';
import { config } from './config';

class Application {
  public initialize(): void {
    this.loadConfig();
    connectDatabase();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
