Webcam.set({
    width:300,
    height:300,
    img_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerhtml='<img id="captured_image" src="'+data_uri+'"/>'
    });
}
function moldelLoaded(){
    console.log("model loaded")
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AxM0P1_Pw/model.json',moldelLoaded);
console.log('ml5 version',ml5.version);
function check(){
    img=document.getElementById("captured_image");
  
}
console.log('ml5 version',ml5.version);
function gotResult(){
 if(error){
    console.error(error);
 }
 else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=result[0].label;
    document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
 }
}