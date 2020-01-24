class Ogre {
  constructor(name, home = 'Swamp'){
    this.name = name;
    this.home = home;
    this.swings = 0;
  }

  encounter(human){
    human.encounterCounter += 1;
    if (human.noticesOgre()){
      this.swingAt(human);
      if (this.swings % 2 ){
        human.knockedOut = true;
      }
    }
  }

  swingAt(human){
    this.swings += 1;
  }

  apologize(human){
    human.knockedOut = false;
  }

}
module.exports = Ogre;
