import { Product, taxCalculation } from './06-function-desestructurimg';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100,
    },
    {
        description: 'Ipad',
        price: 150,
    }
];

export interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}


const [total, tax] = taxCalculation(
    {
        products: shoppingCart,
        tax: 0.15
    });


console.log('total', total );
console.log( 'tax', tax)

