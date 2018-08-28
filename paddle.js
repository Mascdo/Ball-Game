let Paddle = function(){
    let image = imageFromPath('paddle.png');
    let o = {
        image: image,
        x: 100,
        y: 250,
        speed: 7,
        width: 150,
        height: 30,
    }

    o.move = function(x){
        if(x < 0){
            x = 0;
        }
        if( x > 400 - o.width){
            x = 400 - o.width;
        }
        o.x = x;
    }

    o.moveLeft = function(){
        o.move(o.x - o.speed);
    }

    o.moveRight = function(){
        o.move(o.x + o.speed);
    }

    o.collide = function(ball){
        if(ball.y + ball.height > o.y){
            if(ball.x > o.x && ball.x < o.x + o.width){
                //log('相撞');
                return true;
            }
        }
        return false;
    }

    return o;
}
