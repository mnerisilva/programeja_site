<?php

include('connect.php');




if(count($_POST) > 0){
	
        $user_id    = $_POST["user_id"];

		$sql = "DELETE FROM `user` WHERE user_id='$user_id'"; 
		if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
 
        

		mysqli_close($conn);
	
}


?>




