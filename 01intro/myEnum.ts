//enum count the const in it object-brackets{}

enum direction1 {
  first, //0
  second, //1
  third, //2
}

//It can also work for string
//remember enum works with a const variable which means it is assigned with an (equal to = ) symbol

enum direction2 {
  left = "left",
  top = "top",
  right = "right",
  down = "down",
}
console.log(direction2.down);

interface direction3 {
  name: string;
}

const jojj: direction3 = {
  name: "srsa",
};

//type has an equal to
type direction4 = {
  name: string;
};

//remember // ENUMS , INTERFACE AND TYPES ALL WORKS WITH OBJECTS
// tupus and union and & works with array
