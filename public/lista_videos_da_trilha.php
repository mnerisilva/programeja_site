<?php

include('connect.php');

        //var_dump($_POST);
        //die();
        $trilha_escolhida = $_POST["trilha_escolhida"];
		
        $sql = "SELECT trilha.ttrilha_videos.id_conteudo, conteudo.id_conteudo FROM trilha_videos, conteudo WHERE trilha_videos.id_conteudo = conteudo.id_conteudo ORDER BY trilha_videos.id_conteudo"
		//$sql = "SELECT * FROM trilha WHERE trilha_id = '$trilha_escolhida'";
		$result = mysqli_query($conn, $sql);
		


		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['video_id' => $row["conteudo.id_conteudo"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	



?>




