let john = {
  name: "saheed",
  class: 2,
  human: true,
};

// let sad = ({ name: string, human: boolean }) => {};

// sad({ name: 123, human: "daddy" });

//***** Difference between let and type is type let you define and use the variable type in an objects it also use semi-column ; instead of comma ,

//let createUser = (user: Bingo) => {};

// createUser({ name: "", email: "", human: true });
type Bingo = {
  readonly _id: string;
  name: string;
  email: string;
  human: boolean;
};

let user: Bingo = {
  _id: "",
  name: "h",
  email: "h@h.com",
  human: true,
};

// combining type objects
// ****************
// AND & ONLY WORKS WITH OBJECTS
type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: number;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let profile: cardDetails = {
  cardNumber: "1234567",
  cardDate: 2023,
  cvv: 419,
};
