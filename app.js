// Chap# 1

// alert("Error! Please Enter a Valid Password")
// alert("Welcome To JS Land... \nHappy Coding!")      
// alert("Welcome To JS Land")      
// alert("Happy Coding! \nPrevent this page from creating additional dialogs")


// Chap # 2

// var Fullname = prompt("Enter your Fullname");
// var age = prompt("Enter Your Age")
// alert("Your Name is " + Fullname)
// alert("Your Age is" + age)
// alert("Certified Mobile Application Developer")
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
// var emails = prompt("Enter Your emails")
// alert("Your Email Address is" + emails)
// alert("I am ttying to learn from the book a smarter way to learn javascript")


// Chap # 3

// alert("I am 18 years old")
// var visit = prompt("How many times do you have visited this site")
// alert("You have visited this site" + visit + "times")
// var birthyear = prompt("Enter Your Birth Year")
// alert("You born in" + birthyear)
// var name = prompt("Enter your name")
// var Pname = prompt("Enter your Product Name")
// var ordered = prompt("How many" + Pname + "You want To order?")
// document.write(name + "" + "You ordered" + "" + ordered + '' + Pname + '' + "Thanks For shopping on www.ARClothing.com ")


// Chap # 4

// document.write("Variable names can only contain numbers ,dollar sign, letters, and underscores For example $my_1stVariable<br/>")
//         document.write("Variables must begin with a letter, $ or _  For example $name, _name or name <br/>")
//         document.write("Variable names are case sensitive <br/>")
//         document.write("Variable names should not be JS keywords <br/>")


// Chap # 5


// var val1 = prompt("Enter Your First Value")
// var Sign = prompt("Enter Your Operator")
// var val2 = prompt("Enter Your Second Value")

// console.log(val1 + Sign + val2)
// if (Sign === "+") {
//     alert((+val1) + (+val2))
// }
// else if (Sign === "-") {
//     alert(val1 - val2)
// }
// else if (Sign === "*") {
//     alert(val1 * val2)
// }
// else if (Sign === "/") {
//     alert(val1 / val2)
// }
// if (Sign === "%") {
//     alert(val1 / val2 * 100 + "%")
// }


// var price = ("Movie Ticket Price=500 PKR")
// alert(price)
// var tic = prompt("How Many Tickets Do You Want?")
// alert("Total Cost" + " " + 500 * tic + "RS")

// for (var a = 1; a <= 10; a++) {
//     document.write("9" + "x" + a + "=" + 9 * a + "<br>")
// }

// var c = +prompt("enter temp in Celsius");
// var f = (c * 9 / 5) + 32;
// document.writeln(c + " Celsius is " + f + " in Fahrenheit");
// f = +prompt("enter temp in Fahrenheit");
// c = (f - 32) * 5 / 9;
// document.writeln("<br>" + f + " Fahrenheit is " + c + " in Celsius");

// var a = alert("Price of Items One is 950")
// var c = +prompt("How many you want that item?")
// var b = alert("Price of Items two is 550")
// var d = +prompt("How many you want that item?")
// var e = alert("Shipping charges is 1000 RS")
// document.write("Price of Items One is 950" + "<br>")
// document.write("Ordered Items" + "=" + c + "<br>")
// document.write("Price of Items One is 550" + "<br>")
// document.write("Ordered Items" + "=" + d + "<br>")
// var f = document.write("Total Cost" + "=" + " " + (950 * c + 550 * d + 1000) + "RS")

// var tm = prompt("Enter Your Total Marks")
// var mo = prompt("Enter Your Marks Obtained")
// document.write("Total Marks =" + tm + "<br>")
// document.write("Marks Obtained =" + mo + "<br>")
// document.write("Percentage =" + (mo / tm * 100) + "%" + "<br>")

// var cur = +prompt("Enter Your US Currency to convert", "Write in numbers")
// var cur1 = +prompt("Enter Your Saudi Currency to convert", "Write in numbers")
// alert("Total Currency in PKR" + " " + (cur * 104.80 + (cur1 * 28)))

