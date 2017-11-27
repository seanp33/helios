const {EventEmitter} = require('events')

class Terminal extends EventEmitter {
    constructor(game) {
        super()
        this.game = game
    }
}

exports.Terminal = Terminal