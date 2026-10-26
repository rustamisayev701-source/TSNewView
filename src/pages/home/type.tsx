// interface Zakaz {
//     name: string
//     price: number
// }
// export interface order extends Zakaz {
//     manzil: string
// } 

// type User = {
//     name:string,
//     price:number
// }

// export type user ={
//     tel:string
// }& User


// export type noprice = Omit<order, "price">

// export type UPhone = Pick<user, "tel">

// const User: string[] = ["Ali", "Abu"]

// type meva = {
//     id:string | number,
//     ism:string,
//     price:number
// }

// const mevalar:meva[] =[
//     {
//         id:6,
//         ism:"olma",
//         price:1000,
//     },
//     {
//         id:2,
//         ism:"olma",
//         price:1000
//     },
//     {
//         id:3,
//         ism:"olma",
//         price:1000
//     },
// ]

// console.log(mevalar)

type imagee = {
    id:number,
    image:string
}

type product = {
    id:string | number,
    ism:string,
    description:string,
    price:number,
    image:imagee[]
    created_at:Date,
}

const Product:product[] = [
    {
       id:1,
       ism:"Asus",
       description:"aaa",
       price:22,
       image:[
        {
            id:34,
            image:"rr"
        }
       ],
       created_at:new Date
    },
    {
       id:1,
       ism:"Asus",
       description:"aaa",
       price:22,
       image:[
        {
            id:34,
            image:"rr"
        }
       ],
       created_at:new Date
    },
    {
       id:1,
       ism:"Asus",
       description:"aaa",
       price:22,
       image:[
        {
            id:34,
            image:"rr"
        }
       ],
       created_at:new Date
    },
    {
       id:1,
       ism:"Asus",
       description:"aaa",
       price:22,
       image:[
        {
            id:34,
            image:"rr"
        }
       ],
       created_at:new Date
    },
]