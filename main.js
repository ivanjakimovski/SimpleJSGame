// Initial canvas setup.

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// Importing the assets.

var bg = new Image();
bg.src = "assets/background.png";

var ground = new Image();
ground.src = "assets/ground.png";

var player = new Image();
player.src = "assets/player.png";

var rock = new Image();
rock.src = "assets/rock.png";

// Setting initial values for player and obstacles positions.

playerX = 30; 
playerY = 270; 

xr1 = 100;  //
xr2 = 250;  // X coordinates for the three rock obstacles.      
xr3 = 380;  //

score = 0;

// Detecting collision with the obstacles.

function obstacleCollisionDetection() {

    if(playerX+20==xr1 && playerY==270) {
        xr1   = 100;
        xr2   = 250;
        xr3   = 380;
        score = 0;
    }

    if(playerX+20==xr2 && playerY==270) {
        xr1   = 100;
        xr2   = 250;
        xr3   = 380;
        score = 0;
    }

    if(playerX+20==xr3 && playerY==270) {
    
        xr1   = 100;
        xr2   = 250;
        xr3   = 380;
        score = 0;
    }
    
}

// Function that draws the scoreboard.

function drawScoreboard() {
    
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 20, 380);

    if(score < 20) {
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText("Level 1 ", 280, 380);
    }

    if(score >= 20) {
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText("Level 2 ", 280, 380);
    }
}

// Makes the player jump.

function jump() {
    if(playerY > 240) {
    playerY = playerY - v
    }
}


// Main gameloop function.

function gameloop() {
    
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(ground, 0, 300);
    ctx.drawImage(player, playerX, playerY);
    ctx.drawImage(rock, xr1, 280);
    ctx.drawImage(rock, xr2, 280);
    ctx.drawImage(rock, xr3, 280);

    xr3--;
    xr2--;
    xr1--;
 
    if(playerY != 270) {
        playerY = playerY+2;
    }

    requestAnimationFrame(gameloop);

    if(score >= 20) {
        xr1 = xr1-2;
        xr2 = xr2-2;
        xr3 = xr3-2;
    }

    obstacleCollisionDetection();

    if(xr1 <= 0) {   //
        xr1 = 380;   //
    }                //
                     //              
    if(xr2 <= 0) {   //
        xr2 = 380;   //  Reseting the obstacles.
    }                //
                     // 
    if(xr3 <= 0) {   //
        xr3 = 380;   // 
    }                //

    
    // Increasing the score by one if one obstacle is jumped.

    if(playerX==xr1 || playerX==xr2 || playerX==xr3) {
        score++;
    }

    if(score >= 20) {
        if(playerX+20==xr1 || playerX+20==xr2 || playerX+20==xr3) {
        score++;
        }
    }

    drawScoreboard();

}


// Calling the main gameloop function.

gameloop();


// Adding event listeners to trigger the jump of the player.

document.addEventListener("click",   jump);
document.addEventListener("keydown", jump);
document.addEventListener("touched", jump);


