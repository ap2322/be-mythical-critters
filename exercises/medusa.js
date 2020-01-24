class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(person) {
    if (this.statues.length >= 3) {
      this.statues[0].stoned = false;
      this.statues.shift()
    }
    person.stoned = true;
    this.statues.push(person)
  }
}

module.exports = Medusa;
