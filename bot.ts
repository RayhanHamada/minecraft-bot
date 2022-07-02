import minecraftData from 'minecraft-data';
import { createBot } from 'mineflayer';
import { goals, Movements, pathfinder } from 'mineflayer-pathfinder';

const bot = createBot({
  username: 'zezewow12',
  host: 'play.ham5teak.xyz',
  // port: 49411,
  version: '1.18.2',
});

const md = minecraftData(bot.version);

bot.loadPlugin(pathfinder);

bot.on('spawn', () => {
  bot.chat('Hello');
});

const defaultMove = new Movements(bot, md);

bot.on('chat', function (name, msg) {
  const target = bot.players[name];
  const p = target.entity;
  if (msg === 'here') {
    bot.chat('OK');

    bot.pathfinder.setMovements(defaultMove);
    bot.pathfinder.setGoal(
      new goals.GoalNearXZ(p.position.x, p.position.z, 4),
      true
    );
  } else if (msg === 'tp2me') {
    bot.chat(`/tp ${bot.username} ${p.position.x + 3} ~ ${p.position.z + 3}`);
  } else if (msg === 'guk') {
    bot.look(90, 20);
    bot.chat('/login 1234 1234');
  } else if (msg === '') {
  }
});
