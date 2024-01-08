import WebSocket from 'ws';
import axios from 'axios';

class Wrapper {
  /**
   * @class
   * @param {string} token
   * @param {object} settings
   * @argument {string} [settings.os.name]
   * @argument {string} [settings.os.version]
   * @argument {boolean} [settings.device]
   * @argument {string} [settings.afk]
   * @argument {Array<object>} [settings.activities]
   * @argument {string} [settings.status]
   */

  constructor(token, settings) {
    this.settings = settings;
    if (!this.settings.guild_id) this.settings.guild_id = null;
    if (!this.settings.devide) this.settings.device = '';
    if (!this.settings.status) this.settings.status = 'dnd';
    if (!this.settings.afk) this.settings.afk = false;
    if (!this.settings.game) this.settings.game = [];
    if (!this.settings.os)
      this.settings.os = { name: 'Windows', version: '10' };
    if (!this.settings.browser)
      this.settings.browser = {
        name: 'Chrome',
        user_agent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
        version: '76.0.3809.132',
      };
    this.token = token;
    axios.defaults.headers.common['authorization'] = this.token;
    this.s = 0;
    this.self;
    this.events = {};

    this.init = function () {
      this.socket = new WebSocket(
        'wss://gateway.discord.gg/?encoding=json&v=9'
      );
      this.socket.onopen = this._onopen.bind(this);
      this.socket.onmessage = this._onmessage.bind(this);
      this.socket.onerror = this.socket.onclose = this._onerror.bind(this);
    };
    this.init();
  }
}
