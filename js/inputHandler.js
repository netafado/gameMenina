class InputHandler{
    constructor(dom){
        this.x = null;
        this.y = null;
        this.dom = dom;
        var that = this;
        dom.addEventListener('click', function(e){
            that.setPoints(e);
        })
        
    }
    setPoints(e){        
        this.x = e.clientX - this.dom.offsetLeft;
        this.y = e.clientY - - this.dom.offsetTop;
    }
    getPoint(){
        return {x: this.x, y: this.y}
    }
    anular(){
        this.x = null;
        this.y = null;      
    }
}