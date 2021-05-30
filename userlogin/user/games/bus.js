
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
				 		  {q:'Which of the following directly affects the real economy ?', options:['Statutory Liquidity Ratio (SLR)','Reverse Repo Rate','Taxation','Marginal cost of funds based Lending Rate'],answer:3},
				 		  {q:'Which of the following should be increased to control inflationary trends in the economy ?', options:['Repo Rate','Cash Reserve Ratio','Bank Rate','All'],answer:4},
				 		  {q:'Who among the following publishes the Economic Survey of India ?', options:['National Development Council','Ministry of Finance','Institute Finance','Indian Statistical Institute'],answer:2},
				 	      {q:'Which of the following agencies releases the index of industrial production to measure industrial performance in India?', options:['The National Sample Survey Office (NSSO)','The Reserve Bank of India (RBI)','The Central Statistics Office (CSO)','The Indian Statistical Institute (ISI)'],answer:4},
				 		  {q:'In ....... economies, all productive resources are owned and controlled by the government.', options:['dual','socialist','mixed','capitalist'],answer:2},
				 		  {q:'Golden Revolution is related to?', options:['Horticulture','Pulses','Jute','Precious minerals'],answer:2},
				 		  {q:'Gini Coefficient or Gini Ratio can be associated with which one of the following measurements in an economy?', options:['Rate of inflation','Poverty index','Income inequality','Personal income'],answer:3},
				 		  {q:'Which of the following is a social objective of business?', options:['Innovation','Employment generation','Business coordination','Risk management'],answer:2},
				 		  {q:'The idea of Cultural Poverty was given by', options:['Oscar Lewis','Gunnar Myrdal','Amartya Sen','Aashish Bose'],answer:1},
				 		  {q:'Human Development Report 1997 introduced the concept of Human Poverty Index (HPI) but Human Development Report replaced it with Multidimensional Poverty Index (MPI) in the year', options:['1999','2005','2010','2015'],answer:3},
				 		  {q:'Who among the following has given the concept of Human Development?', options:['Amartya Sen','Mahbub-ul-Haq','Sukhamoy Chakravarty','G.S. Chaddha'],answer:2},
				 		  {q:'What is the extension of python file?', options:['.python','.py','.p','None'],answer:2},
				 		  {q:'Indexation is a method whose use can be associated with which one of the following?', options:['Controlling inflation','Measurement of savings rate','Nominal GDP estimation','Fixing of wage compensation'],answer:4},
				 		  {q:'Which one of the following countries is not a founding member of the New Development Bank?', options:['Brazil','Canada','Russia','India'],answer:2},
				 		  {q:'Which of the following is not a component of Foreign Direct Investment??', options:['Equity Capital','Portfolio Investment','Reinvested earnings','Intra company loans'],answer:2},
				 		  {q:'As on October 16, 2020 total membership of International Monetary Fund is ?', options:['189 countries','190 countries','191 countries','193 countries'],answer:2},
				 		  {q:'Which is the uniform GST rate that has been fixed up for lottery prizes by the GST Council ?', options:['28%','48%','19%','93%'],answer:1},
				 		  {q:'In which of the following the termic cap and trade used ?', options:['Share Broking','Commodity Futures','Emission Trading','Share Broking'],answer:3},
				 		  {q:'The two largest denomination notes demonetized on 8 November, 2016 in India were ?', options:['100 and 500','500 and 2000','50 and 100','500 and 1000'],answer:4},
				 		  {q:'Which of the following schemes enjoys the benefit of triple tax exemptions, i.e., the exempt-exempt-exempt (EEE) status ?', options:['Public Provident Fund','Equity Linked Savings Scheme','Senior Citizens Savings Scheme (SCSS)','National Savings Certificate Scheme'],answer:1},

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
						else{

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
						 else{
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