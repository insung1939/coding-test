const obj1 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};

const obj2 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};

function isEqual(objA, objB) {
  let a = JSON.stringify(objA);
  let b = JSON.stringify(objB);
  return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(isEqual(obj1, obj2));
