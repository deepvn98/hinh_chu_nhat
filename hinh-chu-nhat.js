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
}
let rectangle=new Rectangle(5,8);
document.write("diện tích: "+rectangle.getArea()+" chuvi: "+rectangle.getPerimeter()
)