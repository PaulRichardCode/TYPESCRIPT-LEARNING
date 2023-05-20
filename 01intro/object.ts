let john = {
  name: "saheed",
  class: 2,
  human: true,
};

// let sad = ({ name: string, human: boolean }) => {};

// sad({ name: 123, human: "daddy" });

//***** Difference between let and type is type let you define and use the variable type in an objects it also use semi-column ; instead of comma ,

type Bingo = {
  name: string;
  email: string;
  human: boolean;
};

let createUser = (user: Bingo) => {};

createUser({ name: "", email: "", human: true });
