<?php

include('connect.php');

$user_id = $_POST['user_id'];



		
		//$sql = "SELECT * FROM user_trilha WHERE user_id = '$user_id'";

        $sql = "SELECT user_trilha.trilha_id, user_trilha.user_id, trilha.trilha_name, trilha.trilha_type, trilha.id_categoria, trilha.trilha_status FROM trilha, user_trilha WHERE trilha.trilha_id = user_trilha.trilha_id AND user_trilha.user_id = '$user_id'";
        
		//$sql = "SELECT id_conteudo, conteudo_descricao, conteudo_codigoyoutube, trilha_videos_id FROM (SELECT trilha.trilha_id, conteudo.id_conteudo, conteudo.conteudo_descricao, conteudo.conteudo_codigoyoutube, trilha_videos.trilha_videos_id FROM trilha, trilha_videos, conteudo WHERE trilha.trilha_id = trilha_videos.trilha_id AND trilha_videos.id_conteudo = conteudo.id_conteudo ORDER BY trilha.trilha_id, conteudo.conteudo_descricao) x WHERE trilha_id = '$trilha_escolhida' ORDER BY conteudo_descricao";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['trilha_id' => $row["trilha_id"], 'trilha_name' => $row["trilha_name"], 'trilha_type' => $row["trilha_type"], 'id_categoria' => $row["id_categoria"], 'trilha_status' => $row["trilha_status"] ];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




