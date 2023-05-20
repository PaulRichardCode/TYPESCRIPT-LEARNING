//let word: string = "west brook";

// function signUpUser(name: string, email: string, password: number) {}

// signUpUser("Richard", "Paul@gmail", 1234);

// //arrow functiom

// let signup = (name: string, email: string, isPaid: boolean = false) => {};

//signup("h", "h@h.com");

const heros = ["ironman", "thor", "spiderman"];

heros.map((hero) => {
  `${hero} is my hero`;
});

const consoleError = (errmsg: string): never => {
  throw new Error(errmsg);
};
