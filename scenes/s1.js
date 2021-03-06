const Scene = require('../lib/Scene')

class Scene1 extends Scene {
    constructor() {
        super(
            "# How To Play",
            `The Lost Children of Helios is a game of Interactive Fiction. You are now looking at the "Command Prompt", or just the "Prompt" for short. You'll use the Prompt to issue commands throughout the game. Whenever you see the **>** prompt, know that the game is waiting for you to issue a command. In cases where you simply need to press the ENTER key to advance the story, the prompt will be shown as **> [ENTER]**, as it does below. We'll learn more about commands in a moment.`,
            "s2"
        )
    }

    init(game){
        super.init(game)
    }

    destroy(){
        super.destroy()
    }
}

module.exports = new Scene1()