class GameObject {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }

    pointColider(point){
        if(!point.x || !point.y)
            return false
        console.log(point)
        console.log("y:", point.y > this.y && point.y < (this.y + this.h));
        if(point.x > this.x && point.x < (this.x + this.w))
        {
            console.log('colidiu em x');
            if(point.y > this.y && point.y < (this.y + this.h))
            {
                console.log('colidiu em x e y');
                return true
            }else
            {
                return false
            }
        }
        return false
    }
}