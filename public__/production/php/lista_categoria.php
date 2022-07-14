<?php

include('connect.php');



		
		$sql = "SELECT * FROM categoria ORDER BY descricao_categoria";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['id_categoria' => $row["id_categoria"], 'descricao_categoria' => $row["descricao_categoria"],'abrev_categoria' => $row["abrev_categoria"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




