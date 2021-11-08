// Chapter ARRAY

// Question:1

// var name =[];

// var name = ["Hamza","Ali","Khan"];

// document.write("St Name: " + name)

// Question:2

// var stname = [];

// var stname ="Hamza"
// document.write(stname);


// Question:3

// var st=[]
// var st ="Hamza"
// document.write(st);

// Question:4

// var num=[]
// var num = [20,30,40,50]
// document.write(num[2]);


// Question:5

// var bool = [];
// var bool = true
// document.write(bool);

// Question:6


// var mix  = ["Hamza", 20 , male]

// document.write(mix[1]);

//QUESTION  7

// document.write("QUALIIFICATONS; <br>")
// document.write("<br>")
// document.write("<br>")


// var quaLif=["1)SSC<br> 2)HSC<br>  3)BCS<br>  4)BS<br>  5)BCOM<br> 6)MS<br> 7)M. Phil.<br> 8)PhD<br>"]
// document.write(quaLif)
// document.write("<br>")

//QUESTION  8

// var st = ["Hamza", "Ali", "Khan"]
// var stscr = ['500', '400', '300']
// var stper = ['99.9 ', '80', '70']

// document.write("Score of" +" "+st[0] + " " +"is" + " ", stscr[0] +".", "Percentage"+ " "+stper[0] + "% <br>")
// document.write("Score of" +" "+st[1] + " " +"is" + " ", stscr[1] +".", "Percentage"+ " "+stper[1] + "% <br>")
// document.write("Score of" +" "+st[2] + " " +"is" + " ", stscr[2] +".", "Percentage"+ " "+stper[2] + "%")


//QUESTION  9
//A
// var clrname = ["Black", "Red","Pink","White","Purple", "Orange"];
// var clradd=prompt("What colour u wanna add in the begining?");

// clrname.unshift(clradd)
// document.write("<b>ADD COLOUR IN THE BEGINING</b>" + " "+ clrname)


//B


// var clrname = ["Black", "Red","Pink","White","Purple", "Orange"];
// var clradd=prompt("What colour u wanna add to the last?");

// clrname.push(clradd)
// document.write("<b>ADD COLOUR IN THE BEGINING</b>" + " "+ clrname)


//C
// var clrname = ["Black", "Red","Pink","White","Purple", "Orange"];
// var clrad=prompt("What first colour u wanna add in the begining?");
// var clradd=prompt("What second colour u wanna add in the begining?");


// clrname.unshift(clrad)
// clrname.unshift(clradd)

// fclr = clrad + clradd;
// document.write("<b>ADD COLOUR IN THE BEGINING</b>" + " "+ fclr + clrname)


//D
// document.write("Black", "Red","Pink","White","Purple", "Orange <br>")
// var colorName=["Black", "Red","Pink","White","Purple", "Orange"]
 
// colorName.shift([0])
// document.write("<b>Deleting first colour</b>" + " "+ colorName)
// document.write("<br>")


//E
// document.write("Black", "Red","Pink","White","Purple", "Orange <br>")
// var colorName=["Black", "Red","Pink","White","Purple", "Orange"]
 
// colorName.pop([0])
// document.write("<b>Deleting first colour</b>" + " "+ colorName)
// document.write("<br>")


//F

// var clrNme=prompt("What first colour u wanna add in the list" + " <br>")
// var clrpos=+prompt("At where you wants to add a color" + " <br>")
// var colorName=["Black", "Red","Pink","White","Purple", "Orange"];
 

// colorName.splice(2,0, "Orange" ,"Yellow")

// document.write(colorName)

// document.write("<br>")

//G
// var colorName=["Black", "Red","Pink","White","Purple", "Orange"];
 

// colorName.splice(2,1,)

// document.write(colorName)

// document.write("<br>")


// Question 10

// const arr=[320,230,480,120]
// arr.sort();
// document.write(arr);

// Question 11

// var colorName=["Karachi", "lahore","Islamabad","Quetta","Peshawar"];
 

// var color  = colorName.slice(2,4)

// document.write(color)

// document.write("<br>")

// Question 12

// var arr = ["This "  ,  " is " ,    "my"  ,    " cat"];
// document.write( "ARRAY:"+ " " + arr)
// document.write("<br> STRING:"+ arr[0] )
// document.write( arr[1] )
// document.write( arr[2] )
// document.write( arr[3] )
// document.write("<br>")
// document.write("<br>")

// Question 13

// var fiFo=["Keyboard", " Mouse", "Printer", "Monitor"]
// document.write("<h3>Devices:</h3>"+ fiFo + " <br>")
// document.write("Out: <br>"+  fiFo[0] + "<br>")
// document.write("Out: <br>"+  fiFo[1]+ "<br>")
// document.write("Out: <br>"+  fiFo[2]+ "<br>")
// document.write("Out: <br>"+  fiFo[3]+ "<br>")
// document.write("<br>")
// document.write("<br>")

