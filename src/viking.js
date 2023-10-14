// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.damage = damage;
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(name, health);

        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

// const viki = new Viking('Viki', 100, 100);
// console.log(viki.receiveDamage(90));

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);

        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);

        if (this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
    
}

// Function to choose the random person
function random(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    attack(defender, attacker) {
        let indexAttacker = random(defender);
        let indexDefender = random(attacker);

        let something = defender[indexDefender].receiveDamage(attacker[indexAttacker].strength);

        if (defender[indexDefender].health <= 0) {
            defender.splice(indexDefender,1);
        }
        return something;
    }

    vikingAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy);
    }

    saxonAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy);
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}




