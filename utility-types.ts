// interface ICar {
//     id: number
//     name: string
//     price: number
//     yearBuilt: number
// }

interface ICarCreate extends Omit<ICar, 'id'> {} // исключен АЙДИ
interface ICarId extends Pick<ICar, 'id'> {} // только  АЙДИ
interface IOptionalCar extends Partial<ICar> {} // ни одно не обязательно
interface IReadonlyCar extends Readonly<ICar> {} // Все поля только для чтения, менят не получится
type TypeCarRecord = Record<'name' | 'price', string | number> // для создания своег нового типа

// const car: ICarCreate = { // исключен АЙДИ

// }

// const car: ICarId = {
//     // только  АЙДИ
// }

// const car: IOptionalCar = {
//     // только  АЙДИ
// }

// const car: IReadonlyCar = {
//     // только  АЙДИ
// }

// const car: TypeCarRecord = {

// }

interface ICar {
    id?: number
    name?: string
    price?: number
    yearBuilt?: number
}

interface IRequiredCar extends Required<ICar> {} // делает все поля обязательными хотя они сначала были не обязательны

// const car: IRequiredCar = {}

// ------------- ReturnType ---------------------------

type TypeGetName = () => string
type Return = ReturnType<TypeGetName> // видим какой тип

// -------------------- Extract Exclude  NotNull---------------------------

// type Any = Extract<'max' | 'andrey', 'andrey' | 'misha'> // возвращает одинаковые значения тут андрей
// type Any = Exclude<'max' | 'andrey', 'andrey' | 'misha'> // исключает все кроме первого параметра "макс" остается
type NotNull = NonNullable<string | number | null | undefined> //  удаляет null | undefined
