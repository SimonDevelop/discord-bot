// Appel de la classe parent
const Command = require('./command')

// Classe de la commande de nétoyage des messages de channel texte
module.exports = class Roll extends Command {

  // Reconnaissance de la commande (début du message)
  static match (message) {
    return message.content.startsWith('!roll')
  }

  // Si reconnaissance, alors executer l'action
  static action (message) {

    // On récupère le chiffre paramètre (si il y en as un ou non) et on défini le nombre de messages à supprimer
    let args = message.content.split(' ')
    let limite = args[1] && !isNaN(args[1]) ? Number(args[1]) : 100

    if (limite <= 0) {
        limite = 1
    }

    // On répond à l'auteur du !roll avec un chiffre aléatoire
    message.reply(`Nombre aléatoire de 1 à ` + limite + `: ` + Math.floor((Math.random() * limite) + 1))
     .then(msg => console.log(`Réponse pour ${message.author}`))
     .catch(console.error)

  }

}
