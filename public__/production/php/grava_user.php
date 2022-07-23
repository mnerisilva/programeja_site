<?php

include('connect.php');


if(count($_POST) > 0){
	
        $user_name    = $_POST['user_name'];
        $user_email   = $_POST['user_email'];
        $user_whatsapp   = $_POST['user_whatsapp'];
        $user_logradouro   = $_POST['user_logradouro'];
        $user_numero   = $_POST['user_numero'];
        $user_complemento   = $_POST['user_complemento'];
        $user_cep   = $_POST['user_cep'];
        $user_bairro   = $_POST['user_bairro'];
        $user_cidade   = $_POST['user_cidade'];
        $user_uf   = $_POST['user_uf'];
        $user_cpf   = $_POST['user_cpf'];
        $user_idade   = $_POST['user_idade'];
        $user_pix   = $_POST['user_pix'];
        //$user_date   = $_POST['user_date'];

		$sql = "INSERT INTO `user`( `user_name`, `user_email`, `user_whatsapp`, `user_logradouro`, `user_numero`, `user_complemento`, `user_cep`, `user_bairro`, `user_cidade`, `user_uf`, `user_cpf`, `user_idade`, `user_pix`) VALUES ('$user_name', '$user_email', '$user_whatsapp', '$user_logradouro', '$user_numero', '$user_complemento', '$user_cep', '$user_bairro', '$user_cidade', '$user_uf', '$user_cpf', '$user_idade', '$user_pix')";
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




