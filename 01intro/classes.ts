interface UserInterface {
  id: number;
  name: string;
  register(): string;
}
//CLASSES ARE USED TO CREATE OBJECT
//protected unlike readonly can only be accessed or changed inside the classes

class Person implements UserInterface {
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

const brad = new Person(1, "Paul Richard");
const mike = new Person(2, "cum comquat");

console.log(brad.register);
