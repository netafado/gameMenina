class Scene { 
    constructor(game){
        this.game = game;

    }

    draw(ctx){
        // limpa a tela para redesenhar
        ctx.clearRect(0, 0, this.game.getW(), this.game.getH())
        
    }
    update(){
        console.log('scene update')
    }
}