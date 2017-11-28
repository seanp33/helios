const { EventEmitter } = require('events')
const { MESSAGE, SCENE_ACTIVATED } = require('./Commands')

class Game extends EventEmitter {
    constructor() {
        super()
        this.scene = null
    }

    apply(event, payload) {
        this.emit(event, payload)
    }

    destroyCurrentScene() {
        if (this.scene) {
            this.scene.destroy()
            delete this.scene
        }
    }

    loadScene(sceneId) {
        this.destroyCurrentScene()
        let loadedScene = require(`../scenes/${sceneId}`)
        if (loadedScene) {
            this.scene = loadedScene
            this.scene.init(this)
            this.scene = loadedScene
            this.apply(MESSAGE, `\n${this.scene.title.toUpperCase()}`)
            this.apply(MESSAGE, `\n${this.scene.text}\n`)
        } else {
            console.error(`Unable to load scene ${sceneId}`)
        }
        this.apply(SCENE_ACTIVATED)
    }
}

module.exports = Game