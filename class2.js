class car{
    name
    model
    color
    constructor(a,b,c){
        this.name=a;
        this.model=b;
        this.color=c;
    }
    wheel(){
        return this.name +" Model is:" + this.model +"Color"+ this.color;
    }

    }

let x=new car("bmw","r15","black")
let y=new car("hp","r2","whilte")
let xx = x.wheel();
console.log("xx", xx);
console.log(y)
console.log(x)