// var pr = +prompt("Enter any Number")
// alert("Answer is" + ' ' + (pr + 5 * 10 / 2))

// var age = +prompt("AGE CALCULATOR", "Enter Your Current year eg 2020")
// var age1 = +prompt("AGE CALCULATOR", "Enter Your Birth year eg 2020")
// document.write("Current Year" + ' ' + age + "<br>")
// document.write("Birth Year" + ' ' + age1 + "<br>")
// document.write("Your Age is" + ' ' + (age - age1) + "<br>")

// var rad = +prompt("Enter Radius")
// document.write("Radius Of a Circle is" + " " + rad + "<br>")
// document.write("The Circumference is" + " " + (2 * 3.142 * rad) + "<br>")
// document.write("The Area is" + " " + (rad * rad * 3.142) + "<br>")

// var fs = prompt("Enter Your Favorite Snacks")
// var cage = prompt("Enter Your Current age")
// var eage = prompt("Enter Your Estimated Maximum Age")
// var eat = prompt("Enter amount of snacks per day you eat")
// document.write("Favorite Snacks" + " " + fs + "<br>")
// document.write("Current Age" + " " + cage + "<br>")
// document.write("Estimated Maximum Age" + " " + eage + "<br>")
// document.write("Amount Of Snacks per day" + " " + eat + "<br>")
// document.write("You will need" + " " + (eage - cage) * eat + " " + "to last you until the ripe old age of" + " " + eage + "<br>")

// Chap # 6 TO 9

// var a = 10
// document.write("Results" + "<br>")
// document.write("The value of a is : 10" + "<br>")
// document.write("The value of ++a is" + (++a) + "<br>" + "<br>")

// var a = 11
// document.write("The value of a is : 11" + "<br>")
// document.write("The value of a++ is" + (a++) + "<br>" + "<br>")
// var a = 11
// document.write("The value of a is : 11" + "<br>")
// document.write("The value of --a is" + (--a) + "<br>" + "<br>")
// var a = 10
// document.write("The value of a is : 10" + "<br>")
// document.write("The value of a-- is" + (a--) + "<br>" + "<br>")

// var a = 2, b = 1;
// var results = document.write("Results =" + (--a - --b + ++b + b--) + "<br>");
// document.write("--a" + " " + "= " + "1" + "<br>");
// document.write("--a - --b" + " " + "=" + " " + "1" + "-" + "0" + "<br>");
// document.write("--a - --b + ++b" + " " + "=" + " " + "1" + "-" + "0" + "+" + "1" + "<br>");
// document.write("--a - --b + ++b +b--" + " " + "=" + "1" + "-" + "0" + "+" + "1" + "+" + "1" + "<br>");

// var greet = prompt("Enter Your Name")
// alert("Welcome" + " " + greet + " " + "To Our Page")

// var n = prompt("Enter The Table Number You Want To See")
// document.write("Table of" + " ")
// document.write(n);
// document.write("<br>");
// document.write("=======================");
// document.write("<br>");
// for (var s = 1; s <= 10; s++) {
//     var t = n * s
//     document.write(n);
//     document.write(" " + "x");
//     document.write(" " + s)
//     document.write(" " + "=")
//     document.write(" " + t)
//     document.write("<br>")
// }
// document.write("=======================" + "<br>");

