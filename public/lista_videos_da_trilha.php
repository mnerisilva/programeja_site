<?php

include('connect.php');

        //var_dump($_POST);
        //die();
        $trilha_escolhida = $_POST["trilha_escolhida"];
		
		$sql = "SELECT id_conteudo, conteudo_descricao FROM (SELECT trilha.trilha_id, conteudo.id_conteudo, conteudo.conteudo_descricao FROM trilha, trilha_videos, conteudo WHERE trilha.trilha_id = trilha_videos.trilha_id AND trilha_videos.id_conteudo = conteudo.id_conteudo ORDER BY trilha.trilha_id, conteudo.conteudo_descricao) x WHERE trilha_id = '$trilha_escolhida' ORDER BY conteudo_descricao";
        //$sql = "SELECT trilha.ttrilha_videos.id_conteudo, conteudo.id_conteudo FROM trilha_videos, conteudo WHERE trilha_videos.id_conteudo = conteudo.id_conteudo ORDER BY trilha_videos.id_conteudo"
		//$sql = "SELECT * FROM trilha WHERE trilha_id = '$trilha_escolhida'";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['id_conteudo' => $row["id_conteudo"], 'conteudo_descricao' => $row["conteudo_descricao"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




