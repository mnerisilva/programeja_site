<?php

include('connect.php');


if(count($_POST) > 0){
	
        $user_id    = $_POST['user_id'];

		$sql = "SELECT * FROM user WHERE user_id = $user_id";
		$result = mysqli_query($conn, $sql);
		/*if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}*/
 
        
       

		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['user_id' => $row["user_id"], 'user_name' => $row["user_name"],'user_email' => $row["user_email"],'user_whatsapp' => $row["user_whatsapp"],'user_logradouro' => $row["user_logradouro"],'user_numero' => $row["user_numero"],'user_complemento' => $row["user_complemento"],'user_cep' => $row["user_cep"],'user_bairro' => $row["user_bairro"],'user_cidade' => $row["user_cidade"],'user_uf' => $row["user_uf"],'user_cpf' => $row["user_cpf"],'user_idade' => $row["user_idade"],'user_login' => $row["user_login"],'user_pix' => $row["user_pix"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}	

		mysqli_close($conn);
	
}


?>




