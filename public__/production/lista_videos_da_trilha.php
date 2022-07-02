<?php

include('connect.php');

        //var_dump($_POST);
        //die();
        $trilha_escolhida = $_POST["trilha_escolhida"];
		
		/*$sql = "SELECT id_conteudo, conteudo_descricao, conteudo_codigoyoutube FROM (SELECT trilha.trilha_id, conteudo.id_conteudo, conteudo.conteudo_descricao, conteudo.conteudo_codigoyoutube FROM trilha, trilha_videos, conteudo WHERE trilha.trilha_id = trilha_videos.trilha_id AND trilha_videos.id_conteudo = conteudo.id_conteudo ORDER BY trilha.trilha_id, conteudo.conteudo_descricao) x WHERE trilha_id = '$trilha_escolhida' ORDER BY conteudo_descricao";*/
		$sql = "SELECT id_conteudo, conteudo_descricao, conteudo_codigoyoutube, trilha_videos_id FROM (SELECT trilha.trilha_id, conteudo.id_conteudo, conteudo.conteudo_descricao, conteudo.conteudo_codigoyoutube, trilha_videos.trilha_videos_id FROM trilha, trilha_videos, conteudo WHERE trilha.trilha_id = trilha_videos.trilha_id AND trilha_videos.id_conteudo = conteudo.id_conteudo ORDER BY trilha.trilha_id, conteudo.conteudo_descricao) x WHERE trilha_id = '$trilha_escolhida' ORDER BY conteudo_descricao";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['id_conteudo' => $row["id_conteudo"], 'conteudo_descricao' => $row["conteudo_descricao"], 'conteudo_codigoyoutube' => $row["conteudo_codigoyoutube"], 'trilha_videos_id' => $row["trilha_videos_id"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




