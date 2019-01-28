class initGameScene extends Scene{
    constructor(ctx){
        super(ctx);
        this.quantHearts = 16;
        this.hearts = [];
        this.inputs = new InputHandler(this.game.canvas);
        this.points = 0;
        for(var i = 0; i < this.quantHearts; i++){
            this.hearts.push(
                new Heart
                (
                    this.game.getW() * Math.random(), 
                    0, 
                    30,
                    30, 
                    1,
                    this.game.getH()
                )
            )
        }
    }
    draw(ctx){
        super.draw(ctx);
        this.hearts.forEach(function(heart){
            heart.draw(ctx);
        });
        ctx.font = "40px Georgia";
        ctx.fillText("Pontos:" + this.points , this.game.getW() * 0.85, this.game.getH() * 0.05);
    }
    update(){
        var that = this;
        this.hearts.forEach(function(heart){
            heart.update();
        });

        for(var i = 0; i < this.hearts.length; i++){
            if(this.hearts[i].pointColider(that.inputs.getPoint())){
                this.hearts.splice(i,1);
                i++
            }
        }
        this.inputs.anular();
        
    }
}