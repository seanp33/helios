const { tagMatch } = require('../../lib/Utils')
const { MESSAGE, ACTION, GOTO_NEXT_SCENE } = require('../../lib/Commands')
const { EXAMINE } = require('../../lib/Actions')

const TAGS = ['sleep chamber porthole 1', 'chamber 1 porthole', 'porthole', 'window']

class SleepChamber1Porthol {
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
                this.game.apply(MESSAGE, `You peer into Sleep Chamber 1 and see the partial remains of some passenger - a collapsed human skeleton surrounded by a mound of ash. You wonder to yourself if H.O.P.E has additional information on each chamber and the passengers they they contain.`)
                break
            default:
                this.game.apply(MESSAGE, `You cannot ${type} the Porthole`)
                break
        }
    }

    destroy() {
        this.game.removeListener(ACTION, this.actionHandler)
    }
}
module.exports = SleepChamber1Porthol
