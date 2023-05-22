// let bank: (string | number)[] = ["zenith", 10];

let bank: [string, number] = ["rose", 20];

type user = {
  name: string;
  race: string;
  qualified: boolean;
};

type info = {
  number: number;
  address: string;
  email: string;
};

const bioData: (user | info)[] = [];

bioData.push(
  { name: "", race: "", qualified: false },
  { number: 123, address: "", email: "" }
);

type color = [number, number, number];

const rbg: color = [223, 221, 312];
rbg[1] = 501;

type planetA = [string];
type planetB = [string, number];
// revision

let stars: string[] = ["sarah", "monica", "oyiza"];
let animals: string[] | number[] = [919]; //this wont combine union the type in will only choose one
let animal: (string | number)[] = [122, "monkey"]; //this combine the type union in will choose both, it can also accept one
let planet: [planetA, planetB] = [["mecury"], ["venus", 32]]; // the tuplets[] sticks to what is given
