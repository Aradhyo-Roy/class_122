x=0;
y=0;
Draw_circle="";
Draw_rect="";
Draw_triangle="";
Draw_square="";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System Is listening please speak";
    recognition.start();
}
recognition.onresult =function(event){
    console.log(event)

    var content=event.results[0][0].transcript;

    document.getElementById("status").innerHTML="The Speech has been recognised as :"+content;
    if (content == "circle") {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing Circle";
        Draw_circle="set";
    }
    if (content == "rectangle") {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing Rectangle";
        Draw_rect="set";
    }
}
function setup(){
    canvas=createCanvas(900, 600);
}

function draw(){
    if (Draw_circle="set") {
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn";
        Draw_circle="";
    }
    if (Draw_rect="set") {
        circle(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle is drawn";
        Draw_rect="";
    }
}