const Scene = require('../lib/Scene')

class Scene4 extends Scene {

    constructor() {
        super(
            "The Cryo-Chamber",
            "Your consciences slowly materializes. Shooting pain courses through your swollen hands and feet. You try to blink and cannot. Your eyes are glued shut by an ancient layer of mucus. You rub your eyes until a piercing white light floods your vision. You are tired, disoriented...confused. You are, however, aware of who you are, where you are, and what you are doing here. You are Rya Trice, ONEHOPE’s Communications Engineer, and one of twenty Helions who have inherieted the burdon of playing savior to all of the people of your home planet.",
            "s5"
        )
    }

    init(game) {
        super.init(game)
    }

    destroy() {
        super.destroy()
    }
}

module.exports = new Scene4()