// Question 14

// var fiFo=["Keyboard", " Mouse", "Printer", "Monitor"]
// document.write("<h3>Devices:</h3>"+ fiFo + " <br>")
// document.write("Out: <br>"+  fiFo[3] + "<br>")
// document.write("Out: <br>"+  fiFo[2]+ "<br>")
// document.write("Out: <br>"+  fiFo[1]+ "<br>")
// document.write("Out: <br>"+  fiFo[0]+ "<br>")
// document.write("<br>")

// Question 15

// document.write("<h4>Dropdown</h4>")
// var phNames=["Apple","Samsung", "Motorola", "Nokia", "Sony" +"&" +" Haier"]
// document.write("<select><option>"+ phNames+"</select></option>")


// Chapter ARRAY LOOP


// Question 1

// var multiarr =[
//   [],
//   [],
//   []   

// ];

//   for(var i = 0; i <3; i++){
//     for(var j = 0; j<4; j++){
//       document.write(multiarr[i][j] + " ");
//     }
//     document.write("<br>")

//   }


// Question 2

// var multiarr =[
//   [0,1,2,3],
//   [1,0,1,2],
//   [2,1,0,1]   

// ];

//   for(var i = 0; i <3; i++){
//     for(var j = 0; j<4; j++){
//       document.write(multiarr[i][j] + " ");
//     }
//     document.write("<br>")

//   }

// Question 3

// //  Write a program to print multiplication table of any number using for loop. Table number & length should be 
// // taken as an input from user.                 


// var tableNumber=+prompt("Table number of your choice", "Table number")
// var tableLenght=+prompt("Table lenght should be..", "Table lenght")


// document.write("Table number:" + " " +tableNumber)
// document.write(" <br> Table lenght:"  + " "+ tableLenght)
// document.write("<br>")
// document.write("<br>")
// for(var i=1; i<= tableLenght; i++){
//     document.write(tableNumber+ + " "+ "x"  + i+ " "+ "=" + " "+ tableNumber*i+"<br>")
// } 


// Question 4

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
                
// for(var i = 0 ; i < fruits.length ; i++){
//         document.write( fruits[i] + "<br>"); 
// }
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")

// document.write("Element at index 0 is apple");
// document.write("<br> Element at index 1 is banana");
// document.write("<br> Element at index 2 is mango");
// document.write("<br> Element at index 3 is orange");
// document.write("<br> Element at index 4 is strawberry");


// Question 5

// document.write("Counting")
// document.write("<br>")
// document.write("<br>")

// for(var i = 1; i <=15 ; i = i + 1 ){

//     document.write(i + " ")
// }
// document.write("<br>")
// document.write("<br>")



// document.write("Reverse Counting")
// document.write("<br>")
// document.write("<br>")

// for(var i = 10; i >=1 ; i = i-1 ){

//     document.write(i+ " ," + " ")
// }
// document.write("<br>")
// document.write("<br>")




// document.write("Even")
// document.write("<br>")
// document.write("<br>")

// for(var i = 0; i <=20 ; i = i+2 ){

//     document.write(i + " ,"+ " ")
// }
// document.write("<br>")
// document.write("<br>")



// document.write("Odd")
// document.write("<br>")
// document.write("<br>")

// for(var i = 1; i <=19 ; i = i+2 ){

//     document.write(i + " ," + " ")
// }
// document.write("<br>")
// document.write("<br>")


// document.write("Series")
// document.write("<br>")
// document.write("<br>")

// for(var i = 2; i <=18 ; i = i+2 ){

//     document.write(i +"k"+ " ," + " ")
// }
// document.write("<br>")
// document.write("<br>")


// Question 6
// A

// var num1 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for( var i = 1; i <= num1.length; i++

// ){
//     document.write(num1)
//     break;
// }

//B


// var num1 =[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// for( var i = 10; i <= num1.length; i--

// ){
//     document.write(num1)
//     break;
// }



// Question 7


// var items = ["cake" , "apple pie", "cookie", "chips", "patties"]

// var userInput = prompt("Welcome to Boss Bakery..What do u wanna order Sir/Ma'am ?")

// var matchFound = "no"
// for(var i = 0 ; i < items.length ;i++){

//         if(userInput === items[i] ){
//             document.write(items [i] + " " + "is available in our bakery at index number " + [i] )
//                 matchFound = "yes"
//         } 
// }

// if(matchFound === "no"){
//     document.write("We are sorry." + items [i]+" "+  "is not available in our bakery")
// }

// Question 8



// var Arr=[24, 53, 78, 91, 12]
// document.write("Array items:" + Arr)
// document.write(" <br> The largest number is 91")


// Question 9


// var Arr=[24, 53, 78, 91, 12]
// document.write("Array items:" + Arr)
// document.write(" <br> The smallest number is 12")



// Question 10



// for ( var i=5; i<=100; i=i*5 ){
//     document.write(i)
// }