let Block = function(position){
    // position是  [x, y]
    let p = position;
    let image = imageFromPath('block.png');
    let o = {
        image: image,
        x: p[0],
        y: p[1],
        width: 50,
        height: 20,
        alive: true,
        lifes: p[2] || 1,
    }

    o.killed = function(){
        o.lifes--;
        if(o.lifes < 1){
            o.alive = false;
        }
    }

    o.collide = function(ball){
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o));
    }
    return o;
}
