const { EventEmitter } = require('events')
const { Handle, PULLED } = require('./Handle')
const { Terminal } = require('./Terminal')
const { MESSAGE, ACTION } = require('../../lib/Events')
const { EXAMINE, UNLOCK, OPEN } = require('../../lib/Actions')
const { tagMatch } = require('../../lib/Utils')

const TAGS = ['cryogenic sleep chamber', 'sleep chamber', 'chamber', 'pod', 'bed']

class SleepChamber extends EventEmitter {

    constructor(game) {
        super()
        this.handle = new Handle(game)
        this.terminal = new Terminal(game)
        this.game = game
        this.game.on(ACTION, this.onAction.bind(this))
        this.opened = false
        this.handle.on(PULLED, () => {
            this.opened = true
        })
    }

    onAction(action) {
        let { type, tags } = action
        if (!tagMatch(tags, TAGS)) return
        switch (type) {
            case EXAMINE:
                this.game.apply(MESSAGE, `You are lying awake in a standard issue cryogenic sleep chamber, approximatley 8 feet long and 3 feet wide. The bedding is comprised of a soft white material that forms closey to your body. The chamber is sealed above you by a clear glass dome. The chamber surrounds your naked body in an envelope of artificial light and life support. There is a handle to your right, labeled "RELEASE", and a small computer terminal to your left.`)
                if (this.opened) {
                    this.game.apply(MESSAGE, `Your Sleep Chamber has bene opened. You should exit.`)
                }
                break
            case OPEN:
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
        this.handle.destroy()
        this.terminal.destroy()
        this.game.removeListener(ACTION, this.onAction.bind(this))
    }
}

module.exports = SleepChamber