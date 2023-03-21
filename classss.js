class Test{
    constructor(a, b){
        this.positive = a;
        this.multi =b;
        this.sum = function (){
            let x = this.positive + this.multi;
            return x;
        }
    }
}
let xx = new Test(5,7);
let xxy =xx.sum();
console.log(xxy);