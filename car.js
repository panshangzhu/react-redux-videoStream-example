class Car {
    soundEffect = undefined

    constructor() {
        this.soundEffect = 'Tututu...'
    }

    setDriveSoundEffect(newSound) {
        this.soundEffect = newSound
    }

    drive = () => {
        console.log('Driving, with sound effect:' + this.soundEffect)
    }
}

let bmw = new Car()
const funDrive = bmw.drive
funDrive()
