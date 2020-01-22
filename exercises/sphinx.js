class Sphinx {
  constructor(name){
    this.name = name
    this.riddles = []
    this.heroesEaten = 0
    this.answerRecord = []
  }

  collectRiddle(riddle){
    if (this.riddles.length < 3){
      this.riddles.push(riddle)
    }
    else {
      this.riddles.shift()
      this.riddles.push(riddle)
    }
  }

  attemptAnswer(answer){
    var riddles = this.riddles;

    for(let i = 0; i < riddles.length; i++) {
      if (riddles[i].answer === answer){
        this.riddles.splice(i,1)
        this.answerRecord.push('correct')
        var response = 'That wasn\'t that hard, I bet you don\'t get the next one'
      } else {
        this.answerRecord.push('incorrect')
      }
    }

    if (this.anyCorrect() === false){
      this.heroesEaten += 1;
    }

    if (this.allCorrect()){
      response = 'New response'
    }

    return response
  }

  anyCorrect(){
    var answers = this.answerRecord;
    var foundCorrect = answers.find(ans => ans === 'correct')
    if (foundCorrect === 'correct'){
      return true
    } else{
      return false
    }
  }

  allCorrect(){
    return true
  }


}
module.exports = Sphinx;
