<?php

include('connect.php');

//var_dump($_POST);
//die();


if(count($_POST) > 0){

        $trilha_escolhida       = $_POST['trilha_escolhida'];
        $video_a_desvincular    = $_POST['video_a_desvincular']; 

		//$sql = "DELETE INTO `trilha_videos`( `trilha_id`, `id_conteudo`) VALUES ('$trilha_escolhida', '$video_a_vincular')";
        $sql = "DELETE FROM `trilha_videos` WHERE `trilha_id` = '$trilha_escolhida' AND `trilha_videos_id` = '$video_a_desvincular'";
		if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
 
        

		mysqli_close($conn);
	
}


?>




