function classDecorator<T extends { new (...args:any[]):{}}>(
    constructor: T
    ){
    return class extends constructor{
        newPorperty = "Hola";
        hello= 'override';
    }
}

// los decoradores son funciones que pueden modificar el comortamiento de clases 
@classDecorator
export class SuperClass {
    public myProperty: string = "Abc123";
    
    print(){
        console.log('Hola mundo');
    }
    
}


const myClass = new SuperClass();
console.log( myClass)