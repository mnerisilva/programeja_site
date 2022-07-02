<?php

include('connect.php');



		
		$sql = "SELECT * FROM user ORDER BY user_name";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['user_id' => $row["user_id"], 'user_name' => $row["user_name"],'user_photo' => $row["user_photo"],'user_date' => $row["user_date"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




