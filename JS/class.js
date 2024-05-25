class animal{
    constructor(name,legcount,speak){
        this.name=name;
        this.legcount=legcount;
        this.speak=speak;
    }

    speak(){
        console.log(this.speak);
    }
}


let dog=new animal("Dog",4,"Bark");
//console.log(dog);
let cat=new animal("Cat",4,"Meow");
//console.log(cat);
console.log(dog.speak)
cat.speak