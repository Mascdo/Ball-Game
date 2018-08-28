
let log = console.log.bind(console);

let imageFromPath = function(path){
    let img = new Image();
    img.src = path;
    return img;
}


let rectIntersects = function(a, b){
    if(b.y > a.y && b.y < a.y + b.height){
        if(b.x > a.x && b.x < a.x + a.width){
            //log('相撞');
            return true;
        }
    return false;
    }
}
