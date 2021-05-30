
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
				 		  {q:'What is python ?', options:['Programming Language','Type of Serpent','Interpreter','Object'],answer:1},
				 		  {q:'Which keyword is use for function?', options:['function','fun','def','define'],answer:3},
				 		  {q:'What is called when a function is defined inside a class?', options:['function','method','def','module'],answer:2},
				 	      {q:'How is a function declared in Python?', options:['def function_name():','function_name():','def():','define name():'],answer:1},
				 		  {q:'Which of the following is not a relational opeartor in Python?', options:['>=','=','!=','<='],answer:2},
				 		  {q:'Which of the following is not used as loop in Python?', options:['do-while loop','while loop','for loop','None'],answer:1},
				 		  {q:'Which one of the following is a valid Python if statement :', options:['if a>=2 :','if (a >= 2)','if a >= 22','None'],answer:1},
				 		  {q:'What keyword would you use to add an alternative condition to an if statement?', options:['if else','elif','elseif','None'],answer:2},
				 		  {q:'Can we write if/else into one line in python?', options:['Yes','No','if/else not used in python','None'],answer:1},
				 		  {q:'Python was developed by', options:['MD Isaka','Bjarne Stroustrup','Guido van Rossum','James Gosling'],answer:3},
				 		  {q:'Python is written in which language?', options:['C','Java','Swift','C++'],answer:1},
				 		  {q:'What is the extension of python file?', options:['.python','.py','.p','None'],answer:2},
				 		  {q:'Is Python an OOP Language.', options:['Yes','No','Neither Yes Or No','None'],answer:1},
				 		  {q:'Which symbol is used to make a comment in python', options:['@','<-->','#','1989'],answer:3},
				 		  {q:'What is used to define a block of code in Python?', options:['Curly braces','Indentation','Parenthesis','None'],answer:2},
				 		  {q:'When was Python 3.0 released ?', options:['1997','2000','1980','2008'],answer:4},

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