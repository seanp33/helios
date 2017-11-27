const { EventEmitter } = require('events')
const Inventory = require('./Inventory')

class Player extends EventEmitter {

    constructor() {
        super()
        this.health = 100
        this.luck = 100
        this.inventory = new Inventory()
    }
}

module.exports = Player