// type TypeUser = {
//     name: string
//     age: number
//     address: string
// }

// let user: TypeUser

// user = {
//     name: 'Max',
//     age: 24,
//     address: 'SPB'
// }

// ------------------------------------------
54:35
// расширеные типы

type TypeIsNumber<T> =  T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

type TypeBrand = 'bmw' | 'mclaren' | 'mercedes'
type TypePrrice = '$10000' | '$20000' | '$15000'

type TypeCar = `${TypeBrand} ${TypePrrice}`

const car1:TypeCar = 'bmw $10000'