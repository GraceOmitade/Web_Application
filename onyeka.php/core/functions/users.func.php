<?php
function sanitize($input){
	$input = mysqli_real_escape_string($GLOBALS['connect_database'], $input);
	return $input;
}

function mysqli_result($res, $row=0, $col=0){
	$numrows = mysqli_num_rows($res);
	if($numrows && $row <=($numrows-1) && $row >=0){
		mysqli_data_seek($res,$row);
		$resrow = (is_numeric($col)) ? mysqli_fetch_row($res) : mysqli_fetch_assoc($res);
		if (isset($resrow[$col])){
			return $resrow[$col];
		} 
	}
			
	return false;
}	


function user_exists($username){
	
	$query = mysqli_query($GLOBALS['connect_database'], "SELECT COUNT(user_id) FROM hilivis.registered_users WHERE username= '$username' ");

	 return mysqli_result($query, 0);
}

function email_exists($email){
	$query = mysqli_query($GLOBALS['connect_database'], "SELECT COUNT(user_id) FROM
		hilivis.registered_users WHERE email = '$email' ");

	return mysqli_result($query, 0);
	
}

function register_user($first_name, $last_name, $gender, $email, $address, $phone_number, $username, $password){
	//echo 'You\'re eligible to register!';
	mysqli_query($GLOBALS['connect_database'], "
		INSERT INTO hilivis.registered_users(first_name, last_name,
	 gender, email, address, phone_number, username, password, timestamp) VALUES('$first_name', '$last_name', '$gender', '$email', '$address', '$phone_number', 
	 '$username', '$password', UNIX_TIMESTAMP()) ");
}

function user_name_matches_phone($username, $phone_number){
	$username = sanitize($username);
	$phone_number = sanitize($phone_number);

	$query = mysqli_query($GLOBALS['connect_database'], "SELECT COUNT(user_id) FROM hilivis.registered_users WHERE username= '$username' AND phone_number = '$phone_number' ");

	 return mysqli_result($query, 0);
}

function retrieve_recovery_data($username, $phone_number){
	$user_data = array();

	$new_password = 'Akjffr235ssxz090';

	mysqli_query($GLOBALS['connect_database'], "UPDATE hilivis.registered_users SET password = '$new_password' ");

	$query = mysqli_query($GLOBALS['connect_database'], "SELECT email, password FROM hilivis.registered_users WHERE username= '$username' AND phone_number = '$phone_number' ");

	while($row = mysqli_fetch_assoc($query)){
		 $user_data[] = array(
		 	'password' => $row['password'],
		 	'email' => $row['email']
		 );
	}

	return $user_data;
}

?>