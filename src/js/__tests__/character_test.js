import {Character} from '../character';

//Прверка имени
test('Имя = ""', () => {
    expect(() => {
        new Character('', 'Bowman', 10, 10);
    }).toThrow();
})

test('Имя состоит из одной буквы', () => {
    expect(() => {
        new Character('a', 'Bowman', 10, 10);
    }).toThrow();
})

test('Имя состоит из 2х букв', () => {
    expect(new Character('an', 'Bowman', 10, 10)).toHaveProperty('name', 'an');
})

test('Имя состоит больше 2х букв', () => {
    expect(new Character('anna', 'Bowman', 10, 10)).toHaveProperty('name', 'anna');
})

test('Имя состоит из 10 букв', () => {
    expect(new Character('annaBanana', 'Bowman', 10, 10)).toHaveProperty('name', 'annaBanana');
})

test('Имя состоит больше 10 букв', () => {
    expect(() => {
        new Character('anna Banana Bahana', 'Bowman', 10, 10);
    }).toThrow();
})

//Проверка типа
test('Тип не соответсвует массиву типов', () => {
    expect(() => {
        new Character('name', 'Abvgdyka', 10, 10);
    }).toThrow();
})

test('Тип = Bowman', () => {
    expect(new Character('name', 'Bowman', 10, 10)).toHaveProperty('type', 'Bowman');
})

test('Тип = Daemon', () => {
    expect(new Character('name', 'Daemon', 10, 10)).toHaveProperty('type', 'Daemon');
})

test('Тип = Magician', () => {
    expect(new Character('name', 'Magician', 10, 10)).toHaveProperty('type', 'Magician');
})

test('Тип = Swordsman', () => {
    expect(new Character('name', 'Swordsman', 10, 10)).toHaveProperty('type', 'Swordsman');
})

test('Тип = Undead', () => {
    expect(new Character('name', 'Undead', 10, 10)).toHaveProperty('type', 'Undead');
})

test('Тип = Zombie', () => {
    expect(new Character('name', 'Zombie', 10, 10)).toHaveProperty('type', 'Zombie');
})

//Проверка метода levelUp
test('Персонаж мертв', () => {
    const healthZero = new Character('name', 'Bowman', 10, 10);
    healthZero.health = 0;
    
    expect(() => {
        healthZero.levelUp();
    }).toThrow();
});

test('У персонажа 1 жизнь', () => {
    const healthOne = new Character('name', 'Bowman', 10, 10);
    healthOne.health = 1;
    healthOne.levelUp()

    expect(healthOne).toEqual({
        'name': 'name',
        'type': 'Bowman',
        'health': 100,
        'level': 2,
        'attack': 12,
        'defence': 12
    })
})

test('У персонажа 100 жизней', () => {
    const healthOneHundred = new Character('name', 'Bowman', 10, 10);
    healthOneHundred.health = 100;
    healthOneHundred.levelUp();

    expect(healthOneHundred).toEqual({
        'name': 'name',
        'type': 'Bowman',
        'health': 100,
        'level': 2,
        'attack': 12,
        'defence': 12
    })
})

//Проверка метода damage
test('Убить умершего', () => {
    const zeroH = new Character('name', 'Bowman', 10, 10);
    zeroH.health = 0;

    expect(() => {
        zeroH.damage(10);
    }).toThrow();
})

test('Если уровень жизни при выполнении функции стало отрицательным', () => {
    const healthMinus = new Character('name', 'Bowman', 10, 10);
    healthMinus.damage(112);

    expect(healthMinus).toHaveProperty('health', 0);
})

test('Нанесение урона', () => {
    const health  = new Character('name', 'Bowman', 10, 10);
    health.damage(20);

    expect(health).toHaveProperty('health', 82);
})