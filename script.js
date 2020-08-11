// console.log("hello World!!!!!")

// console.log("Operator precendance and associativity");

// var x,y ;
// console.log(x , y );
// console.log('result for ' + 'x = y = (3 + 5) * 4' );
// x = y = (3 + 5) * 4;
// console.log(x , y );

// // = has associativity right to left

// var markWeight = 88;
// var markHeight = 5;
// var johnWeight = 75;
// var johnHeight = 5.8;

// var markBMI = markWeight / ( markHeight * markHeight );
// var johnBMI = johnWeight / ( johnHeight * johnHeight );
// console.log("Mark's BMI is : " + markBMI);
// console.log("John's BMI is : " + johnBMI);

// console.log("is Mark's BMI is higher than John's BMI ? " + ( markBMI > johnBMI ));

// var JohnBills = [124, 48, 268];
// //calculate tip
// var tip = function(BillAmount)
// {  
//         if ( BillAmount  < 50 ) 
//            {
//                return BillAmount * .20;
//            }
//         else if ( BillAmount >= 50 && BillAmount < 200 ) 
//             {
//                 return BillAmount * .15;
//             }
//         else
//            {
//             return BillAmount * .10;   
//            }    
//     }
// //calculate final amount    
// //function as expression
// var finalAmount = function(bAmount, tip)
// {
//     return bAmount + tip;

// }

// var tipArray = [];
// var finalAmount = [];

// for (var i = 0 ; i<JohnBills.length ; i++)
// {
//     tipArray[i]  = tip(JohnBills[i]);
//     finalAmount[i] = JohnBills[i] + tipArray[i] ;

// }

// console.log("JohnBills");
// console.log(JohnBills);
// console.log("tipArray");
// console.log(tipArray);

// console.log("finalAmount");
// console.log(finalAmount);


//Object and Properties
// var John = {
//     firstName : "John",
//     lastName  : "Smith",
//     birthYear : 1988,
//     family : ['Jane', 'Mark', 'Dave', 'Emily'],
//     job:'Professor',
//     isMarried: false   //last properties will not have comma
// }
// console.log(John);
// //accessing object properties
// console.log(John.firstName);
// console.log(John['lastName']);
// console.log(John.family);
// console.log(John['family']);
// console.log(John.family[0]);
// console.log(John['family'][0]);
// var x = 'job';
// console.log(John[x]);

// //mutate array
// John.job = "HoD";
// John['isMarried'] = true;
// console.log(John);
// John.family[4] = 'Emma';
// console.log(John.family);
// John.family.push('Sharon');
// console.log(John.family);

//Methods
//Function attached to object is known as method

// var John = {
//     firstName : "John",
//     lastName  : "Smith",
//     birthYear : 1988,
//     family : ['Jane', 'Mark', 'Dave', 'Emily'],
//     job:'Professor',
//     isMarried: false,   //last properties will not have comma
//     calAge: function()
//     {
//         return 2020 - this.birthYear;
//         //this means John Object
//     }
// }
// console.log("Age is :  ");
// console.log(John.calAge());
// John.Age = John.calAge();
// console.log(John);

// var John = {
//     fullname : 'john',
//     mass : 150,
//     height : 5.5,
//     BMI : function()
//     {
//         return this.mass /  ( this.height * this.height );
//     }   
// }
// var Mark = {
//     fullname : 'Mark',
//     mass : 120,
//     height : 6,
//     BMI : function()
//     {
//         return this.mass /  ( this.height * this.height );
//     }   
// }

// console.log('John\' BMI is :' + John.BMI());
// console.log('Mark\' BMI is :' + Mark.BMI());

// if ( John.BMI() > Mark.BMI() )
// {
//     console.log("John BMI is more than Mark by " + ( John.BMI() - Mark.BMI() ) );
// }
// else if( John.BMI() < Mark.BMI()  )
// {
//     console.log("John BMI is less than Mark by " + ( Mark.BMI() - John.BMI() ) );
// }
// else{
//   console.log("both has same BMI");
// }

var johnArray = ['John', 'Smith', 28, 6700000, 1988];
// console.log('for loop');
// for(let i = 0 ; i<johnArray.length ; i++)
// {
//     console.log(johnArray[i]);
// }

// console.log('while loop');
// var j = 0;
// while(j<johnArray.length)
// {
//     console.log(johnArray[j]);
//     j++; 
// }

// console.log('dowhile loop');
// console.log(johnArray);
// var k = 0;
// do
// {
//     if ( typeof johnArray[k] == 'number' )
//     {
//     k++; 
//       break;
//     }
//     else {

//     console.log(johnArray[k]);
//     k++; 
//     }

