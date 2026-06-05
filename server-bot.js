const mineflayer = require('./lib/index.js'); // Points directly to the repo's internal source
const express = require('express');
const app = express();

// Web server for Render's health checks
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Mineflayer Core Bot is Awake!'));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// Initialize the bot using environment variables
const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT) || 25565,
  username: process.env.MC_USERNAME || 'RenderBot',
  auth: process.env.MC_AUTH || 'offline'
});

bot.on('spawn', () => console.log('Core Git Bot spawned successfully!'));
bot.on('error', console.error);
bot.on('kicked', console.log);
