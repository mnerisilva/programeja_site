<?php

include('connect.php');



		
		$sql = "SELECT categoria.id_categoria, categoria.abrev_categoria, trilha.trilha_id, trilha.trilha_name, trilha.id_categoria, trilha_videos.id_conteudo, conteudo.id_conteudo, conteudo.conteudo_descricao, conteudo.conteudo_codigoyoutube FROM categoria, trilha, trilha_videos, conteudo WHERE categoria.id_categoria = trilha.id_categoria AND trilha.trilha_id = trilha_videos.trilha_id AND trilha_videos.id_conteudo = conteudo.id_conteudo ORDER BY categoria.abrev_categoria, trilha.trilha_name, conteudo.conteudo_descricao";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['id_categoria' => $row["id_categoria"], 'abrev_categoria' => $row["abrev_categoria"],'trilha_id' => $row["trilha_id"],'trilha_name' => $row["trilha_name"],'id_conteudo' => $row["id_conteudo"],'conteudo_descricao' => $row["conteudo_descricao"],'conteudo_codigoyoutube' => $row["conteudo_codigoyoutube"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




