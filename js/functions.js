const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 11, 
        defense: 4
    }
}

const createLitlleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 60,
        maxLife: 60,
        attack: 13,
        defense: 4
    }
}
const createMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Monster',
        life: 150,
        maxLife: 150,
        attack: 6,
        defense: 14
    }
}

const stage = {
    fight1: null,
    fight2: null,
    fight1El: null,
    fight2El: null,

    start(fight1, fight2, fight1El, fight2El) {
        this.fight1 = fight1
        this.fight2 = fight2
        this. fight1El = fight1El
        this.fight2El = fight2El

        this.fight1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fight1, this.fight2))
        this.fight2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fight2, this.fight1))

        this.uptade()
    },

    uptade() {
        this.fight1El.querySelector('.name').innerHTML = `${this.fight1.name} - ${this.fight1.life.toFixed(1)}HP`
        let f1Pct = (this.fight1.life / this.fight1.maxLife) * 100
        this.fight1El.querySelector('.bar').style.width = `${f1Pct}%`

        this.fight2El.querySelector('.name').innerHTML = `${this.fight2.name} - ${this.fight2.life.toFixed(1)}HP`
        let f2Pct = (this.fight2.life / this.fight2.maxLife) * 100
        this.fight2El.querySelector('.bar').style.width = `${f2Pct}%`

    },

    doAttack(attacking, attacked) {
        console.log(`${attacking.name} atacou ${attacked.name}`)

        this.uptade()
    }
}