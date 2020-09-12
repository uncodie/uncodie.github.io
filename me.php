
<!DOctYPE HTML>
<html>
<head>
<?php
	include('rax.php');
	date_default_timezone_set('Asia/Kolkata');
	$dt=date("Y-m-d");
	$dtime=date("Y-m-d h:i:s a");
	$insert=mysqli_query($conn,"INSERT INTO visit_mobile (dt,dtime) VALUES ('$dt','$dtime')");
?>		
<title>Aniket Ganvir | Portfolio</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Novel Folio Responsive web template, Web Templates, Flat Web Templates, Android Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, Sony Ericsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!--Custom-Theme-files-->
<link href="css/styleme.css" rel='stylesheet' type='text/css' />	
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>
<!--/script-->
<script src="js/jquery-1.11.1.min.js"></script> 
	<style>#preloader {
		background:#89c3b4 url('images/loader.gif') center center no-repeat;
		position:fixed;
		left:0px; 
		top:0px; 
		width:100%; 
		height:100%; 
		z-index:1000;
	}</style>
</head>
 <body>
 <!--start-home-->
	<div id="skrollr-body">
		<div id="preloader"></div>
		<div id="wish1" class="centered" data-0="width:100%;" data-1000="width:0%;"></div>
		<div id="wish2" class="centered " data-1000="width:100%;" data-2000="width:0%;">
			<div id="snow" class="centered" data-1000="top:0px;" data-2000="top:100px"></div>
		</div>
		<div id="ribbon-left" class="ribbon" data-1500="width:0%;" data-2500="width:50%;" ></div>
		<div id="ribbon-right" class="ribbon" data-1500="width:0%;" data-2500="width:50%;" ></div>
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="337px" height="200px" >
			<path class="" style="fill:none;stroke:#49675f;stroke-width:40;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:500;stroke-dashoffset:0" data-2500="stroke-dashoffset:500;" data-4000="stroke-dashoffset:0;" d="M169,174C123,169-17.5,87.5,36,34S169,174,169,174z" />
			<path class="" style="fill:none;stroke:#49675f;stroke-width:40; stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:500;stroke-dashoffset:0" data-2500="stroke-dashoffset:500;" data-4000="stroke-dashoffset:0;" 	d="	M169,174c46-5,186.5-86.5,133-140S169,174,169,174z"/>
		</svg>
			<div id="pattern1" class="centered " data-2500=" height:100%; "data-3500="height:0%;"></div>
			<div id="pattern2" class="centered"></div>
			<div id="wish3" class="centered" data-4000="width:0px; height:0px;  "data-6000="width:550px; height:550px; "></div>
			<div id="copyright" style="font-size:10px;">Design by &nbsp;<a href="https://www.youtube.com/channel/UC8OV-4MqjmqyEbS_HRILcXw" target="_blank"><img src="images/m.logo.gif" height="25" style="margin-bottom:-5px;"></a> </div>

		</div>
	<!--//start-home-->
	<script src="js/skrollr.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		 window.onload = function() {
			document.getElementById("preloader").style.display = 'none';
			skrollr.init({
			forceHeight: false
		});
		}
		</script>
		<script type="text/javascript" language="javascript">
        $(function() {
            $(this).bind("contextmenu", function(e) {
                e.preventDefault();
            });
        }); 
		</script>
		<script>
		history.pushState(null, null, location.href);
			window.onpopstate = function () {
				history.go(1);
			};
		</script>
</body>
</html>
