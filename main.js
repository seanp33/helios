const repl = require('repl')
const Game = require('./lib/Game')
const Player = require('./lib/Player')
const { INVENTORY, EXAMINE, TAKE, DROP, PUSH, PULL, TURN, WALK, RUN, LOOK, CLIMB, DESCEND, OPEN, CLOSE, UNLOCK, LOCK, HACK, TOUCH, SPEAKTO } = require('./lib/Actions')
const { ACTION, MESSAGE, SCENE_ACTIVATED, GOTO_NEXT_SCENE } = require('./lib/Commands')

let game = new Game()
let player = new Player()

const evaluator = (cmd, context, filename, callback) => {
    replServer.setPrompt(getPrompt())
    if (autoNext()) {
        game.loadScene(game.scene.next)
        callback(null)
    } else {
        callback(null, '\nPlease reflect on your current situation...\n')
    }
}

const writer = (output) => {
    return output
}

const autoNext = () => {
    if (game.scene && game.scene.gobs) {
        return game.scene.gobs.length === 0
    } else {
        return false
    }

}

const getPrompt = () => {
    if (autoNext()) {
        return '> [ENTER]'
    } else {
        return '> '
    }
}

const replServer = repl.start({ prompt: getPrompt(), eval: evaluator, writer: writer })

const readyPrompt = () => {
    replServer.setPrompt(getPrompt())
    replServer.displayPrompt()
    replServer.clearBufferedCommand()
}

replServer.defineCommand('help', {
    help: 'Game play instructions and command reference.',
    action(object) {
        this.clearBufferedCommand()
        console.log(`This will display the help`)
        readyPrompt()
    }
})

replServer.defineCommand('examine', {
    help: 'Examine an object within your environment.',
    action(object) {
        game.apply(ACTION, { type: EXAMINE, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('inventory', {
    help: 'List the items in your possession.',
    action(object) {
        if (player.inventory.items.length === 0) {
            console.log('Your inventory is empty')
        } else {
            console.log('This will list the items in your inventory')
        }
        readyPrompt()
    }
})

replServer.defineCommand('status', {
    help: 'List status information of your player, their health, time and orientation.',
    action(object) {
        console.log(`This will list your status`)
        readyPrompt()
    }
})

replServer.defineCommand('pull', {
    help: 'Used to interact with objects throughout the game.',
    action(object) {
        game.apply(ACTION, { type: PULL, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('push', {
    help: 'Used to interact with objects throughout the game.',
    action(object) {
        game.apply(ACTION, { type: PUSH, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('turn', {
    help: 'Used to interact with objects throughout the game.',
    action(object) {
        game.apply(ACTION, { type: TURN, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('take', {
    help: 'Used to interact with objects throughout the game.',
    action(object) {
        game.apply(ACTION, { type: TAKE, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('drop', {
    help: 'Used to interact with objects throughout the game.',
    action(object) {
        game.apply(ACTION, { type: DROP, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('walk', {
    help: 'Used to walk in a direction',
    action(direction) {
        game.apply(ACTION, { type: WALK, tags: [direction] })
        readyPrompt()
    }
})

replServer.defineCommand('run', {
    help: 'Used to run in a direction',
    action(direction) {
        game.apply(ACTION, { type: RUN, tags: [direction] })
        readyPrompt()
    }
})

replServer.defineCommand('look', {
    help: 'Used to look in a direction',
    action(direction) {
        game.apply(ACTION, { type: LOOK, tags: [direction] })
        readyPrompt()
    }
})

replServer.defineCommand('climb', {
    help: 'Used to climb up something',
    action(direction) {
        game.apply(ACTION, { type: CLIMB, tags: [direction] })
        readyPrompt()
    }
})

replServer.defineCommand('descend', {
    help: 'Used to descend down something',
    action(direction) {
        game.apply(ACTION, { type: DESCEND, tags: [direction] })
        readyPrompt()
    }
})

replServer.defineCommand('speak-to', {
    help: 'Used to speak to a character',
    action(object) {
        game.apply(ACTION, { type: SPEAKTO, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('open', {
    help: 'Used to open a thing',
    action(object) {
        game.apply(ACTION, { type: OPEN, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('close', {
    help: 'Used to close a thing',
    action(object) {
        game.apply(ACTION, { type: CLOSE, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('unlock', {
    help: 'Used to unlock a thing',
    action(object) {
        game.apply(ACTION, { type: UNLOCK, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('lock', {
    help: 'Used to lock a thing',
    action(object) {
        game.apply(ACTION, { type: LOCK, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('hack', {
    help: 'Used to hack a thing',
    action(object) {
        game.apply(ACTION, { type: HACK, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('touch', {
    help: 'Used to touch a thing',
    action(object) {
        game.apply(ACTION, { type: TOUCH, tags: [object] })
        readyPrompt()
    }
})

replServer.defineCommand('scene', {
    help: 'Used to jump to a scene',
    action(sceneId) {
        game.loadScene(sceneId)
        readyPrompt()
    }
})

game.on(SCENE_ACTIVATED, () => {
    readyPrompt()
})

game.on(GOTO_NEXT_SCENE, () => {
    game.loadScene(game.scene.next)
})

game.on(MESSAGE, (message) => {
    console.log(message)
})

game.loadScene('s0')
