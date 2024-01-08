import 'dotenv/config';
import Wrapper from './client.js';
import { settings } from './config/config.json' assert { type: 'json' };
const { token } = process.env;
