<?php

include('connect.php');

$user_id = $_POST['user_id'];



		
		//$sql = "SELECT * FROM user_trilha WHERE user_id = '$user_id'";

        $sql = "SELECT user_trilha.trilha_id, user_trilha.user_id, trilha.trilha_name, trilha.trilha_type_id, trilha.id_categoria, trilha.trilha_status_id, categoria.id_categoria, categoria.abrev_categoria, trilha_tipo.trilha_type_id, trilha_tipo.trilha_type_name, trilha_status.trilha_status_id, trilha_status.trilha_status_name FROM trilha, user_trilha, categoria, trilha_tipo, trilha_status WHERE trilha.trilha_id = user_trilha.trilha_id AND user_trilha.user_id = '$user_id' AND trilha.id_categoria = categoria.id_categoria AND trilha_tipo.trilha_type_id = trilha.trilha_type_id AND trilha_status.trilha_status_id = trilha.trilha_status_id";
        
		//$sql = "SELECT id_conteudo, conteudo_descricao, conteudo_codigoyoutube, trilha_videos_id FROM (SELECT trilha.trilha_id, conteudo.id_conteudo, conteudo.conteudo_descricao, conteudo.conteudo_codigoyoutube, trilha_videos.trilha_videos_id FROM trilha, trilha_videos, conteudo WHERE trilha.trilha_id = trilha_videos.trilha_id AND trilha_videos.id_conteudo = conteudo.id_conteudo ORDER BY trilha.trilha_id, conteudo.conteudo_descricao) x WHERE trilha_id = '$trilha_escolhida' ORDER BY conteudo_descricao";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['trilha_id' => $row["trilha_id"], 'trilha_name' => $row["trilha_name"], 'trilha_type_name' => $row["trilha_type_name"], 'abrev_categoria' => $row["abrev_categoria"], 'trilha_status_name' => $row["trilha_status_name"] ];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




