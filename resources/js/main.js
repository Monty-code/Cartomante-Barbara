function mago(){
  var randomNumber = Math.floor(Math.random() * 16);
  var eightBall = "";
  switch(randomNumber){
    case 0 :
      eightBall = "Un angelo con tutto il cuore oggi ti accompagnera\' per farti capire che non sei solo e andra\' tutto bene!";
      break;
    case 1 :
      eightBall = "Oggi le stelle e Venere porteranno solo cose belle nella tua vita, ma impara a crescere dagli errori.";
      break;
    case 2 :
      eightBall = "Se oggi non sara\' tutto come vorresti sappi che passera\' in fretta e l\'indomani non potra\' che essere angelicamente migliore.";
      break;
    case 3 :
      eightBall = "Cerca sempre di caricarti di pensieri positivi perche\' solo cosi\' l\' universo oggi potra\' portarti fortuna!";
      break;
    case 4 :
      eightBall = "Se qualcosa oggi andra\' storto tu ricordati che un\' angelo materno ti aiutera\' nel tuo domani e tutto svanira\'";
      break;
    case 5 :
      eightBall = "A volte serve sbattere la testa per imparare a non rompersela...gli angeli medicheranno ogni tua ferita, ma segui il loro insegnamento";
      break;
    case 6 :
      eightBall = "Oggi potrebbe essere una giornata molto speciale e da ricordare in positivo o negativo l'importante dicono gli angeli e\' imparare";
      break;
    case 7 :
      eightBall = "Solo se saprai sorridere anche a chi magari non lo merita molto, riuscirai ad avere la vendetta migliore...la pace interiore!";
      break;
    case 8 :
      eightBall = "Oggi prendi la vita con più calma tanto cio\' che dovra\' essere sara\' comunque...un saluto da un angioletto bimbo ti aiutera\' ad essere meno duro con te stesso";
      break;
    case 9 :
      eightBall = "Oggi potresti imparare che la vita non e\' mai scontata, e\' sempre un regalo per questo bisogna viverla a piena anima e cuore! ";
      break;
    case 10 :
      eightBall = "Una splendida notizia oggi potera\' il sole a scaldare i tuoi pensieri...";
      break;
    case 11 :
      eightBall = "Un messaggio inaspettato, una novita\' oggi potrebbe dare un senso a questo periodo, e\' una luce in fondo al tunnel.";
      break;
    case 12 :
      eightBall = "Solo con l\' amore e la pazienza che oggi dovrai cercare di avere riuscirai a superare alcuni ostacoli";
      break;
    case 13 :
      eightBall = "Oggi potresti sentire la necessita\' di avere un cambiamento nella tua vita, ricordati sempre che sai cosa lasci ma non sai cosa trovi!";
      break;
    case 14 :
      eightBall = "Il bisogno di amore e di emozione spesso confonde i cuori innamorati da tempo...ma il vero amore trionfera\' sempre.";
      break;
    case 15 :
      eightBall = "Oggi potresti ricevere degli sguardi da qualcuno che vuole farti capire qualcosa...sii sempre obbiettiva prima di agire pensa alle conseguenze un\'angelo ti invita alla prudenza.";
      break;
    case 16 :
      eightBall = "Oggi piu\' che mai hai bisogno di una mano sulla spalla che un angelo amico non manchera\' di metterti, ricorda che il sole esiste per tutti!";
      break;
    }
return eightBall
};


$(document).ready(function(){
  $(".btn").one("click", function () {
    $(".risposta").append(mago()).fadeIn(8000)

  })
})
