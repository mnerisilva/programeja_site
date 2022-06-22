<?php    
    $servername = "localhost";
    $database = "programeja";
    $username = "root";
    $password = "";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if (!$conn) {
        die("Conexão falhou: " . mysqli_connect_error());
    }
    mysqli_set_charset($conn, 'utf8mb4');
    
    
?>