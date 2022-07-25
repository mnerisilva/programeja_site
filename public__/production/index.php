<?php
// Conexão
require_once 'php/connect.php';

// Sessão
session_start();

// Botão enviar
if(isset($_POST['btn-entrar'])):
	$erros = array();
	$user_login = mysqli_escape_string($conn, $_POST['user_login']);
	$user_password = mysqli_escape_string($conn, $_POST['user_password']);

	if(isset($_POST['lembrar-senha'])):

		setcookie('login', $user_login, time()+3600);
		setcookie('senha', md5($user_password), time()+3600);
	endif;

	if(empty($user_login) or empty($user_password)):
		$erros[] = "<li> O campo login/senha precisa ser preenchido </li>";
	else:
		// 105 OR 1=1 
	    // 1; DROP TABLE teste

		$sql = "SELECT user_login FROM user WHERE user_login = '$user_login'";
		$resultado = mysqli_query($conn, $sql);		

		if(mysqli_num_rows($resultado) > 0):
		$user_password = md5($user_password);       
		$sql = "SELECT * FROM user WHERE user_login = '$user_login' AND user_password = '$user_password'";



		$resultado = mysqli_query($conn, $sql);

			if(mysqli_num_rows($resultado) == 1){
				$dados = mysqli_fetch_array($resultado);
				mysqli_close($conn);
				$_SESSION['logado'] = true;
				$_SESSION['id_usuario'] = $dados['user_id'];
				$_SESSION['user_access_type'] = $dados['user_access_type'];
				$_SESSION['user_name'] = $dados['user_name'];
				$_SESSION['user_photo'] = $dados['user_photo'];
        if($_SESSION['user_access_type'] == 1){
				  header('Location: dashboard_admin.php');
        }elseif($_SESSION['user_access_type'] == 2){
				  header('Location: plataforma.php');
        }
      } else {
				$erros[] = "<li> Usuário e senha não conferem </li>";
      }

		else:
			$erros[] = "<li> Usuário inexistente </li>";
		endif;

	endif;

endif;
?>

<html>
<head>
	<title>Login</title>
	<meta charset="utf-8">
</head>
<body>

<?php 
if(!empty($erros)):
	foreach($erros as $erro):
		echo $erro;
	endforeach;
endif;
?>
<!doctype html>
<html lang="pt-br">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="login/fonts/icomoon/style.css">

    <link rel="stylesheet" href="login/css/owl.carousel.min.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="login/css/bootstrap.min.css">
    
    <!-- Style -->
    <link rel="stylesheet" href="login/css/style.css">

    <title>Login #7</title>
  </head>
  <body>
  

  
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="login/images/undraw_remotely_2j6y.svg" alt="Image" class="img-fluid">
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4">
              <h3>Gestão de trilhas de estudo</h3>

              <?php 
              if(!empty($erros)):
                foreach($erros as $erro):
                  echo $erro;
                endforeach;
              endif;
              ?>              
              <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            </div>
            <form  action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
              <div class="form-group first">
                <label for="username">Username</label>
                <!--<input type="text" class="form-control" id="username" name="login" value="<?php //echo isset($_COOKIE['login']) ? $_COOKIE['login'] : '' ?>">-->
                <input type="text" class="form-control" id="username" name="user_login" value="">

              </div>
              <div class="form-group last mb-4">
                <label for="password">Password</label>
                <!--<input type="password" class="form-control" id="password" name="senha" value="<?php //echo isset($_COOKIE['senha']) ? $_COOKIE['senha'] : '' ?>">-->
                <input type="password" class="form-control" id="password" name="user_password" value="">
                
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                  <input type="checkbox" checked="checked" name="lembrar-senha"/>
                  <div class="control__indicator"></div>
                </label>
                <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span> 
              </div>

              <input type="submit" value="Log In" class="btn btn-block btn-primary" name="btn-entrar">

              <span class="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>
              
              <div class="social-login">
                <a href="#" class="facebook">
                  <span class="icon-facebook mr-3"></span> 
                </a>
                <a href="#" class="twitter">
                  <span class="icon-twitter mr-3"></span> 
                </a>
                <a href="#" class="google">
                  <span class="icon-google mr-3"></span> 
                </a>
              </div>
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>

  
    <script src="login/js/jquery-3.3.1.min.js"></script>
    <script src="login/js/popper.min.js"></script>
    <script src="login/js/bootstrap.min.js"></script>
    <script src="login/js/main.js"></script>
  </body>
</html>