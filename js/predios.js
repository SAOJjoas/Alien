class Predio{
    constructor(x,y,width,height,image){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:false})
        this.width = width
        this.height = height
        this.image = image
        

        World.add(world, this.body)
    }
    show(){
      var pos = this.body.position
      
      push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
      pop()
    }
    prender(){
        
        this.body.position.x = luzinha.position.x
        this.body.position.y = luzinha.position.y
    }
}
