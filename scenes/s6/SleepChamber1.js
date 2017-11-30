const { tagMatch } = require('../../lib/Utils')
const { MESSAGE, ACTION, GOTO_NEXT_SCENE } = require('../../lib/Commands')
const { EXAMINE, TOUCH } = require('../../lib/Actions')
const SleepChamber1Porthole = require('./SleepChamber1Porthole')

const TAGS = ['sleep chamber 1', 'chamber 1', 'sleep chamber one', 'chamber one']

class SleepChamber1 {
    constructor(game) {
        this.game = game
        this.actionHandler = this.onAction.bind(this)
        this.game.on(ACTION, this.actionHandler)
        this.porthole = new SleepChamber1Porthole(game)
    }

    onAction(action) {
        let { type, tags } = action
        if (!tagMatch(tags, TAGS)) return
        switch (type) {
            case EXAMINE:
                this.game.apply(MESSAGE, `Chamber 1 appears to have sustained fire damage. The normal translucency of the the chamber's dome is distorted by a think layer of carbon that has adhered to the inside of the dome. The seam of the chamber's pearly white chassis and its glass dome are lined with long fingers of smoke stains - a sign of extreme thermal activity within the chamber. An unaffected area remains on the surface of the chared dome, forming a small window into whatever horror the chamber's passenger has sustained.`)
                break
            default:
                this.game.apply(MESSAGE, `You cannot ${type} Sleep Chamber 1`)
                break
        }
    }

    destroy() {
        this.porthole.destroy()
        this.game.removeListener(ACTION, this.actionHandler)
    }
}
module.exports = SleepChamber1
