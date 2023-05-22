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
