const message = ""; // Enter a message and there is a 25% chance that the server will support it
const hostm = ""; // Enter server IP
const portm = 12345; // Enter server port
const botname = "Bot" // Custom name (Bot0001-9999)

const bedrock = require('bedrock-protocol');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function startBots() {
  while (true) {
    try {
      const randomNum = Math.floor(Math.random() * 10000);
      const username = `${botname}${randomNum}`;

      await delay(500);
      const client = bedrock.createClient({
        host: hostm,
        port: portm,
        username: username,
        offline: true
      });

      client.on('spawn', () => {
        console.log(`Connected as ${client.username}`);
        if (message !== "") {
          sendMessages(client);
        }
      });

      client.on('text', ({ source_name, message }) => {
        console.log(`[${client.username}] ${source_name}: ${message}`);
      });

      client.on('error', (err) => {
        console.error(`Error for ${client.username}:`, err.message);
      });

      client.on('end', (reason) => {
        console.log(`${client.username} disconnected: ${reason}`);
      });
    } catch (err) {
      console.error('Bot creation error:', err.message);
    }
  }
}

function sendMessages(client) {
  setInterval(() => {
    if (!client.ended && typeof client.username === 'string') {
      console.log(`[Sending] ${message}`);

      try {
        client.write('text', {
          type: 'chat',
          needs_translation: false,
          source_name: client.username || 'Bot',
          message: message,
          xuid: '',
          platform_chat_id: ''
        });
      } catch (err) {
        console.error(`Message send error for ${client.username}:`, err.message);
      }
    }
  }, 600);
}

startBots();
