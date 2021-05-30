
var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');


	  var app={
				questions:[
				 		  {q:'CLR is the .Net equivalent of ', options:['Common Language Runtime','Java Virtual machine','Common Type System','Common Language Specification'],answer:2},
				 		  {q:'Abstract class contains', options:['Abstract methods','Non Abstract methods','Both','None'],answer:3},
				 		  {q:'The default scope for the members of an interface is', options:['private','public','protected','internal'],answer:2},
				 	      {q:'Which of the following statements is incorrect about delegate?', options:['Delegates are reference types.','Delegates are object-oriented.','Delegates are type-safe.','Only one can be called using a delegate.'],answer:4},
				 		  {q:'The space required for structure variables is allocated on the stack.', options:['True','False','Maybe','Cannot say'],answer:1},
				 		  {q:'Which of the following is incorrect about constructors?', options:['Defining of constructors can be implicit or explicit.','The calling of constructors is explicit.','Implicit constructors can be parameterized or parameterless.','Explicit constructors can be parameterized or parameterless.'],answer:3},
				 		  {q:'Reference is a ', options:['Copy of class which leads to memory allocation.','Copy of class that is not initialized.','Pre-defined data type.','Copy of class creating by an existing instance.'],answer:4},
				 		  {q:'The data members of a class by default are?', options:['protected, public','private, public','private','public'],answer:3},
				 		  {q:'What is the value returned by function compareTo( ) if the invoking string is less than the string compared?', options:['Zero','A value of less than zero','A value greater than zero','None of the mentioned'],answer:2},
				 		  {q:'', options:['MD Isaka','Bjarne Stroustrup','Guido van Rossum','James Gosling'],answer:3},
				 		  {q:'Select the two types of threads mentioned in the concept of multithreading?', options:['Foreground','Background','Only foreground','Both foreground and background'],answer:4},
				 		  {q:'If a class ‘demo’ had ‘add’ property with getting and set accessors, then which of the following statements will work correctly?', options:['math.add = 20;','math m =  new math(); m.add = 10;','Console.WriteLine(math.add);','None of the mentioned'],answer:1},
				 		  {q:'Struct’s data members are ___ by default.', options:['Protected','Public','Private','Default'],answer:3},
				 		  {q:'The point at which an exception is thrown is called the', options:['Default point','Invoking point','Calling point','Throw point'],answer:3},
				 		  {q:'Which of the following keywords is used to refer base class constructor to subclass constructor?', options:['this','static','basic','extend'],answer:3},
				 		  {q:'Which among the following is a conditional operator?', options:[':?','?;','?:','??'],answer:3},
				 		  {q:'Arrange the operators in the increasing order as defined in C#: !=; ?:; &; ++; &&', options:['< && < != < & < ++','< && < != < ++ < &','< && < & <!= < ++','< && < != < & < ++'],answer:3},
				 		  {q:'Which of the following options is not a Bitwise Operator in C#?', options:['& |','+= -+','^ ~','<< >>'],answer:4},
				 		  {q:'Which of the following is a contextual keyword in C#?', options:['get','set','add','All of the mentioned'],answer:4},
				 		  {q:'Which of the following defines unboxing correctly?', options:['When a value type is converted to object type, it is called unboxing.','When an object type is converted to a value type, it is called unboxing','Both of the above.','None of the above.'],answer:2},
				 		  {q:'Which of the following converts a type to a signed byte type in C#?', options:['ToInt64','ToSbyte','ToSingle','ToInt32'],answer:2},
				 		  {q:'Which of the following converts a type to an unsigned big type in C#?', options:['ToType','ToUInt16','ToUInt32','ToUInt64'],answer:4},
				 		  {q:'Which of the following access specifier in C# allows a class to expose its member variables and member functions to other functions and objects in the current assembly?', options:['Public','Private','Protect','Internal'],answer:4},
				 		  {q:'Which of the following is true about C# enumeration?', options:['An enumerated type is declared using the enum keyword.','C# enumerations are value data type.',' All of the above.','None'],answer:3},
				 		  {q:'Which of the following can be used to define the member of a class externally?', options:[':','::','#','None'],answer:2},
				 		  {q:'Which of the following operator can be used to access the member function of a class?', options:[':','::','.','#'],answer:3},
				 		  {q:'Which of the following gives the correct count of the constructors that a class can define?', options:['1','2','Any','None'],answer:3},
				 		  {q:'C# developed by?', options:['IBM','Google','Microsoft','Facebook'],answer:3},
				 		  {q:'CLI in C# Stands for?', options:['Common Language Infrastructure','Code Language Infrastructure','Computer Language Infrastructure','C# Language Infrastructure'],answer:1},
				 		  {q:'C# has strong resemblance with?', options:['C','C++','Java','Python'],answer:3},
				 		  {q:'Which of the following not true about C#?', options:['It is component oriented','It is a unstructured language','It is easy to learn','It is a part of .Net Framework.'],answer:2},
				 		  {q:'Choose .NET class name from which data type UInt is derived?', options:['System.Int16','System.UInt32','System.UInt64','System.UInt16'],answer:2},
				 		  {q:'The first line of the program is?', options:['using System','namespace','using namespace','None'],answer:1},
				 		  {q:'A namespace is a collection of classes.', options:['True','False','Can be true or false','Can not say'],answer:1},
				 		  {q:'In C#, Save the file using?', options:['.c extension','.csharp extension','.net extension','.cs extension'],answer:4},
				 		  {q:'Number of digits upto which precision value of float data type is valid?', options:['Upto 6 digit','Upto 7 digit','Upto 8 digit','Upto 9 digit'],answer:2},
				 		  {q:'C# was developed by', options:['Bjarne Stoustrup','Anders Hejlsberg','Dennis M.Ritchie','Ramus Lerdorf'],answer:2},
				 		  {q:'Which of the following is the valid size of float data type?', options:['4 Bytes','6 Bytes','8 Bytes','10 Bytes'],answer:1},
				 		  {q:'Which of the following String method is used to compare two strings with each other?', options:['Compare To()','ConCat()','Comprae()','Copy'],answer:3},
				 		  {q:'Which of the following Syntax is used for declaration and initialization of data variable?', options:[';','=;',';','=;'],answer:2},
				 		  {q:'Which of the following is the root of the .NET type hierarchy?', options:['System.Type','System.Base','System.Object','System.Root'],answer:3},
				 		  {q:'How many times can a constructor be called during lifetime of the object?', options:['Only once.','As many times as we call it.','Any number of times before the object is deleted.','None'],answer:1},
				 		  {q:'Which of the following assemblies can be stored in Global Assembly Cache?', options:['Friend Assemblies','Private Assemblies','Public Assemblies','Shared Assemblies'],answer:4},
				 		  {q:'Which of the following is not an arithmetic operator in C#.NET?', options:['/','**','+','%'],answer:2},
				 		  {q:'What are the disadvantages of Explicit Conversion?', options:['Potentially Unsafe','Results in loss of data','Makes program memory heavier','None'],answer:2},
				 		  {q:'Types of ‘Data Conversion’ in C#?', options:['Explicit Conversion','Implicit Conversion','both Explicit & Implicit Conversion','None'],answer:2},
				 		  {q:'What is the default value of Boolean Data type?', options:['0','1','True','False'],answer:4},
				 		  {q:'What is the file extension of c#?', options:['.cs','.csx','.csp','both .cs & .csx'],answer:4},
				 		  {q:'What is the latest version of c#?', options:['8.o','7.0','9.0','9.1'],answer:3},
				 		  {q:'_______return absolute value of a variable.', options:['Absolute()','Abs()','Absolutevariable()','All'],answer:2},

				 		  ],
				index:0,
				load:function(){
					   if(this.index<=this.questions.length-1){
						quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
						op1.innerHTML=this.questions[this.index].options[0];
						op2.innerHTML=this.questions[this.index].options[1];
						op3.innerHTML=this.questions[this.index].options[2];
						op4.innerHTML=this.questions[this.index].options[3];
							this.scoreCard();
						}
						else{

						quizBox.innerHTML="Game Over!!!";
						op1.style.display="none";
						op2.style.display="none";
						op3.style.display="none";
						op4.style.display="none";
						btn.style.display="none";
						}
				},
				 next:function(){
				 	this.index++;
				 	this.load();
				 },
				check:function(ele){

						 var id=ele.id.split('');

						 if(id[id.length-1]==this.questions[this.index].answer){
						 	this.score++;
						 	ele.className="correct";
						 	ele.innerHTML="Correct";
						 	this.scoreCard();
						 }
						 else{
						 	ele.className="wrong";
						 	ele.innerHTML="Wrong";
						 }
				},
				notClickAble:function(){
						for(let i=0;i<ul.children.length;i++){
							ul.children[i].style.pointerEvents="none";
						}
				},

				clickAble:function(){
						for(let i=0;i<ul.children.length;i++){
							ul.children[i].style.pointerEvents="auto";
							ul.children[i].className='';
						}
				},
				score:0,
				scoreCard:function(){
					scoreCard.innerHTML=this.questions.length+"/"+this.score;
				}
		   }

		   window.onload=app.load();

		   function button(ele){
		   		 app.check(ele);
		   		 app.notClickAble();
		   }

		 function next(){
		 	 app.next();
		 	 app.clickAble();
		 }