// Appel de la classe parent
const Command = require('./command')

// Appel de la librairie
const YoutubeStream = require('ytdl-core')

// Classe de la commande de lecture vidéo youtube (audio only)
module.exports = class Youtube extends Command {

  // Reconnaissance de la commande (début du message)
  static match (message) {
    return message.content.startsWith('!yt')
  }

  // Si reconnaissance, alors executer l'action
  static action (message) {

    // On récupère le paramètre
    let args = message.content.split(' ')

    // On récupère le channel vocal de l'auteur qui à taper la commande
    let voiceChannel = message.member.voiceChannel

    // Si l'auteur du message est dans un channel vocal, alors on lance
    if(typeof(voiceChannel) != "undefined"){

      // Connexion au channel vocal
      voiceChannel
        .join()
        .then((connection) => {

          // Si stop est demandé, alors je me déconnect
          if(args[1] === "stop"){
            connection.disconnect()

          // Sinon je me connect
          }else{

            // Objet stream avec la vidéo youtube (l'url donnée) en paramètre
            let stream = YoutubeStream(args[1])

            // Si lecture echoue, alors je le dit
            stream.on('error', () => {
              message.reply("Je n'ai pas réussi à lire cette vidéo :(")
              connection.disconnect()
            })

            // Si lecture, alors je le li la vidéo et je me déconnect à la fin
            connection
              .playStream(stream)
              .on('end', () => {
                connection.disconnect()
              })

          }
        }).catch(console.error);

    // Sinon on lui envoie un message comme quoi il n'est dans aucun channel vocal
    }else{
      message.reply(`Vous n'êtes dans aucun channel vocal.`)
       .then(msg => console.log(`Réponse pour ${message.author}`))
       .catch(console.error);
    }

  }

}
