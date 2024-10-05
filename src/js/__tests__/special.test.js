import { getSpecial } from '../special.js'
import { test } from "@jest/globals"

test('should be special', () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            }, 
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
            }
        ]	
    }

    expect(getSpecial(character)).toEqual(
        [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: "Описание недоступно"
            }
        ]
    )
})


test('should no special', () => {
    const newCharacter = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
        }

    expect(getSpecial(newCharacter)).toStrictEqual("Специальности недоступны")

})
 