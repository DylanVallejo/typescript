export interface Passenger {
    name: string;
    children?: string[];
}


const passenger1 : Passenger = {
    name: 'Dylan',
    
}

const passenger2 : Passenger = {
    name: 'Dylan',
    children: ['gompanchira', 'puerco'],
    
}

const returnChildrenNumber = (passenger:Passenger):number => {
    // optional chaining nos permite decir que esperemos un valor 
    // con la nomencaltura ?.
    // const howManyChildren = passenger.children?.length || 0;
    
    // o que obligatoriamnete debe esperar el valor 
    // con la nomenclatura !.
    const howManyChildren = passenger.children!.length || 0;
    
    
    console.log(passenger.name , howManyChildren)
}

returnChildrenNumber(passenger1);