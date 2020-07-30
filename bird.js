class Bird{
    constructor(x,y){
        this.bird=createSprite(x,y,20,20);
        this.image=loadImage("images/bees.png");

    }
    display(){
        this.bird.addImage("obstacle",this.image);
        if(player1.isTouching(this.bird)){
            this.bird.destroy();
        }
    }


}
