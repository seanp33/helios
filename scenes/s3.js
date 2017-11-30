const Scene = require('../lib/Scene')

class Scene3 extends Scene {
    constructor() {
        super(
            "# Thanks",
            `Thank you for taking the time to play The Lost Children of Helios. I hope you enjoy it. Let the adventure begin!`,
            "s4"
        )
    }

    init(game) {
        super.init(game)
    }

    destroy() {
        super.destroy()
    }
}

module.exports = new Scene3(
)