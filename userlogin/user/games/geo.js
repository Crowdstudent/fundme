
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
				 		  {q:'What country has the longest coastline in the world ?', options:['Korea','France','China','Canada'],answer:4},
				 		  {q:'What is the capital of Malta?', options:['Malta','Valetta','Yaounde','Guatemala'],answer:2},
				 		  {q:'What country is the newest in the world to be recognised by the UN?', options:['South Korea','Sudan','South Sudan','Maltinie'],answer:3},
				 	      {q:'If you travelled to the city of Volgograd, which country would be in?', options:['USA','Korea','Uk','Russia'],answer:4},
				 		  {q:'What is the name of the largest river to flow through Paris?', options:['The Seine','The Lyon','Lille','Paris'],answer:1},
				 		  {q:'What did Ceylon change its name to in 1972?', options:['Sri Lanka','Siri Lanka','Guatemala','None'],answer:1},
				 		  {q:'What is the most populous city in the US state of Illinois?', options:['New York','Chicago','Los Angeles','California'],answer:2},
				 		  {q:'What is the highest mountain in Britain?', options:['Beno Nevis','Ben Nevis','Vienne','None'],answer:2},
				 		  {q:'What is the capital of Peru?', options:['Lima','Rivaldo','Copenang','None'],answer:1},
				 		  {q:'Mount Vesuvius casts a shadow over which modern Italian city?', options:['Naples','Venice','Milan','Juventus'],answer:1},
				 		  {q:'What is the currency of Sweden?', options:['Krona','Yen','FCFA','Swedish Krona'],answer:4},
				 		  {q:'To what country to the Canary Islands belong?', options:['Italia','Ivory Cost','Danmark','None'],answer:4},
				 		  {q:'How many states are there in Australia?', options:['9','6','7','1'],answer:2},
				 		  {q:'Constantinople and Byzantium are former names of which major city?', options:['Island','Istanbul','Islamabad','Israel'],answer:2},
				 		  {q:'What is the highest peak in Africa?', options:['Mount Kilimanjaro','Mount Everest','Mount Rwenzori','None'],answer:1},
				 		  {q:'In which European city would you find Manneken Pis – a statue of a small boy urinating into a fountain? ', options:['Paris','Bruxelles','Viena','Brussels'],answer:4},
				 		  {q:'The Strait of Gibraltar separates the Iberian Peninsular from which African country?', options:['Algeria','Morocco','Tunisia','Egypt'],answer:2},
				 		  {q:'In which US state would you find Fort Knox?', options:['Nepal','Kentucky','Texas','None'],answer:2},
				 		  {q:'What is the largest desert in the world?', options:['Curly braces','Kalahari','Sahara','Barcelona'],answer:4},
				 		  {q:'Who was the RSA president to fight for the independance', options:['Thabo Mbeki','Nelson Mandela','Jacob Zuma','Ramaphosa Cyrile'],answer:2},

				 		  ],
				index:0,
				load:function()
				{
					   if(this.index<=this.questions.length-1)
					   {
						quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
						op1.innerHTML=this.questions[this.index].options[0];
						op2.innerHTML=this.questions[this.index].options[1];
						op3.innerHTML=this.questions[this.index].options[2];
						op4.innerHTML=this.questions[this.index].options[3];
							this.scoreCard();
						}
						else
						{
						quizBox.innerHTML="Game Over!!!";
						op1.style.display="none";
						op2.style.display="none";
						op3.style.display="none";
						op4.style.display="none";
						btn.style.display="none";
						}
				},
				 next:function()
				 {
				 	this.index++;
				 	this.load();
				 },
				check:function(ele)
				{

						 var id=ele.id.split('');

						 if(id[id.length-1]==this.questions[this.index].answer)
						 {
						 	this.score++;
						 	ele.className="correct";
						 	ele.innerHTML="Correct";
						 	this.scoreCard();
						 }
						 else
						 {
						 	ele.className="wrong";
						 	ele.innerHTML="Wrong";
						 }
				},
				notClickAble:function()
				{
						for(let i=0;i<ul.children.length;i++)
						{
							ul.children[i].style.pointerEvents="none";
						}
				},

				clickAble:function()
				{
						for(let i=0;i<ul.children.length;i++)
						{
							ul.children[i].style.pointerEvents="auto";
							ul.children[i].className='';
						}
				},
				score:0,
				scoreCard:function()
				{
					scoreCard.innerHTML=this.questions.length+"/"+this.score;
				}
		   }

		   window.onload=app.load();

		   function button(ele)
		   {
		   		 app.check(ele);
		   		 app.notClickAble();
		   }

		 function next()
		 {
		 	 app.next();
		 	 app.clickAble();
		 }