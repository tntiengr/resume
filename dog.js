function Dog(name){
    this.name= name;
    this.stomach=[];
}

function food(name){
    this.name= name;
    this.vitamin ='B12';
}

Dog.prototype.eat=function(food){ 
    this.stomach.push(food);
}

module.exports=Dog;