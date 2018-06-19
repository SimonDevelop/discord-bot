// Appel de la classe parent
const Command = require('./command')

// Classe de la commande de nétoyage des messages de channel texte
module.exports = class Clear extends Command {

  // Reconnaissance de la commande (début du message)
  static match (message) {
    return message.content.startsWith('!clear')
  }

  // Si reconnaissance, alors executer l'action
  static action (message) {

    // On récupère le chiffre paramètre (si il y en as un ou non) et on défini le nombre de messages à supprimer
    let args = message.content.split(' ')
    let messagesToClean = args[1] && !isNaN(args[1]) ? Number(args[1]) : 100;

    // Effacement des messages du channel texte
    if (message.channel.permissionsFor(message.member).hasPermission("MANAGE_MESSAGES")) {
      message.channel.fetchMessages({
        limit: messagesToClean
      }).then(messages => {
          messages.forEach(message => {
            return message.delete();
          })
      })
    } else {
      message.reply(`Vous avez pas les droits nécessaires pour lancer cette commande.`)
       .then(msg => console.log(`Réponse pour ${message.author}`))
       .catch(console.error);
    }
  }

}
