const Scene = require('../../lib/Scene')
const SleepChamber = require('./SleepChamber')

class Scene5 extends Scene {
    constructor() {
        super(
            "H.O.P.E",
            `"Rya...Trice" says a slow, flatly toned and artificial voice. You hear the voice entering your sleep chamber through a small flat speaker pressed into the soft lining where your head has been resting for who knows how long. "Welcome. We have arrived at our destination.

                I am your ship's logic and command unit. You may call me H.O.P.E."`,
            "s6",
        )
    }

    init(game) {
        super.init(game)
        this.gobs.push(new SleepChamber(game))
    }

    destroy() {
        super.destroy()
    }
}

module.exports = new Scene5()