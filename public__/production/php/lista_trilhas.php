<?php

include('connect.php');



		
		$sql = "SELECT * FROM trilha";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['trilha_id' => $row["trilha_id"], 'trilha_name' => $row["trilha_name"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




