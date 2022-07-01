//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=50; timeIni=50; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="BIEN AHÍ MAQUINA "; messageTime="SE TE ACABO EL TIEMPO"; messageError="INTENTALO DE NUEVO"; messageErrorG="INTENTALO DE NUEVO"; messageAttempts="SE ACABARON LOS INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VEVTVA=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Cual es la unidad mínima de información?","¿Cual es el conjunto de ocho bits?","¿Cual es el conjunto de bits que se utiliza para realizar ciertas operaciones internas?"];
var answers1=["MUJJVA==","MEJZVEU=","MFBBTEFCUkE="];
var answers2=["MUJZVEU=","MEJJVA==","MFBBTEFCUkE="];
var answers3=["MVBBTEFCUkE=","MEJJVA==","MEJZVEU="];
var ans=[answers1,answers2,answers3];
var err=["A TU CASA","A TU CASA","A TU CASA"];
var ima=["","",""];
var mp4=["","",""];
var ogv=["","",""];
var alt=["","",""];
var indexTag=0; actualAnswers=[]; dirMedia="TEST_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
