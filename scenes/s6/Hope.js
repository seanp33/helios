const { tagMatch, getResponseForSubject } = require('../../lib/Utils')
const { MESSAGE, ACTION, GOTO_NEXT_SCENE } = require('../../lib/Commands')
const { ASK, SPEAKTO } = require('../../lib/Actions')

const TAGS = ['h.o.p.e', 'hope']

class Hope {
    constructor(game) {
        this.game = game
        this.actionHandler = this.onAction.bind(this)
        this.game.on(ACTION, this.actionHandler)
    }

    onAction(action) {
        let { type, tags, subject } = action
        if (!tagMatch(tags, TAGS)) return
        switch (type) {
            case ASK:
                console.log(subject)
                if (tagMatch([subject], ['sleep chamber 1', 'chamber 1', 'sleep chamber one','chamber one'])) {
                    this.game.apply(MESSAGE, `According to my diagnostic reports, excess levels of radiation were detected in the  area of Chamber 1's secondary cooling unit. Subsequent data within the report is fragmented, but based on the information available, I've concluded that the fire was the direct result of this radiation leak. Captain Quilliam Yu did not survive.`)
                } else if (tagMatch([subject], ['captain quilliam yu', 'quilliam yu', 'the captain', 'captain'])) {
                    this.game.apply(MESSAGE, `Quilliam Yu, Captain, Age 56. Born 3252:0 Nothern Zassbar, Helios. Captain Yu joined the Helion United Exploration Agency on 3288:6. At the time of his death, 3308:9 he had risen to level 9 and was widely respected as an expert tactition and war strategiest. Quilliam Yu has been memorialized within my sacred archives and will be morned until my death, when that time comes, if ever.`)
                } else {
                    this.game.apply(MESSAGE, `H.O.P.E >> I'm sorry, I am not presently aware of "${subject}". Perhaps you should issue a .query instead.`)
                }
                break
            default:
                this.game.apply(MESSAGE, `You cannot ${type} the Gob`)
                break
        }
    }

    destroy() {
        this.game.removeListener(ACTION, this.actionHandler)
    }
}
module.exports = Hope
