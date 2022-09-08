<?php
	include "core/init.php";
	include "header.php";
	include "slider.php";
?>

<?php
	$error = "";
	$color = 'yellow';


	if(isset($_POST['first_name'])){
		$first_name = $_POST['first_name'];
		$last_name = $_POST['last_name'];
		$gender = $_POST['gender'];
		$email = $_POST['email'];
		$address = $_POST['address'];
		$phone_number = $_POST['phone_number'];
		$username = $_POST['username'];
		$password = $_POST['password'];
		$confirm_password = $_POST['confirm_password'];

		//Array containing the required fields
		$required = array('first_name', 'last_name', 'gender', 'email', 'address', 'username', 'password', 'confirm_password'); 

		foreach ($_POST as $key => $value) {
			if (in_array($key, $required) && empty($value)) {
				$error = 'Fields marked with an asterisk are required';
			}
		}

		if(empty($error)){
			if (user_exists($username)) {
				$error = 'Sorry this username already exists, choose another.';
			} elseif (email_exists($email)) {
				$error = 'Sorry this email already exists, choose another.';
			} elseif ($password != $confirm_password) {
				$error = 'The passwords you entered do not match.';
			}elseif (filter_var($email, FILTER_VALIDATE_EMAIL) == false) {
				$error = 'Please enter a valid email.';
			}

			//After several validations, check if error got a value
			if (empty($error)){
				register_user($first_name, $last_name, $gender, $email, $address, $phone_number, $username, $password);
				$color = '';
				$error = 'You have Successfully registered with the System';
			}

		}

		
	}

?>
<br> <br> <br>
<div class="container panelBody2" style="width: 50%">
<div class="form-wrapper">
	<form class="form-horizontal" action="" method="post">
		<header>
			<h2>New Graduate Registration</h2>
		</header>
		<?php
			echo '<span style="color:'.$color.'">'.$error.'</span>';
			
		?>
		<div class="form-group">
			<label class="control-label">First Name*</label>
			<div class="col-sm-8">
				<input type="text" class="form-control" name="first_name" placeholder="Enter First Name*" >			
			</div>		
		</div>

		<div class="form-group">
			<label class="control-label">Last Name</label>
			<div class="col-sm-8">
				<input type="text" class="form-control" name="last_name" placeholder="Enter last Name*" >			
			</div>		
		</div>

		<div class="form-group">
			<label class="control-label">Select Gender</label>
			<div class="col-sm-8">
				<select type="text" class="form-control" name="gender">
					<option>Male</option>
					<option>Female</option>
				</select>			
			</div>		
		</div>

		<div class="form-group">
			<label class="control-label">Email</label>
			<div class="col-sm-8">
				<input type="text" class="form-control" name="email" placeholder="Enter email*" >			
			</div>		
		</div>

		<div class="form-group">
			<label class="control-label">Address</label>
			<div class="col-sm-8">
				<input type="text" class="form-control" name="address" placeholder="Enter address*" >			
			</div>		
		</div>

		<div class="form-group">
			<label class="control-label">Phone Number</label>
			<div class="col-sm-8">
				<input type="text" class="form-control" name="phone_number" placeholder="Enter phone number (optional)">			
			</div>		
		</div>

		<div class="form-group">
			<label class="control-label">Username</label>
			<div class="col-sm-8">
				<input type="text" class="form-control" name="username" placeholder="Enter username*" >			
			</div>		
		</div>

		<div class="form-group">
			<label class="control-label">Password</label>
			<div class="col-sm-8">
				<input type="text" class="form-control" name="password" placeholder="Enter Password*" >			
			</div>		
		</div>

		<div class="form-group">
			<label class="control-label">Confirm_Password</label>
			<div class="col-sm-8">
				<input type="text" class="form-control" name="confirm_password" placeholder="Re-enter Password*" >			
			</div>		
		</div>

		<div class="form-group">
			<div class="col-sm-8">
				<button type="submit" class="general-button">Register</button>
			</div>		
		</div>

	</form>
</div>
</div>

<?php
	include "footer.php";
?>
