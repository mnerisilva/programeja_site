<?php

include('connect.php');




if(count($_POST) > 0){
	
        $id    = $_POST["id"];

		$sql = "DELETE FROM `conteudo` WHERE id_conteudo='$id'"; 
		if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
 
        

		mysqli_close($conn);
	
}


?>




