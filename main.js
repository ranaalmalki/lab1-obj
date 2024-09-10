

const User ={
name:"Rana",
email:"ranaalmalki12@gmail.com",
id:26,
Available:true,
cheack:function(){
    if(this.Available == true){
        console.log(this.Available+" available");
    }else{
        console.log("not avalibale");
        
    }
},
addres:{
    street:"hamed",
    city:{
        city1:"riyadh",
        city2:"jeddah"

    },
    
    number:2,
},
skils:["problem solvine ","flexiblilty","abilit to work in ateam"]

}

//================
console.log(User);

//================

console.log(User.name);

//===============

console.log(User.id = 6);
console.log(User);


//===============

console.log(delete User.email)
console.log(User);

//===============
 console.log(User.cheack());//not تغيير القسمه وتتاكد


//===============
console.log(User.addres);

//===============

console.log(User.addres.city.city2);


//===============

console.log(User.skils[2]);

//===============
console.log(User.skils.join(", "));










