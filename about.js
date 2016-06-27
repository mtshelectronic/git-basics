function read_version()
{
	if (window.XMLHttpRequest)
		var xmlDoc=new XMLHttpRequest();
	else
		var xmlDoc=new ActiveXObject("Microsoft.XMLHTTP");

	var about_buf = new Array(100);
	xmlDoc.open( 'POST' , "readversion.xml",false);
	xmlDoc.send();
	var root = xmlDoc.responseText;
	about_buf = root.split(",");

	document.getElementById("Main_FPGA").innerHTML = "- FPGA Version: " + about_buf[2] + "-" + about_buf[7] + about_buf[8] + about_buf[9];
	document.getElementById("Main_Micro").innerHTML = "- Micro Version: " + about_buf[10];


	document.getElementById("Card1_FPGA").innerHTML = "- FPGA Version: " + about_buf[14];
	document.getElementById("Card1_Micro").innerHTML = "- Micro Version: " + about_buf[13];


	document.getElementById("Card2_FPGA").innerHTML = "- FPGA Version: " + about_buf[17];
	document.getElementById("Card2_Micro").innerHTML = "- Micro Version: " + about_buf[16];


	document.getElementById("lcd_version").innerHTML =  "- LCD Version: "  + about_buf[11];
	document.getElementById("site_version").innerHTML = "- Site Version: " + "1.01.930131"
	document.getElementById("core").innerHTML = "- " + about_buf[6] + "x Remux Core";
	document.getElementById("iap_version").innerHTML =  "- IAP Version: "  + about_buf[12];

}