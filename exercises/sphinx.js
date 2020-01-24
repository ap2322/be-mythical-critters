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
    var tempAnswerRecord = [];

    for(let i = 0; i < riddles.length; i++) {
      var correctAnswer = riddles[i].answer === answer;
      if (riddles.length === 1 && correctAnswer){
        this.riddles.splice(i,1)
        tempAnswerRecord.push('correct')
        var response = this.lastCorrectResponse(answer)
      }
      else if (correctAnswer){
        this.riddles.splice(i,1)
        tempAnswerRecord.push('correct')
        response = 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
      else if (correctAnswer === false){
        tempAnswerRecord.push('incorrect')
      }
    }

    if(this.anyTempCorrect(tempAnswerRecord)) {
      this.answerRecord.push('correct')
    } else {
      this.answerRecord.push('incorrect')
    }

    if (this.anyCorrect() === false){
      this.heroesEaten += 1;
    }

    return response
  }

  anyTempCorrect(answers){
    var foundCorrect = answers.find(ans => ans === 'correct')
    if (foundCorrect === 'correct'){
      return true
    } else{
      return false
    }
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

  lastCorrectResponse(answer){
    var foundIncorrect = this.answerRecord.find(ans => ans === 'incorrect')
    if (foundIncorrect === 'incorrect'){
      var response = 'Last one is right!'
    } else {
      response = `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???`
    }
    return response
  }


}
module.exports = Sphinx;
