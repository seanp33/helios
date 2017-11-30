const { tagMatch } = require('../../lib/Utils')
const { MESSAGE, ACTION, GOTO_NEXT_SCENE } = require('../../lib/Commands')
const { EXAMINE, TOUCH, PUSH, HACK } = require('../../lib/Actions')

const TAGS = ['touch screen computer terminal', 'touch screen', 'computer terminal', 'terminal', 'flight computer', 'computer', 'screen']

class Terminal {
    constructor(game) {
        this.game = game
        this.actionHandler = this.onAction.bind(this)
        this.game.on(ACTION, this.actionHandler)
    }

    onAction(action) {
        let { type, tags } = action
        if (!tagMatch(tags, TAGS)) return
        switch (type) {
            case EXAMINE:
                this.game.apply(MESSAGE, `The **terminal** appears to be a standard issue touch screen flight computer. The screen is dark with the exception of the following readout at the top-left.
                "Chamber No. : 8"
                "Passenger : Rya Trice",
                "Rank : Communications Engineer, 2nd Class"
                "Age : 27",
                "Gender : Female"
                "Restoration : 96%"
                `)
                break;
            case HACK:
                this.game.apply(MESSAGE, `You lack the necessary skills to hack a **flight computer** at this time.`)
                break
            case TOUCH:
            case PUSH:
                // TODO: what do we want to do here - have threads for each menu? To support... backstory?
                this.game.apply(MESSAGE, `The terminal's dark screen smoothly transitions to white, showing a readout of your vitals and three selections across the top of the display.

| *VITALS  |  QUERY  |  OPEN
                `)
                break;
            default:
                this.game.apply(MESSAGE, `You cannot ${type} the Terminal`)
                break
        }
    }

    destroy() {
        this.game.removeListener(ACTION, this.actionHandler)
    }
}

exports.Terminal = Terminal