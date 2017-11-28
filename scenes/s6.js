const Scene = require('../lib/Scene')

class Scene6 extends Scene {
    constructor() {
        super(
            "The Life Boat",
            `Painfully, you rise from your life-preserving sarcophagus. You are now standing in the dimly-lit and terribly cold "Life Boat", surrounded by 7 other cryogenic sleep chambers.
            Your chamber is emblazoned with a large number 8 on its pearly-white shell.

            "Good, you have manged to exit your sleep chamber. Your cognitive systems must functioning well. I hope chamber number 8 was comfortable.", H.O.P.E says.`,
            "s7"
        )
    }

    init(game){
        super.init(game)
    }

    destroy(){
        super.destroy()
    }
}

module.exports = new Scene6()