<?php

include('connect.php');


if(count($_POST) > 0){

        $userid       = $_POST['userid'];
        $trilhaid    = $_POST['trilhaid']; 

		//$sql = "DELETE INTO `trilha_videos`( `trilha_id`, `id_conteudo`) VALUES ('$trilha_escolhida', '$video_a_vincular')";
        $sql = "DELETE FROM `user_trilha` WHERE `user_id` = '$userid' AND `trilha_id` = '$trilhaid'";
		if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
 
        

		mysqli_close($conn);
	
}


?>




