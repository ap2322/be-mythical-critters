class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.activityCount = 0;
    this.layingDown = false;
  }

  shoot(){
    if (this.cranky || this.layingDown){
      return 'NO!'
    }
    else {
      this.activityCount += 1;
      this.checkCranky()
      return 'Twang!!!'
    }
  }

  run(){
    if (this.layingDown) {
      return 'NO!'
    }
    else {
      this.activityCount += 1;
      this.checkCranky()
      return 'Clop clop clop clop!!!'
    }
  }

  checkCranky(){
    if (this.activityCount === 3){
      this.cranky = true;
    }
  }

  sleep(){
    if (this.standing){
      return 'NO!'
    }
    else{
      this.cranky = false;
      return 'ZZZZ'
    }
  }

  layDown(){
    if (this.standing){
      this.standing = false;
      this.layingDown = true;
    }
  }

  standUp(){
    if (this.layingDown){
      this.standing = true;
      this.layingDown = false;
    }
  }

  drinkPotion(){
    if (this.standing && this.cranky){
      this.cranky = false;
    }
    else {
      this.cranky = true;
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur;
