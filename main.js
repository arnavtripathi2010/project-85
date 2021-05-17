Canvas = document.getElementById() ("myCanvas");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png"
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png"
car2_x = 10;
car2_y = 10;

background_image = "amk.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadrover;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadrover;
    car2_imgTag.src = car2_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
 function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventlistener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keycode
    console.log(keyPressed)
    if(keypressed == '38')
    {
        car1_up();
        console.log("up arrow key");

    }
    if(keypressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }
    if(keypressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }
    if(keypressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed == '87')
    {
        car2_up();
        console.log("key w");
    }
    if(keyPressed == '65')
    {
        car2_down();
        console.log("key a");
    }
    if(keyPressed == '83')
    {
        car2_left();
        console.log("key s");
    }
    if(keyPressed == '68')
    {
        car2_left();
        console.log("key d");
    }
}

function car1_up()
    {
        if(car1_y >=0)
        {
            car1_y = car1_y - 10;
            console.log("when up arrow is pressed, x = " + car1_x + " | y = "+car1_y)
            uploadBackgroud();
            uploadcar1();
            uploadcar2();
        }
    }

    
function car1_down()
{
    if(car1_y <=500)
    {
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, x = " + car1_x + " | y = "+car1_y)
        uploadBackgroud();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left()
{
    if(car1_x >=0)
    {
        car1_x = car1_y - 10;
        console.log("when left arrow is pressed, x = " + car1_x + " | y = "+car1_y)
        uploadBackgroud();
        uploadcar1();
        uploadcar2();
    }
}

function car1_rigth()
{
    if(car1_x <=700)
    {
        car1_x = car1_y + 10;
        console.log("when right arrow is pressed, x = " + car1_x + " | y = "+car1_y)
        uploadBackgroud();
        uploadcar1();
        uploadcar2();
    }
}
  

function car2_up()
    {
        if(car2_y >=0)
        {
            car2_y = car2_y - 10;
            console.log("when up arrow is pressed, x = " + car2_x + " | y = "+car2_y)
            uploadBackgroud();
            uploadcar1();
            uploadcar2();
        }
    }

    
function car2_down()
{
    if(car2_y <=500)
    {
        car2_y = car2_y + 10;
        console.log("when down arrow is pressed, x = " + car2_x + " | y = "+car2_y)
        uploadBackgroud();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left()
{
    if(car2_x >=0)
    {
        car2_x = car2_y - 10;
        console.log("when left arrow is pressed, x = " + car2_x + " | y = "+car2_y)
        uploadBackgroud();
        uploadcar1();
        uploadcar2();
    }
}

function car2_rigth()
{
    if(car2_x <=700)
    {
        car2_x = car2_y + 10;
        console.log("when right arrow is pressed, x = " + car2_x + " | y = "+car2_y)
        uploadBackgroud();
        uploadcar1();
        uploadcar2();
    }
}

if(car1_x > 700) 
{
   console.log("car1 Won")
   document.getElementById('game_status').innerHTML = "Car1 Won !!!!!!!";
}
  
    

    





