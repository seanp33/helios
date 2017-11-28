const { tagMatch, getResponseForSubject } = require('../../lib/Utils')
const { MESSAGE, ACTION, GOTO_NEXT_SCENE } = require('../../lib/Commands')
const { EXAMINE, HACK, SPEAKTO, ASK } = require('../../lib/Actions')

const TAGS = ['H.O.P.E', 'hope']

class Hope {
    constructor(game) {
        this.game = game
        this.actionHandler = this.onAction.bind(this)
        this.game.on(ACTION, this.actionHandler)
    }

    onAsk(subject) {
        let response = getResponseForSubject(subject)
        if (response) {
            this.game.apply(MESSAGE, `H.O.P.E >> ${response}`)
        } else {
            this.game.apply(MESSAGE, `H.O.P.E >> I'm sorry, I am not presently aware of "${subject}". Perhaps you should issue a .query instead.`)
        }
    }

    onAction(action) {
        let { type, tags, subject } = action
        if (!tagMatch(tags, TAGS)) return
        switch (type) {
            case SPEAKTO:
                this.game.apply(MESSAGE, `"H.O.P.E >> Hello Rya Trice. I am your HUX Omnipresent Programmable Entity, and I am here to serve you. I am available for questions at any time, though, I may not have the answer immediately. This latency is due to the phsical nature of my logic circits and the laws of space-time. If you would like me to process your query, and return an answer at a later time, please issue it using the .query <subject> command. If I know the answer at the time of query I will return it immediately, otherwise I will schedule your query and process it as soon as possible."`)
                break
            case ASK:
                this.onAsk(subject)
                break
            default:
                this.game.apply(MESSAGE, `You cannot ${type}, H.O.P.E`)
                break
        }
    }

    destroy() {
        this.game.removeListener(ACTION, this.actionHandler)
    }
}

module.exports = Hope