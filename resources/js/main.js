function mago(){
  var randomNumber = Math.floor(Math.random() * 8);
  var eightBall = "";
  switch(randomNumber){
    case 0 :
      eightBall = "E\' certo";
      break;
    case 1 :
      eightBall = "E\' deciso cosi\'";
      break;
    case 2 :
      eightBall = "Credi in te stesso";
      break;
    case 3 :
      eightBall = "Non e\' prevedibile ora";
      break;
    case 4 :
      eightBall = "Non ci contare";
      break;
    case 5 :
      eightBall = "La mia maga dice di no";
      break;
    case 6 :
      eightBall = "Non vedo grosse prospettive";
      break;
    case 7 :
      eightBall = "I segni dicono di si";
    }
return eightBall
};


$(document).ready(function(){
  $(".btn").one("click", function () {
    $(".risposta").append(mago()).fadeIn(8000)

  })
})
