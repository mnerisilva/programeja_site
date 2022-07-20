<?php

include('connect.php');


if(count($_POST) > 0){
	
        $user_name    = $_POST['user_name'];
        $user_email   = $_POST['user_email'];
        $user_photo   = $_POST['user_photo'];

		$sql = "INSERT INTO `user`( `user_name`, `user_email`, `user_photo`) VALUES ('$user_name', '$user_email', '$user_photo')";
		if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
 
        
       

		$arr_json = [];
		$contador = 0;

		/*if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['id' => $row["id_conteudo"], 'id_conteudo_indice' => $row["id_conteudo_indice"],'descricao' => $row["conteudo_descricao"], 'codigo' => $row["conteudo_codigoyoutube"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}*/		

		mysqli_close($conn);
	
}


?>




