<?php
	include "core/init.php";
	include "header.php";

	$error = '';

	if (isset($_POST['phone_number'])) {
		$username = $_POST['username'];
		$phone_number = $_POST['phone_number'];

		if (empty($username) || empty($phone_number)) {
			$error = 'Please enter your username and phone number.';
		} elseif (!user_exists($username)) {
			$error = 'Invalid credentials entered.';
		} elseif (!user_name_matches_phone($username, $phone_number)) {
			$error = 'Invalid credentials entered.';
		} else{
			$user_data = retrieve_recovery_data($username, $phone_number);
		}
	}
?>

<body class="mainbody">
<!-- <div class="fade-overlay"></div>
<div class="fade-overlay2"></div> -->
	<div class="login-form" style="">
		<form class="login-content" method="post">
			<h3 style="color: white;" id="details">Kindly Enter Your Details
			</h3>

			<?php
				if (isset($_POST['username'])) {
					if (!empty($error)) {
						echo '<span style="color: red;">'.$error.'</span>';
					} else{
						echo '<h4 style="color: #ffffff;">Please Retrieve your data below:</h4><br>';
						echo '<h5><b style="color: darkgreen;">Email:</b> '.$user_data[0]['email'].'</h5><br>';
						echo '<h5><b style="color: darkgreen;">New Password:</b> '.$user_data[0]['password'].'</h5>';
						echo '<h5><a href="login.php">Click here to sign into your account</a></h5>';
						echo '
							<style>
								.retrieve_div, #details{
									display: none;
								}

								.login-form{
									margin-left: 25%;
									width: 50%;
									padding: 15px;
								}

							</style>
						';
					}
				}
			?>
			<div class="form-group">
				<div class="retrieve_div">
					<label class="control-label" style="color: white; text-align:center;">Username</label>
					<input type="text" class="form-control col-sm-6" name="username" placeholder="Enter Username*" required="true"><br>

					<label class="control-label" style="color: white; text-align:center;">Phone Number</label>
					<input type="text" class="form-control col-sm-6" name="phone_number" placeholder="Phone Number*" required="true"><br>

					<button type="submit" class="general-button" 
					style="color: white; text-align:center;">Sumbit
					</button>			
				</div>		
			</div>			
		</form>
	</div>

</body>