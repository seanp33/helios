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
        }
    }

    loadScene(sceneId) {
        this.destroyCurrentScene()
        try {
            let loadedScene = require(`../scenes/${sceneId}`)
            if (loadedScene) {
                this.scene = loadedScene
                this.scene.init(this)
                this.scene = loadedScene
                this.apply(MESSAGE, `${this.scene.title.toUpperCase()}`)
                this.apply(MESSAGE, `${this.scene.text}`)
            } else {
                console.error(`Unable to load scene ${sceneId}`)
            }
            this.apply(SCENE_ACTIVATED)
        } catch (loadError) {
            console.error(`Unable to load scene ${sceneId}`)
            console.error(loadError)
        }

    }
}

module.exports = Game