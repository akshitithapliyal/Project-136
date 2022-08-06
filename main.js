object_name="";

function preload(){

}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video =createCapture(VIDEO);
    video.size(380,380);
    video.height();
}
function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name=document.getElementById("input_id").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}