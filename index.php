<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>WEB PROJECT</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<section>
		<div class="logo">Funder</div>
		<img src="images/bg3.jpg" class="bg">
		<div class="content">
			<h2>Let's Help you<br>with your finance</h2>
			<p>Only one question will be presented at a time, and once you have moved on from that question, you will not be able to backtrack. Force CompletionOnce started, this test must be completed in one sitting. Do not leave the test before clicking Save and Submit Due DateThis Test is due on 14 May 2021 23:59:00 o'clock SAST.Test cannot be started past this date. Click Begin to start: Short Exercise #4. Click Cancel to go back.</p>
			<a href="more/more.html">Learn More</a>
		</div>
		<p class="copyrightText">©2021. Group Project Development Software</p>
	</section>
	<div class="menu" onclick="toggleMenu();"></div>
	<div class="navigation">
		<ul>
			<li><a href="userlogin/user/login.php">User</a></li>
			<li><a href="funderlogin/funder/login.php">Funder</a></li>
			<li><a href="team/team.html">OUR DSW Team</a></li>
		</ul>
		<div class="social">
			<ul>
				<li><a href="#"><img src="images/fa.png"></a></li>
				<li><a href="#"><img src="images/tw.png"></a></li>
				<li><a href="#"><img src="images/in.png"></a></li>
			</ul>
		</div>
	</div>
	<script>
		function toggleMenu()
		{
			var menuToggle = document.querySelector('.menu');
			var navigation = document.querySelector('.navigation');
			menuToggle.classList.toggle('active');
			navigation.classList.toggle('active');
		}
	</script>
</body>
</html>