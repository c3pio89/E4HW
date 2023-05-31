class Device {
    constructor(name, power) {
        this.name = name,
        this.power = power,
        this.plugUnplug = 'unplugged',
        this.consumed = 0
        }

    plugIn = function() {
        this.plugUnplug = 'plugged',
        this.consumed += 1
    }
    consumedPower = function() {
      console.log(`Потребленная энергия ${this.consumed * this.power} кВт`)
    }
    plugOut = function() {
        this.plugUnplug = 'unplugged'
    }
    getInfo = function() {
        console.log(`${this.name } потребляет ${this.power} кВт`)
    }
}
class Computer extends Device {
    constructor(frequency, power){
        super('Samsung', power);
        this.frequency = frequency
    }
}


class Lamp extends Device {
    constructor(model, lumen, power) {
        super('Lamp', power);
        this.model = model,
        this.lumen = lumen
    }
    getInfo = function() {
        console.log(`Лампа модели ${this.model}, световой поток - ${this.lumen} лм`)
    }
}

const comp = new Computer(frequency=1000, power=110)
const lamp = new Lamp(model='RGB', lumen=10000, power=20)

comp.plugIn()
comp.plugIn()
comp.consumedPower()
comp.getInfo()
lamp.getInfo()