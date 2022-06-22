<?php

include('connect.php');



		
		$sql = "SELECT * FROM conteudo";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['id' => $row["id_conteudo_indice"],'descricao' => $row["conteudo_descricao"], 'codigo' => $row["conteudo_codigoyoutube"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




