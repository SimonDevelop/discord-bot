// Appel de la classe parent
const Command = require('./command')

// Classe de la commande de nétoyage des messages de channel texte
module.exports = class Help extends Command {

  // Reconnaissance de la commande (début du message)
  static match (message) {
    return message.content.startsWith('!help')
  }

  // Si reconnaissance, alors executer l'action
  static action (message) {

    // On répond à l'auteur du message (commandes publiques)
    message.reply(`Voici ma liste de commandes disponibles :\n\n`
      +`- Pour lancer une lecture de vidéo youtube -> "!yt https://www.youtube.com/watch?v=XXXXXXXXXXX"\n`
      +`- Pour stoper la lecture de vidéo youtube -> "!yt stop"\n`
      +`- Pour effectuer une recherche wikipedia -> "!wk ma recherche"\n`
      +`- Pour lancer la roulette -> "!roll"`)
     .then(msg => console.log(`Réponse pour ${message.author}`))
     .catch(console.error)

  }

}
