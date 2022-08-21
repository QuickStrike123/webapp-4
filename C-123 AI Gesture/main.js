noseX = 0;

noseY = 0;

leftWristX = 0;

rightWristX = 0;

difference = 0;

function setup() {

    video = createCapture(VIDEO);

    video.size(550,500)

    video.position(150,150);

    canvas = createCanvas(550,550);

    canvas.position(800,150);

    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on("pose",gotPoses);
    
}

function modelLoaded() {

    console.log("PoseNet Is Initiated");
    
}

function gotPoses(results) {

    if(results.length > 0){

        console.log(results);

        noseX = results[0].pose.nose.x;

        noseY = results[0].pose.nose.y;

        console.log( "Nose X = " + noseX + " And Nose Y = " + noseY + ".");

        leftWristX = results[0].pose.leftWrist.x;

        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log( "Left Wrist = " + leftWristX + " Right Wrist = "+ rightWristX + " difference = " + difference + "." );

    }
    
}

function draw() {

    document.getElementById("SquareSide").innerHTML = "Square Size = " + difference + " px.";

    fill("skyblue");

    stroke("skyblue");

    square( noseX, noseY, difference );
    
}