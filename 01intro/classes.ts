interface UserInterface {
  id: number;
  name: string;
  register(): string;
}
//CLASSES ARE USED TO CREATE OBJECT
//protected unlike readonly can only be accessed or changed inside the classes

class Person implements UserInterface {
  //implement joins interface with the class
  id: number;
  name: string;

  //constructor is a fuction with the class
  constructor(id: number, name: string) {
    //this means things inside the class and outside the constructor
    this.id = id;
    this.name = name;
    //anything written inside the constructor will display outside the class
  }
  register() {
    return `${this.name} is the imposter`;
  }
}

// you can use extend to join two classes together rather than implement
//IT CALLED SUBCLASSES

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    //super replaces this.id and this.name
    super(id, name);
    //position has to be initialized
    this.position = position;
  }
}

const emp = new Employee(1, "Paul rauf", "snr developer");

//GENERICS

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);

numArray.push(1, 2, 3);

//we are done with learning