// public - по умолчанию

// private = #getInfo  // приватная  которую можно вызвать внутри только тово класа в котором она находится

// class Car {
//     name: string
//     price: number

//     constructor(name: string, price: number) {
//         this.name = name
//         this.price = price
//     }

//     private getInfo(): string {
//         return `${this.name} - ${this.price}`
//     }

//     anything() {
//         this.getInfo() // внутри класа вызывается
//     }
// }
// new Car('BMW', 10000).getInfo() // getInfo() за пределами  класа не вызывается

// protected

// class Car {
//     name: string
//     price: number

//     constructor(name: string, price: number) {
//         this.name = name
//         this.price = price
//     }

//     protected getInfo(): string {
//         return `${this.name} - ${this.price}`
//     }
// }

// class Bus extends Car {
//     constructor(name: string, price: number) {
//         super(name, price)
//     }

//     test() {
//         return this.getInfo() // "protected" вот
//     }
// }
// new Car('BMW', 10000).getInfo() // так не получится вызвать getInfo(), а вот внутри другого класа который extends от того класа в уотором находится getInfo()
