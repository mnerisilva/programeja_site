<?php

include('connect.php');


if(count($_POST) > 0){
	
        $user_id    = $_POST['user_id'];

		$sql = "SELECT * FROM user WHERE user_id = $user_id";
		$result = mysqli_query($conn, $sql);
		/*if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}*/
 
        
       

		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['user_id' => $row["user_id"], 'user_name' => $row["user_name"],'user_email' => $row["user_email"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}	

		mysqli_close($conn);
	
}


?>




