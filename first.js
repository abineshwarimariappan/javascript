/*console.log("First")

a=12;
b="abi";
c=true;

console.log(a+""+b+""+c);

a="Jey";
console.log(a);
*/
/*x=[12,"ram",true,89,"jeye"];

console.log(x);
console.log(x[2]);

x[45]=899;
console.log(x);
console.log(x[9]);*/
/*x=[12,"ganesh",[34,"rejesh",12],"krish"];
console.log(x);
console.log(x[2][1]);

y=[x,15];

console.log(y[1]);*/
/*

function fun1()
{
    console.log("funny");
}
function fun2(a="Anonymous")
{
    console.log("hi"+a);
}

fun3=function()
{
    console.log("Hey!!!!!!");
}

fun1();
fun2("Ram");
console.log(fun2());
fun3();
*/
/*

function call(p)
{
    console.log("line1");
    p("india");
    console.log("line3");
}
call(function(){
    console.log("Data Received")
})*/

/*
function task(subtask,taskname){
    console.log("task started");
    if(taskname=="Compile")
    subtask("JAVA compiler");
    else if(taskname=="interpret")
    subtask("V8 enginee");
    console.log("Task finished");
}

task(function(type){
    console.log("user task with the interprter"+type);},"interpret")


*/
/*

class Test{
    constructor(message){
        this.message=message;
    }

    display(){
        console.log("message "+this.message);
    }
    change(){
        dataChanger(function(data){
            this.message=data;

        }.bind(this))
    }
}

function dataChanger(callback){
    console.log("data processed");
    callback("New Message");
}

obj=new Test("default");
obj.display();
obj.change();
obj.display();

*/
/*
global variable 
function(scope)
const(global,function)
local scope variableesv(let)
*/
/*const a=20;

function man()
{
  var   a=90;
  {
      let a=34;
      console.log(a);
  }
   // var b=100;
    console.log(a);
}
//console.log(a);

man();
//console.log(a);
//console.log(b);
*/
/*
person={sno:12,name:"Ramesh"};
console.log(person);
person.city="Chennai";
console.log(person);
person.display=function(){
    console.log(this.sno+" "+this.name+" "+this.city);
}
console.log(person);
person.display();
*/
/*
setInterval(function()
{
    console.log(Math.random()*100);
},2000);*/

function Apicall()
{
    setTimeout(
        function(){
            return "Data received";
        },3000
    );
}

//data =Apicall();
//console.log(data);


function apicall(){
    return new Promise(function(resolve,reject)
    {
        setTimeout(
            function(){
                resolve("Data received");
            },3000
        );

    });
}

data=apicall();
console.log(data);

data.then(
    function(x){console.log(x);
    console.log(data);},
    function(error){console.log(error)}
    
);

