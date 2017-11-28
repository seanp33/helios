const { EventEmitter } = require('events')
const { tagMatch } = require('../../lib/Utils')
const { MESSAGE, ACTION, GOTO_NEXT_SCENE } = require('../../lib/Commands')
const { EXAMINE, PULL, PUSH, UNLOCK } = require('../../lib/Actions')

const TAGS = ['release handle', 'release', 'handle']
const PULLED = 'PULLED'

class Handle extends EventEmitter {
    constructor(game) {
        super()
        this.game = game
        this.actionHandler = this.onAction.bind(this)
        this.game.on(ACTION, this.actionHandler)
    }

    onAction(action) {
        let { type, tags } = action
        if (!tagMatch(tags, TAGS)) return
        switch (type) {
            case EXAMINE:
                this.game.apply(MESSAGE, `This appears to be a pull-handle for opening the overhead dome of Sleep Chamber.`)
                break
            case PULL:
                this.game.apply(MESSAGE, `The handle pulls easily in your hand. You hear a series of confirming beeps, as stale, preasurized air rushes past you. The glass dome above comes to life, sliding out of view.`)
                this.game.apply(GOTO_NEXT_SCENE)
                break
            case PUSH:
                this.game.apply(MESSAGE, `You cannot open your Sleep Chamber is that way.`)
                break
            case UNLOCK:
                this.game.apply(MESSAGE, `You cannot unlock your Sleep Chamber in that way.`)
                break
            default:
                this.game.apply(MESSAGE, `You cannot ${type} the Sleep Chamber`)
                break
        }
    }

    destroy() {
        this.game.removeListener(ACTION, this.actionHandler)
        this.removeAllListeners()
    }
}

exports.Handle = Handle