// var eng = +prompt("Enter Total Marks Of English")
// var engom = +prompt("Enter Obtained Marks Of English")
// var math = +prompt("Enter Total Marks Of Math")
// var mathom = +prompt("Enter Obtained Marks Of Math")
// var ur = +prompt("Enter Total Marks Of Urdu")
// var urom = +prompt("Enter Obtained Marks Of Urdu")
// document.write("Subjects" + " " + " Total Marks" + " " + " Obtained Marks" + " " + "Percentage" + "<br>")
// document.write("English" + " " + eng + " " + engom + " " + (engom / eng * 100) + "%" + "<br>")
// document.write("Math" + " " + math + " " + mathom + " " + (mathom / math * 100) + "%" + "<br>")
// document.write("urdu" + " " + ur + " " + urom + " " + (urom / ur * 100) + "%" + "<br>")
// var a = document.write(eng + math + ur)
// var b = document.write(engom + mathom + urom)
// document.write((b / a * 100) + "%")

// Chap # 7 To 9

// var city = prompt("Enter Your City Name")
// if (city === "karachi") {
//     alert("Welcome to the city of lights")
// }
// else {
//     alert("Nice City always be the responsible citizen")
// }

// var gender = prompt("Enter Your Gender")
// if (gender === "male") {
//     alert("Good Morning Sir")
// }
// else if (gender === "female") {
//     alert("Good Morning Ma'am")
// }
// else {
//     alert("oops Something wrong")
// }

// var traffic = prompt("Enter one Color of the traffic signal")
// if (traffic === "red") {
//     alert("Must Stop")
// }
// else if (traffic === "green") {
//     alert("Move Now")
// }
// else if (traffic === "yellow") {
//     alert("Ready to Move")
// }
// else {
//     alert("oops You Don't Know The colors")
// }

// var fuel = +prompt("How much do you have in your car ")
// if (fuel <= "0.25") {
//     alert("Please refill the fuel in your car")
// }
// else {
//     alert("No Need of Refueling")
// }

// var a = 4; if (++a === 5) { alert("given condition for variable a is true"); }
// var b = 82;
// if (b++ === 83) { alert("given condition for variable b is true"); }
// var c = 12;
// if (c++ === 13) { alert("condition 1 is true"); }
// if (c === 13) { alert("condition 2 is true"); }
// if (++c < 14) { alert("condition 3 is true"); }
// if (c === 14) { alert("condition 4 is true"); }
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
// if (true) { alert("True"); }
// if (false) { alert("False"); }
// if ("car" < "cat") { alert("car is smaller than cat"); }

// var ob = +prompt("Enter obtained Marks")
// var tt = +prompt("Enter Total Marks")
// document.write("Total Marks" + " " + "=" + tt + "<br>")
// document.write(" Marks Obained" + " " + "=" + ob + "<br>")
// var per = (ob / tt * 100)
// document.write("Percentage" + " " + "=" + per + "%" + "<br>")
// if (per >= 80) {
//     document.write("Grade" + " " + "=" + "A-One" + "<br>")
// }
// else if (per >= 70) {
//     document.write("Grade" + " " + "=" + "A" + "<br>")
// }
// else if (per >= 60) {
//     document.write("Grade" + " " + "=" + "B" + "<br>")
// }
// else if (per <= 60) {
//     document.write("Grade" + " " + "=" + "Fail" + "<br>")
// }
// else {
//     alert("Something went wrong")
// }
// if (per >= 80) {
//     document.write("Remarks" + " " + "=" + "Excellent" + "<br>")
// }
// else if (per >= 70) {
//     document.write("Remarks" + " " + "=" + "Good" + "<br>")
// }
// else if (per >= 60) {
//     document.write("Remarks" + " " + "=" + "You Need To Improve" + "<br>")
// }
// else if (per <= 60) {
//     document.write("Remarks" + " " + "=" + "Sorry" + "<br>")
// }
// else {
//     alert("Something went wrong")
// }
// var secret = 10
// var guess = +prompt("Guess the secret number")
// if (guess === secret) {
//     alert("Bingo! Correct answer")
// }
// else if (guess === 9) {
//     alert("Close enough to the correct answer")
// }
// else {
//     alert("Sorry You Loose Try Again")
// }

