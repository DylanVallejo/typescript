

export class Person {
    
    // public name: string;
    // private address: string;

    constructor(
        public name: string, 
        public firstName: string, 
        public lastName: string, 
        private address: string = 'No address'
    ){}
    // this.name = name;
    // this.address = address;};


}


// export class Hero extends Person {
    
    
    
//     // para los constructuores de clases que extiende debemos usar super 
//     // para acceder a alos valores de la clase
//     constructor (
//         public alterEgo:string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'New York');
//     }
    
// }


export class Hero  {
    
    
    // public person: Person;
    // para los constructuores de clases que extiende debemos usar super 
    // para acceder a alos valores de la clase
    constructor (
        public alterEgo:string,
        public age: number,
        public realName: string,
        public person : Person
    ){
        // this.person = new Person(realName);
    }
    
}

const tony = new Person('Tony ' ,'stark ', 'new york')

const  ironman = new Hero("Ironman",45,"Tony", tony);

console.log(ironman)