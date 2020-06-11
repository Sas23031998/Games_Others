
var name ="Sas";
console.log(name);
var queryString = decodeURIComponent(window.location.search).substring(1);
name = queryString.substring(queryString.indexOf('=')+1);

document.getElementById("welcomeMsg").innerHTML =
"<p>Welcome "+ name + ".<p>";
var score;
var counter;
var inGame= false;
var timeleft;
let correctAnswer;
let attempt = 3;
var Id;

console.log(6);
document.getElementById("start").onclick =
function(){
  if(inGame == true){
    location.reload();
  }else{
    inGame = true;
    score = 0;
    document.getElementById("scoreBoxValue").innerHTML = score;
    show("timeCounter");
    timeleft = 60;
    document.getElementById("timeCounterValue").innerHTML = timeleft;
    //document.getElementById("start").disable = true;
    hide("start");
    hide("gameOver");
    startTimer();
    generateQuiz();
  }
}

for(let i=1; i<5; i++){

document.getElementById("box"+i).onclick = function(){

if(inGame === true){
  console.log(inGame);
  if(this.innerHTML == correctAnswer){
    console.log('hello');
    score++;
    document.getElementById("scoreBoxValue").innerHTML = score;

    hide("wrongAnswerBox");
    show("correctBox");
    setTimeout(function(){hide("correctBox")},1000);

    generateQuiz();
    }


  else {
    console.log('hi');
    show("wrongAnswerBox");
    hide("correctBox");
    setTimeout(function(){hide("wrongAnswerBox")},1000);
    attempt--;
    if(attempt == 0){
      document.getElementById("gameOverMsg").innerHTML =
      "Game Over!<br><br>Your score is:"+ score +"."
      showGameOver();
    }
  }

}
}
}



      function startTimer(){
        counter = setInterval(function(){
          timeleft --;
          document.getElementById("timeCounterValue").innerHTML = timeleft;
          if(timeleft == 0){
            stopTimer();

            document.getElementById("gameOverMsg").innerHTML =
            "Game Over!<br><br>Your score is:"+ score +"."
            showGameOver();

            hide("timeCounter");
            hide("correctBox");
            hide("wrongAnswerBox");
            }
        },1000);
      }

      function stopTimer(){
        clearInterval(counter);
      }

      function hide(Id){
        document.getElementById(Id).style.display ="none";
      }

      function show(Id) {
          document.getElementById(Id).style.display ="block";
      }

      function showGameOver(){
        document.getElementById("gameOver").style.display ="block";
        document.getElementById("gameOverMsg").style.display ="block";
        document.getElementById("back").style.display ="block";
      }

      function generateQuiz(){
        var x = 1+ Math.round(99*Math.random());
        var y = 1+ Math.round(99*Math.random());
        correctAnswer = x+y;
        document.getElementById("question").innerHTML = x + "+" + y;
        var correctPosition =1 + Math.round(3*Math.random());

        document.getElementById("box"+correctPosition).innerHTML = correctAnswer;

        var answers = [correctAnswer];

        for(i=1; i<5; i++){
          if(i != correctPosition){
            var wrongAnswer;
            do{
              wrongAnswer = (1 + Math.round(99*Math.random()))+(1 + Math.round(99*Math.random()));
            }while (answers.indexOf(wrongAnswer)>-1);
          document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
          }
        }
       }
