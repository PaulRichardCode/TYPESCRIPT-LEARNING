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

  //this are strictly made by interface not type
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

interface MathFunc {
  calc(x: number, y: number): number;
}

const addition: MathFunc = {
  calc(x, y) {
    return x + y;
  },
};

interface subFunc {
  (x: number, y: number): number;
}

// const substraction: subFunc = {
//   subs(x: 24, y: 32) {
//     return x - y;
//   },
// };

const substraction: subFunc = (obi: number, mad: number): number => {
  return obi - mad;
};

// interface example {
//   calc(x: string, y: string): string;
// }

// const example1: example = {
//   calc(x: "rosa", y: "blasi") {
//     return `${x} ' ' ${y}`;
//   },
// };

// enum xample {
//   first = "hey",
//   second = "bro",
//   third = "felix",
// }

// console.log(xample.first + xample.second);

// type mock = {
//   name: string;
//   friend: string;
// };

// const classroom: mock = {
//   name: "",
//   friend: "",
// };
