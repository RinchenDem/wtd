let cat = { name: "pusy",color:"golden brown:",age:"3"};
let dog = new Object();
dog.bread = "husky";
dog.name = "jacky";
dog.isVaccinated = true;
document.getElementById("para1").innerHTML="bread:" + dog.bread
console.log(dog);
dog.age = 5;
console.log(dog);

const person = {
    fname: "tashi",
    lname: "yangchen",
    age: 27,
    fullname: function () {
        return this.fname + "" + this.lname
    }
};
console.log(person)
document.getElementById("para1").innerHTML = person.fullname();
