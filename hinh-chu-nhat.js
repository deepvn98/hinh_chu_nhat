class Rectangle{
    constructor(width,height) {
        this.width=width;
        this.height=height;
    }
    getArea(){
        return this.width*this.height;
    }
    getPerimeter(){
        return (this.width+this.height)*2
    }
    drawRectangle(x,y,width,height){
        let a=document.getElementById("id");
        let ctx=a.getContext("2d");
        ctx.fillStyle="";
        ctx.strokeRect(20,40,this.width,this.height);

    }
}

let rectangle=new Rectangle(300,50);
rectangle.drawRectangle()

document.write("diện tích: "+rectangle.getArea()+" chuvi: "+rectangle.getPerimeter())