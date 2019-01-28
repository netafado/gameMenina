// Objeto principal responsavel por gerenciar as cenas
// criar o canvas
class Game {
    constructor(canvas, w, h){        
        this.canvas = canvas;
        this.canvas.width = this.w = w || 1280;
        this.canvas.height = this.h = h || 768;
        this.ctx = canvas.getContext('2d');
        this.sceneInit = new initGameScene(this);
        this.scenes = [];
        this.scenes.push(this.sceneInit);
        this.currentScene = 0;
        this.dt = 0;

    }
    setScreen(){
        this.canvas.width = this.w = window.innerWidth;
        this.canvas.height = this.h = window.innerHeight;
    }
    init(){
        this.setScreen();
        this.loop()
    }
    getW(){
        return this.w;
    }
    getH(){
        return this.h;
    }
    resizeGameView(w, h){
        this.w = w;
        this.h = h;
    }
    draw(ctx){
        this.scenes[this.currentScene].draw(ctx)       
    }

    // update
    update(){
        this.scenes[this.currentScene].update();
    }
    loop(){
        this.update();
        this.draw(this.ctx)
        requestAnimationFrame(this.loop.bind(this));
    }
}
