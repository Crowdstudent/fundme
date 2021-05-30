
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
				 		  {q:'What is the hardest known natural material?', options:['Diamonds','Gold','Iron','None'],answer:1},
				 		  {q:'What is a geiger counter used to measure?', options:['Eadiation','Temperature','Volt','Power'],answer:1},
				 		  {q:'This measurement – approximately six feet – is used to measure the depth of water. What is it?', options:['Fathom','Atom','Sphynx','None'],answer:1},
				 	      {q:'How many bones do sharks have in total?', options:['12:','12','0','None'],answer:1},
				 		  {q:'What is considered the highest mountain in Africa?', options:['Mont Kilimandjaro','Mont Rwenzori','Mont Everest','None'],answer:1},
				 		  {q:'Who is regarded as the man who invented the telephone?', options:['Maxwell phone','Newton','Albert Einstein','Alexander Graham Bell'],answer:4},
				 		  {q:'What is the smallest country in the world?', options:['Monaco','Malte','Vatican','None'],answer:3},
				 		  {q:'An egg’s shell is what percentage of its total weight?', options:['14%','12%','20%','5%'],answer:2},
				 		  {q:'What type of animal was Laika?', options:['Birds','Insect','Dog','None'],answer:4},
				 		  {q:'What is the tallest type of grass?', options:['Bamboo','Mangos','Ginger','Greep'],answer:1},
				 		  {q:'The Continental Drift Theory How many hearts does an octopus have?', options:['4','2','3','5'],answer:3},
				 		  {q:'Where can you find the smallest bone in the human body?', options:['Inside the mouth','Middle ear','Inside the nose','Finger'],answer:2},
				 		  {q:'This planet has a collective 53 moons, making it the planet in our solar system with the most number of moons', options:['Moon','Pluton','Saturn','Neptun'],answer:3},
				 		  {q:'How many elements are there in the periodic table?', options:['118','96','154','76'],answer:1},
				 		  {q:'This planet spins the fastest, completing one whole rotation in just 10 hours. Which planet is it?', options:['Mars','Jupiter','Saturn','Earth'],answer:2},
				 		  {q:'How long does a human red blood cell survive?', options:['199 days','20 days','120 days','100 days'],answer:3},
				 		  {q:'In what country can you find the Suez Canal?', options:['Egypt','RSA','England','Tanzania'],answer:1},
				 		  {q:'Animals that eat both plants and meat are called what?', options:['Herbivores','Carnivors','Omnivors','None'],answer:3},
				 		  {q:'Who was the scientist to propose the three laws of motion?', options:['Cury Mary','Isaac Newton','Kirkoff','None'],answer:2},
				 		  {q:'What is the rarest blood type?', options:['A+','B+','O+','AB Negative'],answer:4},

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