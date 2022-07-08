<?php

include('connect.php');


if(count($_POST) > 0){
	
     
		
        $trilha_name            = addslashes($_POST['trilha_name']);
        $trilha_type            = $_POST['trilha_type'];
        $trilha_descricao       = $_POST['trilha_descricao'];
        $trilha_nomeamigavel    = addslashes($_POST['trilha_nomeamigavel']);
        $id_categoria           = $_POST['id_categoria'];
        $trilha_status          = 1;

		$sql = "INSERT INTO `trilha`( `trilha_name`, `trilha_type`, `trilha_descricao`, `trilha_nomeamigavel`, `id_categoria`, `trilha_status`) VALUES ('$trilha_name', '$trilha_type', '$trilha_descricao', '$trilha_nomeamigavel', '$id_categoria', '$trilha_status')";
		if (mysqli_query($conn, $sql)) {
			//echo json_encode(array("statusCode"=>200));
		} 
		else {
			//echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
 
        
        //echo "New record has id: " . mysqli_insert_id($conn);


		
		$sql = "SELECT * FROM trilha";
		$result = mysqli_query($conn, $sql);

		$arr_json = [];
		$contador = 0;

		if($result){
			while($row = mysqli_fetch_array($result)){
				$arr_json[$contador] = ['trilha_name' => $row["trilha_name"], 'trilha_type' => $row["trilha_type"],'trilha_descricao' => $row["trilha_descricao"], 'trilha_nomeamigavel' => $row["trilha_nomeamigavel"], '$id_categoria' => $row["id_categoria"], 'trilha_status' => $row["trilha_status"]];
				$contador++;			
			}
	
			
			echo json_encode($arr_json);               
		}		

		mysqli_close($conn);
	
}


?>




