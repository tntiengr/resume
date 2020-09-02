function Cat(name){
    this.name= name;
}
Cat.prototype.say= function(){
    console.log('nya...');
}

module.exports= Cat;