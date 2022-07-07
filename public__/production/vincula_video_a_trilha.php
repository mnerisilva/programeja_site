<?php

include('connect.php');

//var_dump($_POST);
//die();


if(count($_POST) > 0){
	
        $trilha_escolhida   = $_POST['trilha_escolhida'];
        $video_a_vincular   = $_POST['video_a_vincular'];

		$sql = "INSERT INTO `trilha_videos`( `trilha_id`, `id_conteudo`) VALUES ('$trilha_escolhida', '$video_a_vincular')";
		if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
 
        

		mysqli_close($conn);
	
}


?>




