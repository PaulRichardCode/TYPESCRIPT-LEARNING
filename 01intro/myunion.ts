// union | is used to combine variable types

let score: string | number = "make money";

//more examples

type profile = {
  name: string;
  id: number;
};

type username = {
  pog: string;
  id: number;
};

//the and & type means both types combined or united (e.g profile and username below, must be include in the variable
let account: profile & username = {
  name: "",
  id: 12,
  pog: "",
};

//while the | union symbol must include of the type element (e.g profile{namr and id} )
let smile: profile | username = {
  name: "",
  id: 12,
};

let data: (number | string)[] = ["rose", 1];

let seatgiven: "shade" | "paul";
