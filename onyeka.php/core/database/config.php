<?php
	//syntax for connection:

	//@mysql_connect('localhost', 'root', '', 'hilivis');
	$connect_database = mysqli_connect('localhost', 'root', '', 'hilivis');

	//check connetion
	if($connect_database->connect_error){
		die('We are currently experiencing connection problems, please come back later.');
	}else{
		// echo 'Connection to database successful';
	}

	$GLOBALS['connect_database'] = $connect_database;

?>