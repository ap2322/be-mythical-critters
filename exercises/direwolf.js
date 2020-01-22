class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive'){
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark){
    var starkCount = this.starksToProtect.length
    if((this.home === stark.location) && (starkCount < 2)){
      stark.safe = true;
      this.huntsWhiteWalkers = false;
      this.starksToProtect.push(stark);
    }
  }

  leave(removeStark){
    var filtered = []
    filtered = this.starksToProtect.filter(function(value, index, arr){
      value === removeStark
    });
    removeStark.safe = false;
    this.starksToProtect = filtered
  }
}
module.exports = Direwolf;
