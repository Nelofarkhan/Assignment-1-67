//Task 1
var city=prompt("Enter your city");
if(city==="Karachi")
{
    alert("welcome to the city of lights!");
}

//Task 2

var gender=prompt("Enter your Gender");
if(gender=="Male")
{
    alert("Good Morning Sir!");
}

if(gender==="female")
{
     alert("Good morning maam");
}
//Task 3

var signals=prompt("Enter Signal colour");
if(signals=="red")
{
    alert("Must Stop");
}

if(signals=="yellow")
{
     alert("Ready to move");
}

if(signals=="green")
{
     alert("Move Now");
}
//Task 4


var remainingFuel=+prompt("Enter your remaining fuel in litre");

if(remainingFuel<0.25)
{
    alert("Please refill the fuel in your car");
}

//Task 5
var a=4;
if(++a === 5)
{
    alert("given condition for variable a is true");
}
 
var b=82;
if(b++ === 83)
{
    alert("given condition for variable b is true");
}

var c=12;
if(c++ === 13)
{
    alert("Condition 1  is true");
}
if(c===13)
{
    alert("condition 2 is true");
}
if(++c<14)
{
     alert("condition 3 is true");
}
if(c===14)
{
    alert("condition 4 is true");
}

var materialCost=20000;
var laborCost=2000;
var totalCost=materialCost+laborCost;
if(totalCost===materialCost+laborCost)
{
     alert("The Costs Equal ");
}




if(true)
{
    alert("true");
}

if(false)
{
     alert("false");
}

if("car"<"cat")
{
    alert("car is smaller than cat");
}

//Task 6

var subject1=+prompt("enter marks of subject 1");
var subject2=+prompt("enter marks of subject 2");
var subject3=+prompt("enter marks of subject 3");
var totalMarks=+prompt("Enter total marks");


var gainmarks=subject1+subject2+subject3;
var percentage=(gainmarks/totalMarks)*100;
document.write("<h1>" + "Marks Sheet" +"</h1>" +"<br>"+"<br>"+"<br>");


document.write("Total Marks:" +totalMarks +"<br>" );
document.write("Marks Obtain:" + gainmarks +"<br>" );
document.write("percentage:"+percentage+"%" +"<br>" );

if(percentage>=80)
{
    document.write("Grade: A+" + "<br>" );
    document.write("Remarks:Excellent");
}
if(percentage>=70 && percentage<80)
{
    document.write("Grade: A" + "<br>" );
    document.write("Remarks:Good");
}
if(percentage>=60 &&percentage<70)
{
    document.write("Grade: B" + "<br>" );
    document.write("Remarks:You need to improve");
}
if(percentage<60)
{
    document.write("Grade: Fail" + "<br>" );
    document.write("Remarks:Sorry ");
}

//Task 7
var answer=6;
var userInput=+prompt("Enter number to guess secret number");
if(userInput===answer)
{
     alert("Bingo ! Correct answer");
}

if(userInput===7)
{
     alert("Close enough to the correct answer");
}

//Task 8

var numCheck=+prompt("Enter number to check it is divisible by 3 or not");
if(numCheck%3===0)
{
    alert("Number is divisable by 3");
}

//Task 9

var evenOdd=+prompt("Enter number to check it is even or odd");

if(evenOdd%2===0)
{
    alert("number is even");
}

if(evenOdd%2!==0)
{
     alert("number is odd");
}
//Task 10

var t=+prompt("Enter temperature");

if(t>40)
{
     alert("it is too hot outside");
}

if(t>30 )
{
     alert("The weather today is normal ");
}

if(t>20 )
{
     alert("Todays weather is cool ");
}

if(t>10 )
{
     alert("OMG! Todays Weather is so cool!");
}

//Task 11
var num1=+prompt("Enter your first number");
var num2=+prompt("Enter your second number");
var operator=prompt("Enter your operator");

if(operator==="+")
{
    alert(num1+num2);
}
if(operator==="-")
{
    alert(num1-num2);
}
if(operator==="*")
{
    alert(num1*num2);
}
if(operator==="/")
{
    alert(num1/num2);
}
if(operator==="%")
{
    alert(num1%num2);
}