const Scene = require('../../lib/Scene')
const SleepChamber1 = require('./SleepChamber1')
const Hope = require('./Hope')
class Scene6 extends Scene {
    constructor() {
        super(
            "# The Life Boat",
            `Painfully, you rise from your life-preserving sarcophagus. You are now standing in the dimly-lit and terribly cold "Life Boat", surrounded by 7 other cryogenic sleep chambers.
            Your chamber is emblazoned with a large number 8 on its pearly-white shell. The other sleep chambers have all appeared to sustain some kind of damage. **Chamber 1** seems to be in the worst condition. **Chamber** 7 is relatively undamaged, with the exception of its flickering interior illumination.

            "Good, you have manged to exit your sleep chamber. Your cognitive systems must be functioning well.", **H.O.P.E** says.`,
            "s7"
        )
    }

    init(game) {
        super.init(game)
        this.gobs = [new Hope(game), new SleepChamber1(game)]
    }

    destroy() {
        super.destroy()
    }
}

module.exports = new Scene6()