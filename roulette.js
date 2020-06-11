var canvas = document.querySelector("canvas");
canvas.width =300;
canvas.height = 300;
var c = canvas.getContext("2d");
var stop = document.getElementById("stop");

stop.addEventListener("click", function(){
    count = 1.006
});

var start_angle = 0/180
var end_angle = 90/180
var colorArray = [
    "blue",
    "#00FF00",
    "#FFFB00",
    "#FF9900",
]
for (i=0; i<4;i++){
    c.beginPath();
    c.moveTo(150,150);
    c.fillStyle = colorArray[i];
    c.arc(150,150,100,start_angle * Math.PI ,end_angle * Math.PI, false);
    c.fill();
    start_angle += 0.5;
    end_angle += 0.5;


}

var add_angle=10;


function animate() { 
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (i=0; i<4;i++){
        c.beginPath();
        c.moveTo(150,150);
        c.fillStyle = colorArray[i];
        c.arc(150,150,100,start_angle * Math.PI ,end_angle * Math.PI, false);
        c.fill();

        c.font ="20px serif";
    c.fillStyle="black";
    c.fillText(1+i, 150+65*Math.cos((start_angle+45/180)*Math.PI),150+65*Math.sin((45/180+start_angle)*Math.PI))

        start_angle += 0.5;
        end_angle += 0.5;
       
        
    }    
    c.beginPath();
    c.moveTo(150,150);
    c.fillStyle = colorArray[0];
    c.arc(150,150,100,start_angle * Math.PI ,end_angle * Math.PI, false);
    c.fill();

    c.font ="20px serif";
    c.fillStyle="black";
    c.fillText(1, 150+65*Math.cos((start_angle+45/180)*Math.PI),150+65*Math.sin((45/180+start_angle)*Math.PI))
   
    start_angle += add_angle/180;
    end_angle += add_angle/180;
    add_angle /= count;

    if ( add_angle < 0.5) {
        add_angle = 0;
    }
    
    c.beginPath();
    c.moveTo(150,45);
    c.lineTo(130,25);
    c.lineTo(170,25);
    c.lineTo(150,45);
    c.closePath();
    c.fillStyle="gray";
    c.fill();

}
animate();

