module.exports = {
    id: "s2",
    title: "The Commands",
    text: `Commands are issued at the prompt with preceeding period character. For example, the most important command is the ".help" command. When ever you need help with in-game instructions us the ".help" command.

    The following commands are available:

    .help: Game play instructions and command reference.

    .inventory: List the items in your inventory.

    .status: List status information of your player, their health, time and orientation.

    .examine <game object or character>: Inspect something in the game. You'll use the .examine command frequently.

    .pull <game object>: Used to interact with objects throughout the game.

    .push <game object>: Used to interact with objects throughout the game.

    .turn <game object>: Used to interact with objects throughout the game.

    .take <game object>: Used to take an object into your posession. Objects that to take become part of your inventory.

    .drop <game object>: Used to dispose of an object currently in your posession. Objects that you drop are removed from your inventory.

    .walk <direction>: Walk North, North East, East, South East, South, South West, West, North West. Direction can also be specified in abriviated form (N, NE, E, SE, S, SW, W, NW)

    .run <direction>: Similar to .walk... just faster.

    .look <direction>: Similar to .walk and .run... but just looking.

    .speak-to <character>: Begin a dialog with a game character.

    .open <game object>: Used to open something that closed.

    .close <game object>: Used to close something that is open.

    .unlock <game object>: Used to unlock something that is locked.

    .lock <game object>: Used to lock something that is unlocked.

    .hack <game object>: Used to hack a piece of technology.

    .feel <game object>: Used to feel something in the game.
    `,
    gobs: [],
    next: "s3"
}