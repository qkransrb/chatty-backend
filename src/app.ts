import express, { Express } from 'express';

import connectDatabase from '@root/setup-database';
import { ChattyServer } from '@root/setup-server';
import { config } from '@root/config';

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
