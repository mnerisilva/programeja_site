<?php

include('connect.php');


if(count($_POST) > 0){
	
        $userid   = $_POST['userid'];
        $trilhaid   = $_POST['trilhaid'];

		$sql = "INSERT INTO `user_trilha`( `trilha_id`, `user_id`) VALUES ('$trilhaid', '$userid')";
		if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
 
        

		mysqli_close($conn);
	
}


?>