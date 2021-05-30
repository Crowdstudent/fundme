
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
				 		  {q:'Jo bought a used car for $6000 and paid 15% deposit. How much did he still have to pay?', options:['$900 ','$5000','$4500','$5100'],answer:4},
				 		  {q:'What is 8% of $600?', options:['$480','$48','$58','$580'],answer:2},
				 		  {q:'Factorise and simplify: 3a2 + 3a - 18', options:['(a + 3)(a − 2)','3(a − 3)(a + 2)','3(a − 3)(a − 2) ','3(a + 3)(a − 2)'],answer:4},
				 	      {q:'Expand and simplify: (3a − 5b)(3a + 5b)', options:['9a − 25b','9a + 25b','9a2 + 25b2','9a2 - 25b2'],answer:4},
				 		  {q:'What is the speed in m/s of a car that travels 30km in 20 minutes?', options:['1500 m/s','150 m/s','25 m/s','540 m/s'],answer:3},
				 		  {q:'Sam bought a car valued at $7700. One year later the car’s value had decreased by 2/7. What is the new value of the car?', options:['$2200','$5500','$9900','None'],answer:2},
				 		  {q:'Expand and simplify: – 6 (2x – 3) – 11', options:['−12x − 29','7 −12x','12x − 7','7 +12x'],answer:2},
				 		  {q:'Which inequation shows the following statement x is 6 or less and more than – 5', options:['– 5 < x ≤ 6','– 5 > x ≤ 6','– 5 ≤ x ≤ 6','– 5 < x < 6'],answer:1},
				 		  {q:'What is 6 times 5 plus 3 times 8 plus1 times 0?', options:['54','39','0','264'],answer:3},
				 		  {q:'What is 53 to the power 4?', options:['1975','7890481','212','58924'],answer:2},
				 		  {q:'What is 2x-5=99', options:['5','34','47','52'],answer:4},
				 		  {q:'In a century how many months are there?', options:['12','120','1200','12000'],answer:3},
				 		  {q:'What is the reciprocal of 17/15?', options:['1.13','15/17','17/15','30/34'],answer:2},
				 		  {q:'What is the square of 15?', options:['15','30','252','225'],answer:4},
				 		  {q:'How many years are there in a decade?', options:['10','20','1','None'],answer:1},
				 		  {q:'I am a number. I have 7 in the ones place. I am less than 80 but greater than 70. What is my number?', options:['71','73','75','77'],answer:4},
				 		  {q:'What is 7% equal to?', options:['0.007','0.07','0.7','7'],answer:2},
				 		  {q:'What is the remainder of 21 divided by 7?', options:['21','7','1','None'],answer:4},
				 		  {q:'If David’s age is 27 years old in 2011. What was his age in 2003?', options:['17 years','17 years','20 years','19 years'],answer:4},
				 		  {q:'What is three fifth of 100?', options:['3','5','20','60'],answer:4},

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