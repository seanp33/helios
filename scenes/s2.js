const Scene = require('../lib/Scene')

class Scene2 extends Scene {

    constructor() {
        super(
            "# The Commands",
`Commands are issued at the prompt with a preceding period character. For example, the most important command is the **.help** command. Whenever you need help with in-game instructions use the **.help** command.

## The following commands are available:

1. **.help:** Game play instructions and command reference.
1. **.inventory:** List the items in your inventory.
1. **.status:** List status information of your player, their health, time and orientation.
1. **.examine** *<game object or character>*: Inspect something in the game. You'll use the **.examine** command frequently.
1. **.pull** *<game object>*: Used to interact with objects throughout the game.
1. **.push** *<game object>*: Used to interact with objects throughout the game.
1. **.turn** *<game object>*: Used to interact with objects throughout the game.
1. **.take** <game object>: Used to take an object into your posession. Objects that to take become 1. part of your inventory.
1. **.drop** *<game object>*: Used to dispose of an object currently in your posession. Objects that 1. you drop are removed from your inventory.
1. **.walk** *<direction>*: Walk North, North East, East, South East, South, South West, West, North 1. West. Direction can also be specified in abriviated form (N, NE, E, SE, S, SW, W, NW)
1. **.run** *<direction>*: Similar to .walk... just faster.
1. **.look** *<direction>*: Similar to .walk and .run... but just looking.
1. **.speak-to** *<character>*: Begin a dialog with a game character.
1. **.ask** *<character>* about *<subject>*: Ask a game character about something.
1. **.open** *<game object>*: Used to open something that closed.
1. **.close** *<game object>*: Used to close something that is open.
1. **.unlock** *<game object>*: Used to unlock something that is locked.
1. **.lock** *<game object>*: Used to lock something that is unlocked.
1. **.hack** *<game object>*: Used to hack a piece of technology.
1. **.touch** *<game object>*: Used to touch something in the game.`,
"s3"
        )
    }

    init(game) {
        super.init(game)
    }

    destroy() {
        super.destroy()
    }
}

module.exports = new Scene2()