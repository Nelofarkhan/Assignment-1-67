//Task 1

var num1=4;
var num2=5;
var total;
var total=num1+num2;
document.write("<h3>The sum of "+" "+num1+" "+"and"+" "+
num2+" "+"is" +" "+total+"<h3/>"+"<br>");

//Task 2

var num3=3;
var num4=4;
var total;
var total=num3*num4;
document.write("<h3>The multiplication of" + " " + num3 + " "+ "and"
+" "+num4+ " "+"is"+" "+" "+ " "+total+"</h3>"+"<br>");


var num5=2;
var num6=8;
var total;
var total=num5/num6;
document.write("<h3>The Division of" + " " + num5 + " "+ "and"
+" "+num6+ " "+"is"+" "+" "+ " "+total+"</h3>"+"<br>");


var num5=5;
var num6=8;
var total;
var total=num5-num6;
document.write("<h3>The Substraction of" + " " + num5 + " "+ "and"
+" "+num6+ " "+"is"+" "+" "+ " "+total+"</h3>"+"<br>");
//Task 3
var variable;


document.write(" <h3>value of variable after declaration is" +" "+ variable +"</h3>" + "<br>");
variable=2;

document.write(" <h3> Initital value  " +" "+ variable +"</h3>" + "<br>");

variable++;
document.write(" <h3> Value after increment " +" "+ variable +"</h3>" + "<br>");

variable=variable+7;

document.write(" <h3>  value after addition is " +" "+ variable +"</h3>" + "<br>");

variable--;

document.write(" <h3> Value after decrement is  " +" "+ variable +"</h3>" + "<br>");

variable=variable%6;


document.write(" <h3> The remainder is  " +" "+ variable +"</h3>" + "<br>");


//Task 4

var ticketPrice="600";
var total= ticketPrice*5;

document.write(" <h3> The  cost to buy 5 tickets  to a movie is " +" "+ total+"PKR" +"<br>" +"<br>" );
//Task 5


document.write("2" + "x" +"1" + "=" + 2*1 + "<br>");
document.write("2" + "x" +"2" + "=" + 2*2 + "<br>");
document.write("2" + "x" +"3" + "=" + 2*3 + "<br>");
document.write("2" + "x" +"4" + "=" + 2*4 + "<br>");
document.write("2" + "x" +"5" + "=" + 2*5 + "<br>");
document.write("2" + "x" +"6" + "=" + 2*6 + "<br>");
document.write("2" + "x" +"7" + "=" + 2*7 + "<br>");
document.write("2" + "x" +"8" + "=" + 2*8 + "<br>");
document.write("2" + "x" +"9" + "=" + 2*9 + "<br>");
document.write("2" + "x" +"10" + "=" + 2*10 + "<br>"+"<br>" );
//Task 6

var celcius;

var fahrenheit=70;

celcius=( 70- 32) * 5/9;
document.write( "The " +" "+ fahrenheit+"F" +" " +"is " +celcius+"c" +"<br>");


celcius=25;

fahrenheit=0;

fahrenheit=( celcius*9/5) +32;

document.write( "The " +" "+ celcius+"C" +" " +"is " +fahrenheit+"F" +"<br>"+"<br>");
//Task 7

var item1Price=50;
 var item2Price=100;
 var item1Quantity=5;
 var item2Quantity=11;
 var shippingCharges=200;
 var totalCost;

 totalCost=(item1Price*item1Quantity)+(item2Price*item2Quantity)+shippingCharges;

 document.write("<h3> Price of item 1 is " + " "+ item1Price +"<br>");


 
 document.write("<h3> Quantity  of item 1 is " + " "+ item1Quantity +"<br>" +"</h3>");
 
 document.write("<h3> Price of item 2 is " + " "+ item2Price +"<br>"  +"</h3>");

 
 document.write("<h3> Quantity of item 2 is  " + " "+ item2Quantity +"<br>"  +"</h3>");

 
 document.write("<h3> Shipping charges  " + " "+shippingCharges+"<br>" +"<br>"  +"</h3>");



 
 document.write("<h3> Total cost of your order is  " + " "+ totalCost +"<br>" +"<br>"  +"</h3>");
//Task 8
var totalMarks=980;
var obtainMarks=804;
var percentage=(obtainMarks/totalMarks)*100;

document.write("<h1> Marks Sheet " +"<br>" +"<br>" +"<br>" +"</h1>");

document.write( "<h4> Total marks :" +" "+totalMarks +"</h4>");
document.write( "<h4> Obtain marks  :" +" "+obtainMarks +"</h4>");
document.write( "<h4> Total marks :" +" "  +percentage +"</h4>" +"<br>" + "<br>");

//Task 9

var usDollars=20;
var saudiRiyal=27;
var conversion ;
 conversion=(20*104.80) +( 27*28);

 document.write("<h1> CURRENCY IN PKR " +"</h1>" +"<br>" + "<br>")

 document.write("Total currency is PKR :" +" "+ conversion +"<br>" +"<br>" );
//Task 10

var arithmatic= (5 + 5 * 10 ) /2;
//Task 11


var currentYear=2020;
var birthYear=1995;
var age= currentYear-birthYear;

document.write("<h1> Age Calculator" +"<br>" +"<br>" +"</h1>")

document.write("current year :" + "" + currentYear +"<br>");
document.write("birth year :" + "" + birthYear +"<br>");
document.write("Your Age is  :" + "" + age +"<br>" +"<br>" +"<br>");
//Task 12

var radius=20;
var circumference= 2*3.142*radius;
var area= 3.142 *( radius*radius);

document.write( "<h1>" +" The Geometrizer" + "</h1>" +"<br>" +"<br>")

document.write(" Radius of a circle is :" + "" + radius +"<br>");
document.write(" The circumference is :" + "" + circumference +"<br>");
document.write(" The Area is  :" + "" + area +"<br>" +" <br>" + "<br>");

//Task 13

var favouritesnack="layschips";
var currentage=24;
var maxage=25;
var estimatedAmount=5;
var totalRestofLife;

totalRestofLife=(maxage-currentage)*estimatedAmount;

document.write("Favourite Snack:"+" "+ favouritesnack+"<br>");
document.write("current age:"+currentage+"<br>");
document.write("Estimatedmaxage:"+maxage+"<br>");
document.write("Amount of snacks per day"+estimatedAmount+"<br>");
document.write("your will need " +" " + totalRestofLife +" "+  favouritesnack +" " +"to last you until the ripe old age of"+" " +maxage);