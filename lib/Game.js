const { EventEmitter } = require('events')
const { MESSAGE, SCENE_ACTIVATED } = require('./Events')

class Game extends EventEmitter {
    constructor() {
        super()
        this.scene = null
    }

    apply(event, action) {
        this.emit(event, action)
    }

    loadScene(sceneId) {
        let loadedScene = require(`../scenes/${sceneId}`)
        if (loadedScene) {
            this.scene = loadedScene
            if (this.scene.gobs) {
                this.scene.gobs.forEach((Gob) => {
                    new Gob(this)
                })
            }
            this.emit(MESSAGE, `\n${this.scene.title.toUpperCase()}`)
            this.emit(MESSAGE, `\n${this.scene.text}\n`)
        } else {
            console.error(`Unable to load scene ${sceneId}`)
        }
        this.emit(SCENE_ACTIVATED)
    }
}

module.exports = Game