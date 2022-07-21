<?php

include('connect.php');


        $user_id = $_POST['user_id'];
		
		$sql = "SELECT * FROM user_trilha WHERE user_id = $user_id";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['usertrilha_id' => $row["usertrilha_id"], 'trilha_id' => $row["trilha_id"],'user_id' => $row["user_id"]];
				$contador++;			
			}
	
			
			//echo json_encode($arr_json);               
		}
        
        
        echo count($arr_json);
        

		mysqli_close($conn);
	



?>




