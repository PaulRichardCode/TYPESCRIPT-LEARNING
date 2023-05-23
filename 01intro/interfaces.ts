//remember // ENUMS , INTERFACE AND TYPES ALL WORKS WITH OBJECTS
//unlike forms
type form = {
  name: string;
};

//interface works slightly different

interface forms {
  name: string;
  level: number;
  readonly dil: number;
  googleId?: number;
  email: string;

  //this are strictly made by interface not user
  work(): string;
  calc(num: number, name: string): number;
}

interface forms {
  jagaban: string;
}

interface Femi extends forms {
  password: "godbewithme" | "praiserich";
}

let studentInfo: forms = {
  name: "rose",
  level: 25,
  dil: 23,
  email: "h@mail.com",
  work() {
    return "adekune gold";
  },
  calc(number: 25, name: "richy") {
    return 12;
  },
  jagaban: "sadw",
};
