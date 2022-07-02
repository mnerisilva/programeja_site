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
 
        
        //echo "New record has id: " . mysqli_insert_id($conn);

        $id_doIndice = mysqli_insert_id($conn);


		$sql_2 = "INSERT INTO `conteudo`( `id_conteudo_indice`, `conteudo_descricao`, `conteudo_codigoyoutube`, `id_conteudotipo`) VALUES ('$id_doIndice', '$conteudo_titulo', '$id_codigoyt', '$id_conteudotipo')";
		if (mysqli_query($conn, $sql_2)) {
			//echo json_encode(array("statusCode"=>200));
		} 
		else {
			//echo "Error: " . $sql_2 . "<br>" . mysqli_error($conn);
		}  
		
		
		$sql = "SELECT * FROM conteudo";
		$result = mysqli_query($conn, $sql);
		
		/*if (mysqli_num_rows($result) > 0) {
		  while($row = mysqli_fetch_assoc($result)) {
			echo "Vídeo: " . $row["conteudo_descricao"]. " - Código: " . $row["conteudo_codigoyoutube"]. "<br>";
		  }
		} else {
		  echo "0 results";
		}*/

		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['id' => $row["id_conteudo"], 'id_conteudo_indice' => $row["id_conteudo_indice"],'descricao' => $row["conteudo_descricao"], 'codigo' => $row["conteudo_codigoyoutube"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	
}


?>




