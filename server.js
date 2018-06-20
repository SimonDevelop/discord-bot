// Initialisation de la librairie
const config = require("./config.json")
const Discord = require('discord.js')
const bot = new Discord.Client()

// Initialisation des classes
const Help = require('./commands/help')
const Roll = require('./commands/roll')
const Youtube = require('./commands/youtube')
const Wikipedia = require('./commands/wikipedia')
const Clear = require('./commands/clear')

// Code exécuté lors de la connection du bot
bot.on('ready', () => {
  console.log("Bot ready !")
})

// Message de bienvenue au nouveaux membre du serveur discord (MP)
bot.on('guildMemberAdd', (member) => {
  member.createDM().then((channel) => {
    return channel.send(`Bienvenue `+ member.displayName +` du serveur Discord `+ config.server +` !\n\n`
    +`Si vous voulez connaitre les divers commandes qui vous sont disponible pour communiquer avec moi, tapez la commande "!help".\n`
    +`J'espère vous être utile :)`)
  }).catch(console.error)
})

// Les divers commands actives
bot.on('message', (message) => {
  let commandUsed =
  Help.parse(message) ||
  Roll.parse(message) ||
  Youtube.parse(message) ||
  Wikipedia.parse(message) ||
  Clear.parse(message)
})

// Token du propriétaire du bot
bot.login(config.key)