// }while(k<johnArray.length)
// console.log('continue');
// var l = 0;
// do
// {
//     if ( typeof johnArray[l] == 'string' )
//     {
//     l++; 
//       continue;
// }
//     else {

//     console.log(johnArray[l]);
//     l++;
//     }

// }while(l<johnArray.length)


// function learnJS()
// {
//     if(true)
//     {
//         console.log(firstName);
//         var firstName;


//     }
//     if (true)
//     {
//         console.log(lastname);
//     }
// }
// learnJS();


// var john = {
//      bill : [124, 48, 268, 180, 42],
//      tip : [],
//      finalAmount : [],
//      calTip: function(){
//          for( var i = 0; i < this.bill.length; i++)
//            {
//              if (this.bill[i] < 50)
//              {
//                 this.tip[i] = this.bill[i] * .20;
//                 this.finalAmount[i] = this.bill[i] + this.tip[i];
//              }
//              else if (this.bill[i] >= 50 && this.bill[i] <= 200)
//              {
//                 this.tip[i] = this.bill[i] * .15;
//                 this.finalAmount[i] = this.bill[i] + this.tip[i];
//              }
//              else{
//                 this.tip[i] = this.bill[i] * .10;  
//                 this.finalAmount[i] = this.bill[i] + this.tip[i];
//              }

//            } 
//          }

// }

// console.log(john);
// console.log(john.bill);
// john.calTip();
// console.log(john.tip);
// console.log(john.finalAmount);

// var Mark = {
//     bill : [124, 48, 268, 180, 42],

//     calTip: function(){
//         this.tip = [];
//     this.finalAmount = [];
//         for( var i = 0; i < this.bill.length; i++)
//           {
//             if (this.bill[i] < 100)
//             {
//                this.tip[i] = this.bill[i] * .20;
//                this.finalAmount[i] = this.bill[i] + this.tip[i];
//             }
//             else if (this.bill[i] >= 100 && this.bill[i] <= 300)
//             {
//                this.tip[i] = this.bill[i] * .10;
//                this.finalAmount[i] = this.bill[i] + this.tip[i];
//             }
//             else{
//                this.tip[i] = this.bill[i] * .25;  
//                this.finalAmount[i] = this.bill[i] + this.tip[i];
//             }

//           } 
//         }

// }

// //console.log(Mark.tip);
// Mark.calTip();
// console.log(Mark);
//console.group("%c1 --Hoisting--","color:blue");
//Hoisting
// console.log(HName);
// firstName();
// lastName();

// var HName = "Mark Smith";

// function firstName() {
//     console.log("Mark");
// }

// var lastName = function(){
//     console.log("Smith");
// }
console.groupEnd();










// console.group("%c1 --This--","color:blue");
// // //this
// var Name = "GlobalName"  
// //1 variable- will refer to global context (window)
// console.log(this);
// console.log(this.Name); 
// var myObject = {
//     "Name": "ObjectName",
//     "DOB": 1990,
//     calAge: function () {
// //2  method -refer to object context
//         console.log(this);
//         console.log(this.Name);  
//         function printGreeting() {
// //3  function -  will refer to global context
//             console.log(this);
//             console.log(this.Name);              
//         }
//         printGreeting();
//     }
// }
// myObject.calAge();
// console.groupEnd();
console.group("%c1 Method Borrowing","color:blue");
//Object po1 has a method to calculate finalAmount 
var po1 = {
    purchaseOrder : 3300,
    Amount : 10000,
    finalAmount : function(tax , num1 , num2) 
    {
      return  ( tax === 'D1'  ? ( 
          this.Amount +  ( this.Amount * .10 ) + num1
          ) :  
          ( this.Amount +  ( this.Amount * .30 ) ) ); 
    }

}
//Object po2 will use finalAmount method of object po1 
// to calcualte final amount
// this concept knowns as method borrowing - 
// here method from po1 is borrowed to be used for po2 using "call" method
var po2 = {
    purchaseOrder : 3301,
    Amount : 20000
}
//while using call for method borrowing - first parameter is for "this"
// and subsequent parameters will be arguments for the method
po2.finalAmount = po1.finalAmount.call(po2,'D1');
console.log('final amount for po2 using call :  '  + po2.finalAmount );
// console.log(po2);
//apply method- apply method is same as call method - except in apply,
//arguments are passed in array
po2.finalAmount = po1.finalAmount.apply(po2,['D2']);
console.log('final amount for po2 using apply :  '  + po2.finalAmount );
//bind method returns an function which can be invoked later
let totalAmount = po1.finalAmount.bind(po2,'D1');
console.log('total amount using bind ' + totalAmount(10));
