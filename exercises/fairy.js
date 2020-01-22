class Fairy {
  constructor(name){
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief(){
    this.dust += 1;
  }

  believe(){
    this.dust += 10;
  }

  makeDresses(dresses){
    this.clothes.dresses.push(dresses);
    var tempDresses = this.clothes.dresses.flat();
    this.clothes.dresses = tempDresses;
  }

  provoke(){
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant){
    if (this.disposition === 'Vengeful'){
      this.humanWards.push(infant);
      this.checkFeelings();
      var changeling = infant;
      changeling.disposition = 'Malicious'
      return changeling
    }
    else{
      return infant
    }
  }

  checkFeelings(){
    if (this.humanWards.length === 3){
      this.disposition = 'Good natured'
    }
  }
}

module.exports = Fairy;
