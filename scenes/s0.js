const Scene = require('../lib/Scene')

class Scene0 extends Scene {

    constructor() {
        super(
            "The Lost Children of Helios",
            `The Lost Children of Helios is a science fiction tale which takes place in a future where man has journeyed to the stars in search of a new home as his home world of Helios lies in waste.`,
            "s1"
        )
    }

    init(game) {
        super.init(game)
    }

    destroy() {
        super.destroy()
    }
}

module.exports = new Scene0()