// indico que es un generico con T 
export function whatsMyType<T>( argument:T ):T {
    
    
    return argument;
}
const amIString = whatsMyType('Hola mundo');
const amINUmber = whatsMyType(100);
const amIArray= whatsMyType([1,2,3,4,5]);



console.log(amIString.split(' '))
console.log(amINUmber.toFixed())
console.log(amIArray.join('-'))
