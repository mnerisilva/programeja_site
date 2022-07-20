<?php

include('connect.php');


if(count($_POST) > 0){
	
        $id_conteudotipo    = 2;
        $conteudo_titulo    = addslashes($_POST['nomevideo']);
        $id_categoria       = $_POST['categoria'];
        $id_codigoyt        = $_POST['codigoyt'];

		$sql = "INSERT INTO `conteudo_indice`( `id_conteudotipo`, `conteudo_titulo`, `id_categoria`) VALUES ('$id_conteudotipo', '$conteudo_titulo', '$id_categoria')";
		if (mysqli_query($conn, $sql)) {
			//echo json_encode(array("statusCode"=>200));
		} 
		else {
			//echo "Error: " . $sql . "<br>" . mysqli_error($conn);
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




