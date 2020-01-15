function preload(){
    fontRaleway = loadFont('assets/Raleway-Black.ttf')
}

function setup(){
    createCanvas(800,800);
    
    console.log("1x uitvoeren");

}

function draw(){
    
    background("255,255,255");
    noStroke();
    

    //background
    fill(221,246,254);
    arc(400, 337, 730, 600, radians(180), radians(360));

    //sun
    fill(248,207,123);
    ellipse(233,150,122,122);

    //1st floor
    fill(145, 184, 104); // midgroen
    rect(15,320,767,47,15);

    // bush
    fill(204,232,161); //heel licht groen
    arc(100,320, 114,90, radians(180), radians(360));
    
    //bushes
    fill(60,134,61); // donkergroen
    arc(190,320, 120,120, radians(180), radians(360));
    arc(290,320, 90,100, radians(180), radians(360));

    //bordje
    fill(255,255,255); // wit
    rect(160, 280, 30, 22); 
    rect(171, 300, 7, 20);

    // grass
    fill(145, 184, 104); // midgroen
    triangle(210, 320, 220, 300, 230, 320);
    triangle(230, 320, 240, 300, 250, 320);
    triangle(250, 320, 260, 300, 270, 320);
    

    // rear bushes
    fill(204,232,161); //heel licht groen
    arc(480,320, 120,120, radians(180), radians(360));
    arc(560,320, 90,100, radians(180), radians(360));

    // right tree
    fill(60,134,61);
    ellipse(540,200,110,140);
    fill(0, 0, 0); 
    rect(540,180,3.5,140,15); //trunk
    stroke(0,0,0);
    strokeWeight(3.5);
    line(510, 210, 540, 240); // left branch
    strokeWeight(0);

    //front bushes
    fill(60,134,61); // donkergroen
    arc(480,320, 60,38, radians(180), radians(360));
    arc(530,320, 80,50, radians(180), radians(360));
    fill(204,232,161); //heel licht groen
    arc(660,320, 70,65, radians(180), radians(360));

    // left tree
    fill(181,202,118);
    ellipse(380,220,105,130);
    fill(0, 0, 0); 
    rect(380,180,3.5,140,15); //trunk
    stroke(0,0,0);
    strokeWeight(3.5);
    line(350, 210, 380, 230); // left branch
    line(382,250,400,230); // right branch
    strokeWeight(0);


        //2nd floor
    fill(181,202,118); // lichtgroen
    rect(245,367,377,46,15);
    rect(230, 480, 50,20,15);
    ellipse(210, 490, 15,15);

    //grass
    fill(60,134,61); // donkergroen
    triangle(535, 413, 550, 373, 565, 413);
    triangle(510, 413, 522, 393, 535, 413);

    //bushes
    arc(320,413, 60,60, radians(180), radians(360));
    arc(370,413, 50,38, radians(180), radians(360));
    fill(255,255,255); // wit

    //bench
    rect(430,373,64,12);
    rect(430,392,64,9);
    rect(435,380,7,40);
    rect(482,380,7,40);



        //3rd floor
    fill(221,219,207); // lichtbruin
    rect(137,413,450,46,15);
    rect(620, 420, 50,23,15);
    ellipse(690, 430, 15,15);
    ellipse(710, 430, 15,15);

    //grass
    fill(60,134,61); // donkergroen
    triangle(360, 459, 380, 429, 400, 459);
    triangle(400, 459, 420, 419, 440, 459);
    triangle(440, 459, 460, 429, 480, 459);
    
        //bottom floor
    fill(145, 184, 104); // midgroen
    rect(338,459,334,46,15);

    //bushes
    fill(60,134,61); // donkergroen
    arc(500,505, 60,38, radians(180), radians(360));
    arc(560,505, 80,50, radians(180), radians(360));


    //signature
    fill(0,0,0);
    textSize(16);
    textFont(fontRaleway);
    text('made by ilja van eck', 600,365);
}





