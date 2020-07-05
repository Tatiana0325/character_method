export class Character {
    constructor(name, type, attack, defence) {
        try {
            if ((name.length >= 2) && (name.length <= 10)) {
                this.name = name;
            }
        } catch(err) {
            throw new Error('длина строки должна находтися в диапазоне от 2 до 10 символов')
        };

        try{
            if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].indexOf(type) != -1) {
                this.type = type;
            }
        } catch{
            throw new Error('Такого типа нет')
        };

        this.health = 100;

        this.level = 1;

        this.attack = attack;

        this.defence = defence;
    }

    levelUp() {
        try{
            if(this.health > 0) {
                this.level++;
                this.health = 100;
                this.attack *= 1.2;
                this.defence *= 1.2;
           }
        } catch(e) {
            throw new Error('нельзя повысить левел умершего')
        }
    }

    damage(points) {
        try{
            if(this.health > 0) {
                this.health -= points * (1 - this.defence / 100)
           }
        } catch(e) {
            throw new Error('нельзя убить умершего')
        }
    }
}