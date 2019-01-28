class Heart extends GameObject{
    constructor(x, y, w, h, vY, maxY){
        super(x, y, w, h);
        this.scale = ( Math.random());
        this.w = 20 + this.scale * w;
        this.h = 20 + this.scale * h ;
        this.vY = -(0.5 + (vY) * (Math.random()));
        this.maxY = maxY;
        this.heartImage = '/images/heart.png',
        this.heart.image = new Image();
        this.heart.image.style.height = heart.height;
        this.heart.image.src = this.heartImage;
        this.ctx.globalAlpha = heart.opacity;

    }
    draw(ctx){
        ctx.fillStyle = "gray";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    update(){
        this.y -= this.vY;
        // retorna para cima caso...
        if(this.y > (this.maxY + this.h))
        {
            this.y = 0 - (100 * Math.random() + this.h);
        }
    }
}