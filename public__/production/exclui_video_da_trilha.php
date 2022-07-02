<?php

include('connect.php');

        //var_dump($_POST);
        //die();
        $video_a_excluir = $_POST["video_a_excluir"];
		
		$sql = "DELETE FROM trilha_videos WHERE trilha_videos_id = '$video_a_excluir'";
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




