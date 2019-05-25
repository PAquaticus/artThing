const width = 1920
const height = 1080
const shapesImmplemented = 2;
const stepSize = 3;
const colorChangeStep = 2;

function setup() {
    createCanvas(width, height);
    //noLoop();
}

function randomStepSize() {
    return Math.random() * stepSize;
}

function randomSign() {
    return (Math.random() * 2) >= 1;
}

function randomWidthHeight() {
    let w = Math.random() * 20 % 10;
    let h = Math.random() * 20 % 10;
    return [w, h];
}

function randInt(a) {
    return Math.floor(Math.random() * a)
}

function randomRect(x,y){

    x1 = x + randomSign()*randInt(5)
    x2 = x + randomSign()*randInt(8)
    x3 = x + randomSign()*randInt(8)
    x4 = x + randomSign()*randInt(10)
    
    y1 = y + randomSign()*randInt(5)
    y2 = y + randomSign()*randInt(8)
    y3 = y + randomSign()*randInt(8)
    y4 = y + randomSign()*randInt(10)
    
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

function draw() {
    let x, y;
    x = width/2;
    y = height/2;

    rgba = [randInt(255),randInt(255),randInt(255), randInt(255)]
    noStroke();


    for (i = 0; i < 10000; i++) {
        
        /* Coordinates */ 
        x += (randomSign() * randomStepSize())
        y += randomSign() * randomStepSize()
        wh = randomWidthHeight(1)
        // Rest to middle if it random-walks out of the frame
        if (x > 1920 || x < 0){
            x = width / 2;
        }
        if (y > 1080 || y <0){
            y = height / 2;
        }

        /* Color */ 
        rgba[0] = (rgba[0] + randomSign() * Math.floor(Math.random()*colorChangeStep)) % 255 
        rgba[1] = (rgba[1] + randomSign() * Math.floor(Math.random()*colorChangeStep)) % 255 
        rgba[2] = (2 + rgba[2] + randomSign() * Math.floor(Math.random()*colorChangeStep)) % 255 
        rgba[3] = (rgba[3] + randomSign() * Math.floor(Math.random()*colorChangeStep)) % 100 // Let alpha be below 100 to make it look like aquarell
        fill(rgba[0], rgba[1], rgba[2], rgba[3]);


        let decision = Math.floor(Math.random()*shapesImmplemented)
        switch(decision){
            case 0:
                arc(x, y, wh[0], wh[1], Math.floor(Math.random() * 3 % 3), Math.floor(Math.random() * 3 % 3));
                break;
            case 1:
                randomRect(x,y);
                break;
        }
    }
}