<?php

include('connect.php');


if(count($_POST) > 0){

        

        $user_id    = $_POST['user_id_edit'];
        $user_name    = $_POST['user_name_edit'];
        $user_email   = $_POST['user_email_edit'];
        $user_whatsapp   = $_POST['user_whatsapp_edit'];
        $user_logradouro   = $_POST['user_logradouro_edit'];
        $user_numero   = $_POST['user_numero_edit'];
        $user_complemento   = $_POST['user_complemento_edit'];
        $user_cep   = $_POST['user_cep_edit'];
        $user_bairro   = $_POST['user_bairro_edit'];
        $user_cidade   = $_POST['user_cidade_edit'];
        $user_uf   = $_POST['user_uf_edit'];
        $user_cpf   = $_POST['user_cpf_edit'];
        $user_idade   = $_POST['user_idade_edit'];
        $user_pix   = $_POST['user_pix_edit'];
        $user_photo   = $_POST['user_photo_edit'];
        //$user_date   = $_POST['user_date'];


		
        $sql = "UPDATE user SET user_name = '$user_name', user_email = '$user_email', user_whatsapp = '$user_whatsapp', user_logradouro = '$user_logradouro', user_numero = '$user_numero', user_complemento = '$user_complemento', user_cep = '$user_cep', user_bairro = '$user_bairro', user_cidade = '$user_cidade', user_uf = '$user_uf', user_cpf = '$user_cpf', user_idade = '$user_idade', user_pix = '$user_pix', user_photo = '$user_photo' WHERE user_id = '$user_id'";
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




