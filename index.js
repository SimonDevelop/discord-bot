// Initialisation de la librairie
const api = require("./api.json")
const Discord = require('discord.js')
const bot = new Discord.Client()


// Initialisation des classes
const Help = require('./commands/help')
const Youtube = require('./commands/youtube')
const Clear = require('./commands/clear')


// Code exécuté lors de la connection du bot
bot.on('ready', () => {
  bot.user.setGame("Développer").catch(console.error)
  console.log("Je suis connecté !")
})


// Message de bienvenue au nouveaux membre du serveur discord (MP)
bot.on('guildMemberAdd', (member) => {
  member.createDM().then((channel) => {
    return channel.send(`Bienvenue `+ member.displayName +` sur le Discord de (Votre serveur)) !\n\n`
    +`Si vous voulez connaitre les divers commandes qui vous sont disponible pour communiquer avec moi, tapez la commande "!help".\n`
    +`Mon développeur est "(Vous)", il espére que je puisse vous être utile :)`)
  }).catch(console.error)
})


// Les divers commands actives
bot.on('message', (message) => {
  let commandUsed =
  Help.parse(message) ||
  Youtube.parse(message) ||
  Clear.parse(message)
})


// Token du propriétaire du bot
bot.login(api.key)