// var a = +prompt("Enter any number ")
// if (a % 3 == 0) {
//     alert("It is divisible by 3")
// }
// else {
//     alert("It is not divisible by 3")
// }
// var b = +prompt("Enter Number")
// if (b % 2 == 0) {
//     alert("Even")
// }
// else {
//     alert("odd")
// }
// var tem = +prompt("Enter Temparature")
// if (tem >= 40) {
//     alert("It is too hot outside")
// }
// else if (tem >= 30) {
//     alert("The Weather today is Normal")
// }
// else if (tem >= 20) {
//     alert("Today’s Weather is cool")
// }
// else if (tem >= 10) {
//     alert("OMG! Today’s weather is so Cool")
// }
// else if (tem <= 10) {
//     alert("its so Cooled")
// }
// else {
//     alert("Something went wrong")
// }

// var val1 = prompt("Enter Your First Value")
// var Sign = prompt("Enter Your Operator")
// var val2 = prompt("Enter Your Second Value")

// console.log(val1 + Sign + val2)
// if (Sign === "+") {
//     alert((+val1) + (+val2))
// }
// else if (Sign === "-") {
//     alert(val1 - val2)
// }
// else if (Sign === "*") {
//     alert(val1 * val2)
// }
// else if (Sign === "/") {
//     alert(val1 / val2)
// }
// if (Sign === "%") {
//     alert(val1 / val2 * 100 + "%")
// }

// Chap # 12 To 13

// var input = prompt("Enter any value.");
// input = input.charCodeAt(0);
// if (input >= 65 && input <= 90){
//     alert("It's a Capitial Letter");
// }
// else if(input >= 97 && input <= 122){
//     alert("It's a Small Letter");
// }
// else if(input >= 48 && input <= 57){
//     alert("It's a Number");
// }
// else{
//     alert("Invalid Entry!");
// }

// var 1Num = +prompt("Enter 1st value.");
// var 2Num = +prompt("Enter 2nd value.");
// if(1Num > 2Num){
//     alert("first value is greater");
// }
// else if(2Num > 1Num){
//     alert("second value is greater");
// }
// else if(2Num == 1Num){
//     alert("both are equal");
// }
// else{
//     alert("invalid entry");
// }

// var inputNum = +prompt("Enter any number");
// if (inputNum < 0){
//     alert("negative number");
// }
// else if (inputNum > 0){
//     alert("positive number");
// }
// else if (inputNum == 0){
//     alert("number is zero");
// }
// else{
//     alert("Invalid entry");
// }

// var vowel = prompt("Enter one letter");
// vowel = vowel.charCodeAt(0);
// if (vowel == 65 || vowel == 69 || vowel == 73 || vowel == 79 || vowel == 85){
//     alert("its a vowel");
// }
// else if (vowel == 97 || vowel == 101 || vowel == 105 || vowel == 111 || vowel == 117){
//     alert("its a vowel");
// }
// else{
//     alert("Not a vowel");
// }

// var pwd = "AR1235";
// var pwdEntry = prompt("Enter password.");
// if (pwd === pwdEntry){
//     alert("Correct password");
// }
// else if (pwd != pwdEntry){
//     alert("Incorrect password");
// }
// else{
//     alert("Please enter password");
// }

