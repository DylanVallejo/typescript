

export interface Product {
    description: string;
    price: number;
    
}


// const phone : Product = {
//     description: 'Nokia A1',
//     price: 150.0
// }

// const tablet: Product = {
//     description: 'Ipad Air',
//     price: 250.0
// }

export interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}


export function taxCalculation( options:TaxCalculationOptions  ): [number, number]{
// function taxCalculation( {tax, products}:TaxCalculationOptions  ): [number, number]{
    
    let total = 0;
    const { products ,tax } = options;
    // const { tax } = options;
    // console.log(options)
    // console.log(products)
    
    // products.forEach(  product =>{
    products.forEach(  ({price}) =>{
        
        // const  { price } =  product;
        total += price;
    })
    return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const [total, totalTax] = taxCalculation({
//     products:shoppingCart,
//     tax:tax,
// })


// console.log('total', total)
// console.log('tax', totalTax)



