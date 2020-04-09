push();// adds to end of array and returns number
unshift();//adds one or more items to start of array and returns new length

pop();//removes last element from an array
shift();//removes first element from an array


forEach();//executes function once for each element in array
some();//check if some elements pass a test specified by a function
every();//checks if all elements pass a test specified by a function

concat();//creates a new array containing this array 
filter();//creates a new array with elements that pass a test specified by a function

sort();//reorders items in array using a function 
reverse();//reverses order of items in array

map();// calls a function on each element in array and creates new array with results


//JQUERY METHODS FOR FILTERING 

.add();// adds elements to a set of matched elements
.not();//removes elements from a set of matched elements
.each();//applies same function to each element in matched set
.filter();//reduce number of elements in matched set to those that either match a selector or pass a test
.array();//converts a collection to an array of DOM elements , eneabling the use of array menthods


//OBJECTS IN ARRAY
When order is important the data should be stored in an array 
because each time an array is given an index number 
var people =[
{name:'Casey',rate:70,active:true},
{name:'Carry',rate:7,active:true}
{name:'Cassdey',rate:10,active:false}
{name:'Cally',rate:40,active:true}

]

people[1].name;

//OBJECTS AS PROPERTIES
When you want to access objects using their name, 
they work well as properties of another object

Each property must have a unique name

var people = {
	Casey ={rate:70,active:true},
	John ={rate:80,active:true},
	Peter ={rate:75,active:false},
	Nigel ={rate:120,active:true}
}

people.Casey.rate;


var tagged= {
 
 icons:[],
 jpg:[],
 Pictures:[],
 svg:[]
}


// SORTING

Lexicographically

sort(); //sorting can be compared to changing index numbers of items in array
 
 to sort items in a different way you can write a compare function , 
 it compares two values at a time and returns a number

 //ASCENDING ORDER

 var prices = [1,2,125,2,19,14];
 prices.sort(function(a,b){
   
   return a- b;
 });

//DESCENDING ORDER
prices.sort(function(a,b){
return b-a;

});

//RANDOM ORDER
 prices.sort(function(){
 return 0.5 - Math.random();
 });

//SORTING DATES

Dates need to be converted into a date 
object so that they can then be compared 
using <and> operators

var holidays = [
'2014-12-25',
'2014-01-01',
'2014-07-04',
'2014-11-28'
];

holidays.sort(function(a,b){

var dateA = new Date(a);
var dateB = new Date(b);

return dateA - dateB;

});

object is a collection of values given names

var person = new Object();

person["firstname"] = "Tony";
person["lastname" ] = "Ken";

var firstNameProperty = "firstname" ;
console.log(person[firstNameProperty]);

var person = new Object();
undefined

person
Object {}

person["firstname"] = "Rama";
"Rama"

person["lastname"]="Ken";
"Ken"

person
Object {firstname: "Rama", lastname: "Ken"}
var firstNameProperty = "firstname" ;
undefined

person[firstNameProperty]
"Rama"

person
Object {firstname: "Rama", lastname: "Ken"}firstname: "Rama"lastname: "Ken"__proto__: Object__defineGetter__: __defineGetter__()__defineSetter__: __defineSetter__()__lookupGetter__: __lookupGetter__()__lookupSetter__: __lookupSetter__()constructor: Object()hasOwnProperty: hasOwnProperty()isPrototypeOf: isPrototypeOf()propertyIsEnumerable: propertyIsEnumerable()toLocaleString: toLocaleString()toString: toString()valueOf: valueOf()get __proto__: __proto__()set __proto__: __proto__()
person.firstname
"Rama"

person.firstname = " Ramadhan ";
" Ramadhan "

person.firstname
" Ramadhan "

person
Object {firstname: " Ramadhan ", lastname: "Ken"}

person.address = new Object();

Object {}

person.address.street = "Monica street " ;
"Monica street "

person.address

Object {street: "Monica street "}

person.address.number = "B04";
"B04"

person.address
Object {street: "Monica street ", number: "B04"}number: "B04"street: "Monica street "__proto__: Object