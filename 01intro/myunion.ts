// union | is used to combine variable types

let score: string | number = "make money";

//more examples

type profile = {
  name: string;
  id: number;
};

type user = {
  username: string;
  id: number;
};

let account: user | profile = {
  name: "Richard",
  id: 1,
};

let data: (number | string)[] = ["rose", 1];