//INCORRECT CODE
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// CORRECT CODE
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else {
// greeting = "Good evening";
// alert(greeting);
// }


// var time = +prompt("Enter time in 24 hour format i.e: 0-24");
// if ((time >= 0 && time < 6) || (time >= 19 && time < 24) ){
//     alert("Good Night!\nThe time is: "+time);
// }
// else if (time >= 6 && time < 12){
//     alert("Good Morning!\nThe time is: "+time);
// }
// else if (time >= 12 && time < 17){
//     alert("Good Afternoon!\nThe time is: "+time);
// }
// else if (time >= 17 && time < 19){
//     alert("Good Evening!\nThe time is: "+time);
// }
// else{
//     alert("Invalid time.");
// }

// Chap # 14 To 16

// var StudentdNames = [];

// var StudentdNames1 = new Array();

// var stringArray = ["Abdul Rehman","Moin","Immad"];
// alert("Welcome "+stringArray[1]);

// var intArray = [0,1,2,3,4,5];
// alert("index zero has "+intArray[0]);

// var booleanArray = [true,false];
// alert(booleanArray[1]);

// var mixedArray = [0, "FirstIndex", 2, "ThirdIndex"];
// alert(mixedArray[0]);
// alert(mixedArray[1]);

// var QualificationArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.writeln("Qualifications:".bold()+"<br>"+"1) "+QualificationArray[0]
// +"<br>"+"2) "+QualificationArray[1]+"<br>"+"3) "+QualificationArray[2]
// +"<br>"+"4) "+QualificationArray[3]+"<br>"+"5) "+QualificationArray[4]
// +"<br>"+"6) "+QualificationArray[5]+"<br>"+"7) "+QualificationArray[6]
// +"<br>"+"8) "+QualificationArray[7]);

// var names = ["hasan","Younus","Waqar"];
// var score = [320,230,430];
// var TotalMarkss = 500;
// var percIndZero = (score[0]/TotalMarkss)*100, percIndOne = (score[1]/TotalMarkss)*100, percIndTwo = (score[2]/TotalMarkss)*100;
// document.writeln("The score of "+names[0]+" is "+score[0]+" and Precentage is: "+percIndZero+"%"+"<br>"
// +"The score of "+names[1]+" is "+score[1]+" and Precentage is: "+percIndOne+"%"+"<br>"
// +"The score of "+names[2]+" is "+score[2]+" and Precentage is: "+percIndTwo+"%");

// var colors = ["Blue ","Red "," Yellow"," Green"];
// document.writeln("Colors Array".bold()+"<br>"+"<br>"+"Initial array colors: "+colors);
// var question = prompt("What color do you want to put in the begining?");
// colors.unshift(question);
// document.writeln("<br>"+"<br>"+"After adding new color is the begining: "+colors);
// var question = prompt("What color do you want to put in the End?");
// colors.push(question);
// document.writeln("<br>"+"<br>"+"After adding new color is the End: "+colors);
// var question = prompt("Add one more color in the begining");
// colors.unshift(question);
// var question = prompt("One more color please :D");
// colors.unshift(question);
// document.writeln("<br>"+"<br>"+"After adding 2 new colors is the begining: "+colors);
// colors.shift(question);
// document.writeln("<br>"+"<br>"+"After removing first color from the begining: "+colors);
// colors.pop(question);
// document.writeln("<br>"+"<br>"+"After removing first color from the end: "+colors);

// var StudentsScore = [];
// var ArrSize = +prompt("Enter number of subjects");
// for(var i=0; i<ArrSize; i++) {
// 	StudentsScore[i] = prompt('Enter marks for subject #' + (i+1));
// }
// document.writeln("Student Scores: ".bold()+StudentsScore);
// document.writeln("<br>"+"Student Scores in ascending order: ".bold()+StudentsScore.sort());

// var cities = ["karachi","lahore","islamabad","peshawar","quetta"];
// var selectedCities = [];
// selectedCities = cities.slice(2, 4);
// document.writeln("The cities are: ".bold()+cities);
// document.writeln("<br>"+"Selected cities are: ".bold()+selectedCities);

// var arr1 = ["This", "is", "my","cat"];
// document.writeln("This is array: "+arr1);
// document.write("<br>"+"This is string: "+ arr1.join(" "));

// var fifo = [];
// fifo.push("1st element");
// fifo.push(" 2nd element");
// fifo.push(" 3rd element");
// fifo.push(" 4th element");
// fifo.push(" 5th element");
// document.writeln(fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"1st element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"2nd element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"3rd element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"4th element removed: "+"<br>"+fifo);
// fifo.shift();
// document.writeln("<br>"+"<br>"+"5th element removed: "+"<br>"+fifo); 

// var lifo = [];
// lifo.push("1st element");
// lifo.push(" 2nd element");
// lifo.push(" 3rd element");
// lifo.push(" 4th element");
// lifo.push(" 5th element");
// document.writeln(lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"5th element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"4th element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"3rd element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"2nd element removed: "+"<br>"+lifo);
// lifo.pop();
// document.writeln("<br>"+"<br>"+"1st element removed: "+"<br>"+lifo);

// var manufacturers = ["Apple"," Samsung"," Nokia","HTC"];
// document.writeln("Here are some Mobile device manufactures:".bold()+"<br>"+"<br>");
// document.writeln("No.1: "+manufacturers[0]+"<br>");
// document.writeln("No.2: "+manufacturers[1]+"<br>");
// document.writeln("No.3: "+manufacturers[2]+"<br>");
// document.writeln("No.4: "+manufacturers[3]+"<br>");
// document.writeln("No.5: "+manufacturers[4]+"<br>");

// Chap# 17 to 20

// var twoDArray = [[],[]];

// let matrix = [[0, 1, 2, 3],[ 1, 0, 1, 2],[ 2, 1, 0, 1]];
//   alert(matrix[0]+"\n"+matrix[1]+"\n"+matrix[2]);

// for(var x =1 ; x <=10 ; x++){
//     document.writeln(x+"<br>");
// }

// var a = +prompt("Enter table number");
// var userTime = +prompt("Enter how many time you want to multiply");
// for(b = 1; b<=userTime; b++){
//     c=(a*b);
//     document.writeln(a+ " x " +b+ " = " +c +"<br>");
// }

// var zArr = ["mango", "banana", "apple", "orange", "strawberry"];
// document.writeln("Elements of array are:".bold()+"<br>");
// for( var z = 0; z<zArr.length ; z++){
//     document.writeln(zArr[z]+"<br>");
// }
// for(var y = 0; y<zArr.length; y++){
//     document.writeln("<br>"+"Element at index "+y+" is "+zArr[y]+"<br>");
// }

// var count = +prompt("Where You want to end counting");
// document.writeln("Counting: ".bold()+"<br>");
// for(var c = 1; c<=count; c++){
//     document.writeln(c);
// }
// document.writeln("<br>"+"Reversed counting: ".bold()+"<br>");
// for(var r = count; r >0; r--){
//     document.writeln(r);
// }
// document.writeln("<br>"+"Even numbers: ".bold()+"<br>");
// for(var e = 0; e< c; e++){
//     if(e % 2 === 0){
//         document.writeln(" "+e+" ");
//     }
// }
// document.writeln("<br>"+"Odd numbers: ".bold()+"<br>");
// for(var o = 0; o< c; o++){
//     if(o % 2 != 0){
//         document.writeln(" "+o+" ");
//     }
// }
// document.writeln("<br>"+"Series: ".bold()+"<br>");
// for(var e = 1; e< c; e++){
//     if(e % 2 === 0){
//         document.writeln(" "+e+"k");
//     }
// }


//  var arrItem = ["biscuit", "cake", "chips", "cookie", "patty"]
// var que = prompt("Welcome to our bakery! Please enter the item you want. :)");
// que.toLowerCase();
// var find = arrItem.includes(que);
// if (find == true){
//     alert("Yes "+que+ " is available");
// }
// else{
//     alert("Sorry! we dont have "+que);
// }

// var LargeNumberArr = [24, 53, 78, 91, 12];
// alert(Math.max(...LargeNumberArr)+" is the largest number");

// var SmallNumberArr = [24, 53, 78, 91, 12];
// alert(Math.min(...SmallNumberArr)+" is the smallest number");

// document.writeln("Multiplies of 5:".bold());
// for (var x=1; x <= 100; x++){
// if( x % 5 == 0 ){
//     document.writeln(" "+x);
//     }
// }


// --------------------------------------The End----------------------------------------------------