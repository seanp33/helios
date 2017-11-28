class Scene {
    constructor(title, text, next, gobs = []) {
        this.title = title
        this.text = text
        this.next = next
        this.gobs = gobs
    }

    init(game){
        this.game = game
    }

    destroy() {
        this.gobs.forEach((gob) => {
            gob.destroy()
        })
        delete this.gobs
    }

}

module.exports = Scene