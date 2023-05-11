// Декорирование
// function LogClass(constructor: Function) {
//     console.log(constructor.name)
// }

// function LogMethod(target: Object, key: string, descriptor: PropertyDescriptor) {
//     console.log(key)
// }

// @LogClass
// class Plane {
//     private id: number
//     constructor(id: number) {
//         this.id = id
//     }
// }

// @LogMethod
// getId() {
//     return this.id
// }

// ИИ сказал что надо так
function LogClass(constructor: Function) {
    console.log(constructor.name)
}

class Plane {
    private id: number
    constructor(id: number) {
        this.id = id
    }

    @LogMethod
    getId() {
        return this.id
    }
}

function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(key)
}
