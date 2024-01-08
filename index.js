import 'dotenv/config';
import Wrapper from './client.js';
import WebSocket from 'ws';
import { settings } from './config/config.json' assert { type: 'json' };
const { token } = process.env;
const self = new Wrapper(token, settings);
self.on('ready', () => {
  console.log(
    '\x1b[42m',
    `Logged in as ${self.client.user.username}#${self.client.user.discriminator}`,
    '\x1b[0m'
  );
});

// const ws = new WebSocket(process.env.ws);

self.on('message_create', (m) => {
  if (m.webhook_id) return;

  console.log(m);
});
