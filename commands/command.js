// Classe parent des commandes
module.exports = class Command {

  // Réception des message pour les analisers
  static parse (message) {
    if (this.match(message)) {
      this.action(message)
      return true
    }
    return false
  }

  // Reconnaissance des commandes (début des messages)
  static match (message) {
    return false
  }

  // Si reconnaissance, alors executer l'action
  static action (message) {
  }

}
