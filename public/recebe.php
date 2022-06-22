<?php

include('connect.php');


if(count($_POST) > 0){
	
        $id_conteudotipo    = 2;
        $conteudo_titulo    = addslashes($_POST['nomevideo']);
        $id_categoria       = $_POST['categoria'];
        $id_codigoyt        = $_POST['codigoyt'];

		$sql = "INSERT INTO `conteudo_indice`( `id_conteudotipo`, `conteudo_titulo`, `id_categoria`) VALUES ('$id_conteudotipo', '$conteudo_titulo', '$id_categoria')";
		if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
 
        
        echo "New record has id: " . mysqli_insert_id($conn);

        $id_doIndice = mysqli_insert_id($conn);


		$sql_2 = "INSERT INTO `conteudo`( `id_conteudo_indice`, `conteudo_descricao`, `conteudo_codigoyoutube`, `id_conteudotipo`) VALUES ('$id_doIndice', '$conteudo_titulo', '$id_codigoyt', '$id_conteudotipo')";
		if (mysqli_query($conn, $sql_2)) {
                 
        echo '<a href="http://localhost/programeja_site/public/cadastro_de_conteudo_video.php"></a>';
			//echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql_2 . "<br>" . mysqli_error($conn);
		}   
		mysqli_close($conn);
	
}


?>




