<?php

include('connect.php');



		
		$sql = "SELECT trilha.trilha_id, trilha.trilha_name, trilha.trilha_type_id, trilha.trilha_descricao, trilha.trilha_nomeamigavel, trilha.id_categoria, trilha.trilha_status_id, categoria.id_categoria, categoria.abrev_categoria, trilha_tipo.trilha_type_id, trilha_tipo.trilha_type_name, trilha_status.trilha_status_id, trilha_status.trilha_status_name FROM trilha, categoria, trilha_tipo, trilha_status WHERE trilha.id_categoria = categoria.id_categoria AND trilha.trilha_type_id = trilha_tipo.trilha_type_id AND trilha.trilha_status_id = trilha_status.trilha_status_id";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['trilha_id' => $row["trilha_id"], 'trilha_name' => $row["trilha_name"], 'trilha_type_name' => $row["trilha_type_name"], 'abrev_categoria' => $row["abrev_categoria"], 'trilha_status_name' => $row["trilha_status_name"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




