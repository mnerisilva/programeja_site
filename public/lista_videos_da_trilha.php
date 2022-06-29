<?php

include('connect.php');

        //var_dump($_POST);
        //die();
        $trilha_escolhida = $_POST["trilha_escolhida"];
		
		$sql = "SELECT * FROM trilha WHERE trilha_id = '$trilha_escolhida'";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['trilha_id' => $row["trilha_id"], 'trilha_name' => $row["trilha_name"],'trilha_type' => $row["trilha_type"], 'trilha_descricao' => $row["trilha_descricao"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




