const biggs = {
  name: "Biggs Darklighter",
  height: "183",
  mass: "84",
  hair_color: "black",
  skin_color: "light",
  eye_color: "brown",
  birth_year: "24BBY",
  gender: "male"
};

function tester(name, midiFunc, forceFunc) {
  midiFunc(name);
  if (name.midichlorians > 600) {
    forceFunc(name);
    return `their midichlorians are off the chart! And they are a ${
      name.force
    } jedi!`;
  } else {
    return `An average ability they have, yes...`;
  }
}

function midichlorianLevel(name) {
  name.midichlorians = Math.random() * (+1000 - +0) + +0;
}

function forceSide(name) {
  let force = Math.random();
  force < 0.5 ? (name.force = "dark") : (name.force = "light");
}

console.log(tester(biggs, midichlorianLevel, forceSide));
