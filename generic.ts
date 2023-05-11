// function
function entity<T>(args: T): T {
    return args
}

entity<number>(1)
entity<string>('1')

// Стрелочная
const entity2 = <T>(args: T): T => {
    return args
}

entity2<number>(1)
entity2<string>('1')

// class
class Channel<T> {
    private name: T

    constructor(name: T) {
        this.name = name
    }

    getName(): T {
        return this.name
    }
}

new Channel<string>('RED group')
new Channel<number>(1)

// interface
interface IPair<K, V> {
    key: K
    value: V
}

const pair1: IPair<string, number> = {
    key: 'j',
    value: 1
}

const pair2: IPair<string, string> = {
    key: 'j',
    value: '1'
}

// тип джейнерика по умолчанию\

type TypeLength = {
    length: number
}

function geyNameLength<T extends TypeLength>(entity: T): number {
    return entity.length
}

geyNameLength('gfhfjfj')
geyNameLength([0, 1, 2, 3])
