// ------------------------------------------
// function getChannel(name: string) {
//     return { name }
// }

// getChannel('1')
// //-------------------------------------------

// type TypeChannelReturn = {
//     name:string
// }

// function getChannel(name:string):TypeChannelReturn {
//     return { name: 'Max' }
// }

// const getChannelName = (name: string):TypeChannelReturn => {
//     return { name: 'Max' }
// }

//====================================================================

// type TypeChannelReturn = {
//     name: string
// }

// function getChannel(name: string): TypeChannelReturn {
//     return { name: 'Max' }
// }

// type TypeChannelFunction = (name: string) => TypeChannelReturn

// const getChannelName: TypeChannelFunction = (name) => {
//     return { name: 'Max' }
// }

// // ----------------------------------------------------------------

// const getNumbers = (...numbers: number[]) => {
//     return numbers
// }

// // Прегрузки 23:39 мин

// function getCar(name: string): string // Сигнатура функции
// function getCar(name: string, price: number): string // Сигнатура функции

// function getCar(name: string, price?: number): string {
//     return price ? `Название ${name}, Цена ${price}` : `Название ${name}`
// }

// const car1 = getCar('BMV')
// const car2 = getCar('BMV', 1000)
// const car3 = getCar('BMV', 1000, 'hhh') //  с третьим аргументом работать не будет
