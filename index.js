var currentUser = "Ian"
//var welcomeMessage = "Welcome to Flatbook, " + currentUser + "!"
var welcomeMessage = `Welcome to Flatbook, ${currentUser}!`

var excitedWelcomeMessage = welcomeMessage.toUpperCase()

//var shortGreeting = `Welcome, ${currentUser[0]}!`
var shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`
