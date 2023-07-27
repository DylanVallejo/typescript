// indico que es un generico con T 
export function whatsMyType<T>( argument:T ):T {
    
    
    return argument;
}

// definimos el tipo de dato que se convertira el generico t
const amIString = whatsMyType<string>('Hola mundo');
const amINUmber = whatsMyType<number>(100);
const amIArray= whatsMyType<number[]>([1,2,3,4,5]);



console.log(amIString.split(' '))
console.log(amINUmber.toFixed())
console.log(amIArray.join('-'))
