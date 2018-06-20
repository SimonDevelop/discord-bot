// Appel de la classe parent
const Command = require('./command')

// Appel de la librairie
const wiki = require('wikijs').default

// Classe de la commande de recherche wikipedia
module.exports = class Wikipedia extends Command {

  // Reconnaissance de la commande (début du message)
  static match (message) {
    return message.content.startsWith('!wk')
  }

  // Si reconnaissance, alors executer l'action
  static action (message) {
    // On récupère le paramètre
    let args = message.content.split(' ')

    // On vérifie si le paramètre (ce qu'il faut rechercher) existe
    if (typeof(args[1]) != "undefined") {

      let search = "";
      for (let i = 1; i < args.length; i++) {
        search = search + " " + args[i]
      }

      // Url api de wikipedia fr
      let wikiUrl = "https://fr.wikipedia.org/w/api.php"

      // Recherche wikipedia
      wiki({ apiUrl: wikiUrl })
        .search(search)
        .then(data => {
          wiki({ apiUrl: wikiUrl })
            .page(data.results[0])
            .then(page => {
              page.summary().then(summary => {
                let sumText = summary.toString().split('\n');
      					let continuation = () => {
      						let paragraph = sumText.shift();
                  if (paragraph) {
        						message.channel.send(paragraph,continuation)
        					}
      					};
      					continuation()
              })
            })
        })
        .catch(error => {
          message.channel.send("La recherche de \""+search+"\" sur wikipedia n'as pas abouti.")
          consolg.log(error)
        })

    }

  }

}
