<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>

  <script>
  function getIP(json) {
    document.write("My public IP address is: " + json.ip);
    var xx = json.ip;
    var xy = document.getElementById('demo');
    xy.value= json.ip;
  }
  </script>
  <script src="http://api.ipify.org?format=jsonp&callback=getIP"></script>
  
</head>
<body>
	<input type="text" id="demo">
  <div style="position:absolute;bottom:50px;margin-top:10px;padding:8px;background:#fee;">If you don't get an alert with your IP, disable your ad blocker</small>
</body>
</html>