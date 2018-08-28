let Ball = function(){
    let image = imageFromPath('ball.png');
    let o = {
        image: image,
        x: 100,
        y: 225,
        speedX: 10,
        speedY: -10,
        width: 25,
        height: 25,
        fired: false,
    }

    o.fire = function(){
        o.fired = true;
    }

    o.move = function(){
        if(o.fired){
            //log('move');
            if(o.x < 0 || o.x > 400){
                o.speedX = -o.speedX;
            }
            if(o.y < 0 || o.y > 300){
                o.speedY = -o.speedY;
            }
            //moveLeft
            o.x += o.speedX;
            o.y += o.speedY;
        }
    }

    o.reverse = function(){
        o.speedY *= -1;
    }

    return o;
}
