<?php
// Conexão
require_once 'PHP/connect.php';

// Sessão
session_start();

// Verificação
if(!isset($_SESSION['logado'])):
	header('Location: index.php');
endif;

// Dados
$user_id = $_SESSION['id_usuario'];
$user_name =  $_SESSION['user_name'];
$user_photo =  $_SESSION['user_photo'];
$saudacao =  $_SESSION['saudacao'];  
$sql = "SELECT * FROM user WHERE user_id = '$user_id'";
$resultado = mysqli_query($conn, $sql);
$dados = mysqli_fetch_array($resultado);
mysqli_close($conn);
?>


<!DOCTYPE html>
<html lang="pt-br" style="overflow-y: hidden; overflow-x: hidden;">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>| Dashboard Admin | </title>

    <!-- Bootstrap -->
    <link href="../vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- NProgress -->
    <link href="../vendors/nprogress/nprogress.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="../build/css/custom.min.css" rel="stylesheet">
    <!--<link href="custom.css" rel="stylesheet">-->
    <link href="custom_plataforma.css" rel="stylesheet">
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">








        <!--<div class="mask"></div>-->




        <!-- Modal -->
        <div class="modal fade" id="form_cadastro_de_user" tabindex="-1" role="dialog" aria-labelledby="form_cadastro_de_userLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="form_cadastro_de_userLabel"><i class="fa-solid fa-user-plus"></i> Usuário <small>Cadastrar</small></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <form class="form-modal-que-serve-ao-cadastro-de-user form-horizontal form-label-left">
                        <!-- primeira linha -->
                        <div class="form-group row ">
                          <label class="control-label col-md-1 col-sm-1 ">Nome</label>
                          <div class="col-md-3 col-sm-3 ">
                            <input type="text" class="form-control" id="user_name" required="" name="user_name" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">E-mail</label>
                          <div class="col-md-4 col-sm-4 ">
                            <input type="email" class="form-control" id="user_email" required="" name="user_email" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">WhatsApp</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_whatsapp" required="" name="user_whatsapp" data-inputmask="'mask': '(99)99999-9999'">
                          </div>
                        </div>                       
                        <div class="ln_solid"></div>


                        <!-- segunda linha -->
                      <div class="container-logradouro">
                        <div class="form-group row ">
                          <h6>Informações de endereço</h6>
                        </div>
                        <div class="form-group row ">
                          <label class="control-label col-md-1 col-sm-1 ">Logradouro</label>
                          <div class="col-md-6 col-sm-6 ">
                            <input type="text" class="form-control" id="user_logradouro" name="user_logradouro" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Número</label>
                          <div class="col-md-1 col-sm-1 ">
                            <input type="text" class="form-control" id="user_numero" name="user_numero" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Complemento</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_complemento" name="user_complemento" placeholder="">
                          </div>
                        </div>  


                        <!-- terceira linha -->
                        <div class="form-group row ">
                          <label class="control-label col-md-1 col-sm-1 ">Bairro</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_bairro" required="" name="user_bairro" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Cidade</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_cidade" required="" name="user_cidade" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">UF</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_uf" required="" name="user_uf" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Cep</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_cep" required="" name="user_cep" placeholder="" data-inputmask="'mask': '99999-999'">
                          </div>
                        </div>
                      </div>


                        <!-- quarta linha -->
                        <div class="form-group row mt-4">
                          <label class="control-label col-md-1 col-sm-1 ">Idade</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_idade" required="" name="user_idade" placeholder="">
                          </div>
                          <!--<label class="control-label col-md-1 col-sm-1 ">Login</label>
                          <div class="col-md-3 col-sm-3 ">
                            <input type="text" class="form-control" id="user_login" required="" name="user_login" placeholder="">
                          </div>-->
                          <label class="control-label col-md-1 col-sm-1 ">Chave Pix</label>
                          <div class="col-md-4 col-sm-4 ">
                            <input type="text" class="form-control" id="user_pix" required="" name="user_pix" placeholder="">
                          </div>
                        </div> 

                        <!-- quinta linha -->
                        <div class="form-group row">
                          <label class="control-label col-md-1 col-sm-1 ">Cpf</label>
                          <div class="col-md-4 col-sm-4 ">
                            <input type="text" class="form-control" id="user_cpf" required="" name="user_cpf" data-inputmask="'mask': '999.999.999-99'">
                          </div>
                        </div>
                        <div class="ln_solid"></div>
                        <div class="form-group">
                          <div class="col-md-9 col-sm-9">
                            <!--<button type="button" class="btn btn-secondary button-4 cancela-modal-que-serve-ao-cadastro-de-user">Cancela</button>-->
                            <!--<button type="submit" class="btn btn-secondary btn-salvar btn-salvar-categoria submit">Salvar categoria</button>-->
                          </div>
                          <div class="col-md-12 col-sm-12">
                            <div class="user-message-saved d-flex justify-content-center align-items-center text-white bg-success">
                              <h4><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Usuário inserido com sucesso!</h4>                              
                            </div>
                          </div>
                        </div> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary button-4 btn-cancelar-salvar-user" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-secondary button-4 btn-salvar btn-salvar-user submit">Salvar</button>
                </div>                 
            </form> 
            </div>
            </div>
        </div>        



        



        <!-- Modal -->
        <div class="modal fade" id="form-cadastro-de-user-edit" tabindex="-1" role="dialog" aria-labelledby="form_cadastro_de_userLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="form_cadastro_de_userLabel"><i class="fa-solid fa-user-plus"></i> Usuário <small>Editar  </small><span></span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <form id="form-modal-cadastro-de-user-edit" class="form-modal-cadastro-de-user-edit form-horizontal form-label-left">

                    <!-- primeira linha -->
                        <div class="form-group row ">
                          <label class="control-label col-md-1 col-sm-1 ">Nome</label>
                          <div class="col-md-3 col-sm-3 ">
                            <input type="text" class="form-control" id="user_name_edit" required="" name="user_name_edit" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">E-mail</label>
                          <div class="col-md-4 col-sm-4 ">
                            <input type="email" class="form-control" id="user_email_edit" required="" name="user_email_edit" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">WhatsApp</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_whatsapp_edit" required="" name="user_whatsapp_edit" data-inputmask="'mask': '(99)99999-9999'">
                          </div>
                        </div>                       
                        <div class="ln_solid"></div>


                        <!-- segunda linha -->
                      <div class="container-logradouro">
                        <div class="form-group row ">
                          <h6>Informações de endereço</h6>
                        </div>
                        <div class="form-group row ">
                          <label class="control-label col-md-1 col-sm-1 ">Logradouro</label>
                          <div class="col-md-6 col-sm-6 ">
                            <input type="text" class="form-control" id="user_logradouro_edit" required="" name="user_logradouro_edit" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Número</label>
                          <div class="col-md-1 col-sm-1 ">
                            <input type="text" class="form-control" id="user_numero_edit" required="" name="user_numero_edit" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Complemento</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_complemento_edit" required="" name="user_complemento_edit" placeholder="">
                          </div>
                        </div>  


                        <!-- terceira linha -->
                        <div class="form-group row ">
                          <label class="control-label col-md-1 col-sm-1 ">Bairro</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_bairro_edit" required="" name="user_bairro_edit" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Cidade</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_cidade_edit" required="" name="user_cidade_edit" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">UF</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_uf_edit" required="" name="user_uf_edit" placeholder="">
                          </div>
                          <label class="control-label col-md-1 col-sm-1 ">Cep</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_cep_edit" required="" name="user_cep_edit" placeholder="" data-inputmask="'mask': '99999-999'">
                          </div>
                        </div>
                      </div>


                        <!-- quarta linha -->
                        <div class="form-group row mt-4">
                          <label class="control-label col-md-1 col-sm-1 ">Idade</label>
                          <div class="col-md-2 col-sm-2 ">
                            <input type="text" class="form-control" id="user_idade_edit" required="" name="user_idade_edit" placeholder="">
                          </div>
                          <!--<label class="control-label col-md-1 col-sm-1 ">Login</label>
                          <div class="col-md-3 col-sm-3 ">
                            <input type="text" class="form-control" id="user_login_edit" required="" name="user_login_edit" placeholder="">
                          </div>-->
                          <label class="control-label col-md-1 col-sm-1 ">Chave Pix</label>
                          <div class="col-md-4 col-sm-4 ">
                            <input type="text" class="form-control" id="user_pix_edit" required="" name="user_pix_edit" placeholder="">
                          </div>
                        </div> 

                        
                        <div class="form-group row">
                          <label class="control-label col-md-1 col-sm-1 ">Cpf</label>
                          <div class="col-md-4 col-sm-4 ">
                            <input type="text" class="form-control" id="user_cpf_edit" required="" name="user_cpf_edit" data-inputmask="'mask': '999.999.999-99'">
                          </div>
                        </div>
                        
                        

                        <!--<div class="form-group row ">
                        </div>-->                         
                        <div class="ln_solid"></div>
                        <div class="form-group">
                          <div class="col-md-9 col-sm-9">
                            <!--<button type="button" class="btn btn-secondary button-4 cancela-modal-que-serve-ao-cadastro-de-user">Cancela</button>-->
                            <!--<button type="submit" class="btn btn-secondary btn-salvar btn-salvar-categoria submit">Salvar categoria</button>-->
                          </div>
                          <div class="col-md-12 col-sm-12">
                            <div class="user-message-saved d-flex justify-content-center align-items-center text-white bg-success">
                              <h4><i class="fa-solid fa-check"></i>&nbsp;&nbsp;Usuário inserido com sucesso!</h4>                              
                            </div>
                          </div>
                        </div> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary button-4 btn-cancelar-salvar-user-edit" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-secondary button-4 btn-salvar btn-salvar-user-edit submit">Salvar</button>
                </div>                 
            </form> 
            </div>
            </div>
        </div> 






        <!-- Modal -->
        <div class="modal fade" id="form_cadastro_de_categoria" tabindex="-1" role="dialog" aria-labelledby="form_cadastro_de_categoriaLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="form_cadastro_de_categoriaLabel"><i class="fa-solid fa-user-plus"></i> Categoria <small>Cadastrar</small></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <form class="form-modal-que-serve-aos-cadastros form-horizontal form-label-left">
                        <div class="form-group row ">
                          <label class="control-label col-md-3 col-sm-3 ">Nome</label>
                          <div class="col-md-9 col-sm-9 ">
                            <input type="text" class="form-control" id="categoria_modal_cadastro_nome" required="" name="categoria_modal_cadastro_nome" placeholder="">
                          </div>
                        </div>  
                        <div class="form-group row ">
                          <label class="control-label col-md-3 col-sm-3 ">Nome curto</label>
                          <div class="col-md-9 col-sm-9 ">
                            <input type="text" class="form-control" id="categoria_modal_cadastro_abrev_categoria" required="" name="categoria_modal_cadastro_abrev_categoria" placeholder="">
                          </div>
                        </div>                         
                        <div class="ln_solid"></div>
                        <div class="form-group">
                          <div class="col-md-9 col-sm-9">
                            <!--<button type="button" class="btn btn-secondary button-4 cancela-modal-que-serve-aos-cadastros">Cancela</button>-->
                            <!--<button type="submit" class="btn btn-secondary btn-salvar btn-salvar-categoria submit">Salvar categoria</button>-->
                          </div>
                          <div class="col-md-2 col-sm-2">
                            <div class="categoria-save-message text-success"></div>
                          </div>
                        </div> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary button-4 cancela-modal-que-serve-aos-cadastros" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-secondary button-4 btn-salvar-categoria submit">Salvar</button>
                </div>                 
            </form> 
            </div>
            </div>
        </div>


        



        <!-- Modal -->
        <div class="modal fade" id="form_cadastro_de_tipo" tabindex="-1" role="dialog" aria-labelledby="form_cadastro_de_tipoLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="form_cadastro_de_tipoLabel"><i class="fa-solid fa-user-plus"></i> Tipo <small>Cadastrar</small></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <form class="form-modal-que-serve-aos-cadastros-tipo form-horizontal form-label-left">
                        <div class="form-group row ">
                          <label class="control-label col-md-3 col-sm-3 ">Nome</label>
                          <div class="col-md-9 col-sm-9 ">
                            <input type="text" class="form-control" id="tipo_modal_cadastro_nome" required="" name="tipo_modal_cadastro_nome" placeholder="">
                          </div>
                        </div>                         
                        <div class="ln_solid"></div>
                        <div class="form-group">
                          <div class="col-md-9 col-sm-9">
                            <!--<button type="button" class="btn btn-secondary button-4 cancela-modal-que-serve-aos-cadastros-tipo">Cancela</button>-->
                            <!--<button type="submit" class="btn btn-secondary btn-salvar btn-salvar-categoria-tipo submit">Salvar tipo</button>-->
                          </div>
                          <div class="col-md-2 col-sm-2">
                            <div class="categoria-save-message text-success"></div>
                          </div>
                        </div> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary button-4 cancela-modal-que-serve-aos-cadastros-tipo" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-secondary btn-salvar btn-salvar-tipo submit">Salvar</button>
                </div>                  
            </form> 
            </div>
            </div>
        </div>








        <div class="col-md-3 left_col">
          <div class="left_col scroll-view" id="left_col">
            <div class="navbar nav_title" style="border: 0;">
              <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>ProGrameJá!!!</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <!--<img src="images/img.jpg" alt="..." class="img-circle profile_img">-->
                <img src="<?php echo $dados['user_photo']; ?>" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span><?php echo $saudacao; ?></span>
                <h2><?php echo $dados['user_name']; ?></h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <h3><span class="badge badge-secondary">Html</span> <span> <i class="fa fa-arrow-down"></i><small>trilhas</small></span></h3>
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a><i class="fa-solid fa-list-ul"></i><span> Primeiro Html </span><span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="index.html">Como INSERIR IMAGEM no HTML - COMPLETO!!!! Passo a</a></li>
                      <li><a href="index2.html">HTML em 7 minutos</a></li>
                      <li><a href="index3.html">HTML in 100 Seconds</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a><i class="fa-solid fa-list-ul"></i><span> Html como você nunca viu </span><span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="e_commerce.html">Aprendendo Lógica de Programação</a></li>
                      <li><a href="projects.html">Lógica de Programação - Aula 01 - Introdução</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a><i class="fa-solid fa-list-ul"></i><span> Primeiro Html </span><span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="e_commerce.html">Aprendendo Lógica de Programação</a></li>
                      <li><a href="projects.html">Lógica de Programação - Aula 01 - Introdução</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <h3><span class="badge badge-secondary">Lógica</span><span> <i class="fa fa-arrow-down"></i><small>trilhas</small></span></h3>
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a><i class="fa-solid fa-list-ul"></i><span> Iniciando com lógica de programação </span><span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="e_commerce.html">Aprendendo Lógica de Programação</a></li>
                      <li><a href="projects.html">Lógica de Programação - Aula 01 - Introdução</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <h3><span class="badge badge-secondary">Lógica</span></h3>
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a><i class="fa-solid fa-list-ul"></i><span> Iniciando com lógica de programação </span><span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="e_commerce.html">Aprendendo Lógica de Programação</a></li>
                      <li><a href="projects.html">Lógica de Programação - Aula 01 - Introdução</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <h3><span class="badge badge-secondary">Banco de dados</span><span> <i class="fa fa-arrow-down"></i><small>trilhas</small></span></h3>
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a><i class="fa-solid fa-list-ul"></i><span> Iniciando com lógica de programação </span><span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="e_commerce.html">Aprendendo Lógica de Programação</a></li>
                      <li><a href="projects.html">Lógica de Programação - Aula 01 - Introdução</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <h3><span class="badge badge-secondary">Css</span><span> <i class="fa fa-arrow-down"></i><small>trilhas</small></span></h3>
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a><i class="fa-solid fa-list-ul"></i><span> Iniciando com lógica de programação </span><span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="e_commerce.html">Aprendendo Lógica de Programação</a></li>
                      <li><a href="projects.html">Lógica de Programação - Aula 01 - Introdução</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <h3><span class="badge badge-secondary">Flex box</span><span> <i class="fa fa-arrow-down"></i><small>trilhas</small></span></h3>
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a><i class="fa-solid fa-list-ul"></i><span> Iniciando com lógica de programação </span><span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="e_commerce.html">Aprendendo Lógica de Programação</a></li>
                      <li><a href="projects.html">Lógica de Programação - Aula 01 - Introdução</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <h3><span class="badge badge-secondary">Algoritimo</span><span> <i class="fa fa-arrow-down"></i><small>trilhas</small></span></h3>
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a><i class="fa-solid fa-list-ul"></i><span> Iniciando com lógica de programação </span><span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="e_commerce.html">Aprendendo Lógica de Programação</a></li>
                      <li><a href="projects.html">Lógica de Programação - Aula 01 - Introdução</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              s<h3><span class="badge badge-secondary">Devops</span><span> <i class="fa fa-arrow-down"></i><small>trilhas</small></span></h3>
              <div class="menu_section">
                <ul class="nav side-menu">
                  <li><a><i class="fa-solid fa-list-ulg"></i><span> Iniciando com lógica de programação </span><span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="e_commerce.html">Aprendendo Lógica de Programação</a></li>
                      <li><a href="projects.html">Lógica de Programação - Aula 01 - Introdução</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>













 

        <!-- top navigation -->
        <div class="top_nav">
            <div class="nav_menu">
                <div class="nav toggle">
                  <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                </div>
                <nav class="nav navbar-nav">
                <ul class=" navbar-right">
                  <li class="nav-item dropdown open" style="padding-left: 15px;">
                    <a href="javascript:;" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                      <img src="<?php echo $dados['user_photo']; ?>" alt=""><?php echo $dados['user_name']; ?> <span class="span-plataforma-user-id" style="opacity: 0;"><?php echo $user_id; ?></span>
                    </a><!--<i class="fa-solid fa-ellipsis-vertical config-geral user-course-manager" data-toggle="modal" data-target="#modalGerenciarAtribuidos"></i>-->
                    <div class="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item"  href="logout.php"><i class="fa fa-sign-out pull-right"></i> Log Out</a>
                    </div>
                  </li>
  
                  <li role="presentation" class="nav-item dropdown open">
                    <a href="javascript:;" class="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                      <i class="fa fa-envelope-o"></i>
                      <span class="badge bg-green">6</span>
                    </a>
                    <ul class="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                      <li class="nav-item">
                        <a class="dropdown-item">
                          <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="dropdown-item">
                          <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="dropdown-item">
                          <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="dropdown-item">
                          <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <div class="text-center">
                          <a class="dropdown-item">
                            <strong>See All Alerts</strong>
                            <i class="fa fa-angle-right"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        <!-- /top navigation -->

        <!-- page content -->
        <div class="right_col" role="main">
          <div class="classX">
            <div class="page-title">
              <div class="title_left">
                <h3>Gestão de Trilhas de Estudo</h3>
              </div>
              <div class="title_right">
                <div class="col-md-5 col-sm-5 form-group pull-right top_search">
                  <!--<div class="input-group">
                    <input type="text" class="form-control" placeholder="Buscar por...">
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button">Buscar</button>
                    </span>
                  </div>-->
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="row">
              <div class="col-md-12 col-sm-12  ">
                <div class="x_panel">
                  <div class="x_title">
                    <h2><i class="fa fa-arrow-down"></i>&nbsp;Suas trilhas</h2>
                    <ul class="nav navbar-right panel_toolbox">
                        <button class="btn btn-secondary button-4 btn-insere-user" data-toggle="modal" data-target="#form_cadastro_de_user" style="display: none;"><i class="fa-solid fa-plus"></i>
                        &nbsp;&nbsp;&nbsp;<i class="fa-solid fa-user-plus"></i></button>
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Settings 1</a>
                            <a class="dropdown-item" href="#">Settings 2</a>
                          </div>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                      <!--Add content to the page ...-->
                      <div class="row">
                        <div class="col-md-12 d-flex justify-content-around align-items-center titulo mt-2">
                          <div class="icon-user-titulo d-flex justify-content-center align-items-center">  
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 mt-2">
                            <div class="container">
                                <div class="row"></div>
                                <div class="col-md-6">
                                  <table class="table table-striped jambo_table lista-user" style="display: none;">
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>#</th>
                                        <th><i class="fa-solid fa-list-ol"></i>&nbsp;&nbsp;Usuário</th>
                                        <th><i class="fa-solid fa-pen"></i>&nbsp;&nbsp;editar</th>
                                        <th><i class="fa-solid fa-plus-minus"></i>&nbsp;&nbsp;atribuir trilha</th>
                                        <th><i class="fa-solid fa-eye"></i>&nbsp;&nbsp;exibe dados</th>
                                        <th><i class="fa-solid fa-minus"></i>&nbsp;&nbsp;excluir</th>
                                      </tr>
                                    </thead>
                                    <tbody></tbody>
                                  </table>    
                                <table class="table table-striped table-responsive-sm table-responsive-md lista-trilhas-do-user">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>nome</th>
                                      <th>tipo</th>
                                      <th>categoria</th>
                                      <th>status</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </table> 
                                </div> 
                                <div class="col-md-6">
                                  <table class="table table-striped lista-trilhas-do-user-plataforma">
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>#</th>
                                        <th><i class="fa-solid fa-list-ol"></i>&nbsp;&nbsp;Usuário</th>
                                        <th><i class="fa-solid fa-pen"></i>&nbsp;&nbsp;editar</th>
                                        <th><i class="fa-solid fa-plus-minus"></i>&nbsp;&nbsp;atribuir trilha</th>
                                        <th><i class="fa-solid fa-eye"></i>&nbsp;&nbsp;exibe dados</th>
                                        <th><i class="fa-solid fa-minus"></i>&nbsp;&nbsp;excluir</th>
                                      </tr>
                                    </thead>
                                    <tbody></tbody>
                                  </table>
                                </div>                     
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /page content -->

        <!-- footer content -->
        <footer>
          <div class="pull-right">
            Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>






    <!-- Modal/Painel gerendiamento de recursos para o usuário (trilhas, vídeos)-->
    <div class="modal fade bd-example-modal-xl" id="modalGerenciarAtribuidos" tabindex="-1" role="dialog" aria-labelledby="modalGerenciarAtribuidosLabel" aria-hidden="true" style="overflow-y: auto; overflow-x: hidden;">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
              <a href="javascript:;" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
              <img src="images/users/foto_marcelo.jpg" alt="">Marcelo Neri
            </a>
                <h5 class="modal-title" id="modalGerenciarAtribuidosLabel">OPERAÇÕES COM TRILHAS E VÍDEOS</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row g-3 mt-1">
                          <div class="col-md-4">
                            <div class="x_panel"> <!-- // painel filtrar trilhas  -->
                              <div class="x_title">
                                <h2><i class="fa fa-list"></i> Trilha de estudos <small>Filtrar</small></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class=""><i class="fa-solid fa-circle-question"></i></a></li>
                                  <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                  </li>
                                  <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Settings 1</a>
                                        <a class="dropdown-item" href="#">Settings 2</a>
                                      </div>
                                  </li>
                                  <li><a class="close-link desabilita-evento-mouse"><i class="fa fa-close"></i></a>
                                  </li>
                                </ul>
                                <div class="clearfix"></div>
                              </div>
                              <div class="x_content">
                                    <form class="filtra-trilha">
                                      <label for="trilha_escolhida" class="form-label control-label"><i class="fa fa-arrow-down"></i> Listagem das trilhas cadastradas</label>
                                      <select class="form-select form-control" id="trilha_escolhida" required="" name="trilha_escolhida">                            
                                      </select>                       
                                      <div class="ln_solid"></div>
                                      <button type="submit" class="btn btn-secondary btn-salvar btn-carrega-trilha">Carregar trilha</button>
                                    </form>
                              </div>
                            </div>
                          </div>  
                        <div class="col-md-4">
                          <div class="x_panel cadastrar x_panel-cadastrar-trilha" style="position: relative;"><!-- // painel cadastrar trilhas  -->
                            <div class="x_title">
                              <h2><i class="fa-solid fa-folder-plus"></i> Trilha de estudos <small>Cadastrar</small></h2>
                              <ul class="nav navbar-right panel_toolbox">
                                <li><a class=""><i class="fa-solid fa-circle-question"></i></a></li>
                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                </li>
                                <li class="dropdown">
                                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <a class="dropdown-item" href="#">Settings 1</a>
                                      <a class="dropdown-item" href="#">Settings 2</a>
                                    </div>
                                </li>
                                <li><a class="close-link desabilita-evento-mouse"><i class="fa fa-close"></i></a>
                                </li>
                              </ul>
                              <div class="clearfix"></div>
                            </div>
                            <div class="x_content">
                              <form class="form-cadastro-de-trilha form-horizontal form-label-left">
                                <div class="form-group row"> <!-- -->
                                  <label class="control-label col-md-3 col-sm-3 label-categoria">Categoria <span class="btn-secondary button-4 btn-cadastro-de-categoria-janela-cadastro-de-trilhas" data-toggle="modal" data-target="#form_cadastro_de_categoria">Add</span></label>
                                  <div class="col-md-9 col-sm-9 ">
                                    <select class="form-control" id="id_categoria" required="" name="id_categoria">
                                      <option value=""> ...</option>
                                      <option value="1">Css</option>
                                      <option value="2">Html</option>
                                      <option value="3">Javascript</option>
                                      <option value="4">Sem categoria</option>
                                      <option value="5">Lógica</option>
                                      <option value="6">Banco de dados</option>
                                    </select>
                                  </div>
                                </div>                        
                                <div class="form-group row"><!-- -->
                                  <label class="control-label col-md-3 col-sm-3 label-tipo">Tipo <span class="btn-secondary button-4 btn-cadastro-de-tipo-janela-cadastro-de-trilhas" data-toggle="modal" data-target="#form_cadastro_de_tipo">Add</span></label>
                                  <div class="col-md-9 col-sm-9 ">
                                    <select class="form-control" id="trilha_type" required="" name="trilha_type">
                                      <option value=""> ...</option>
                                      <option value="1">geral</option>
                                      <option value="2">provisória</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group row "><!-- -->
                                  <label class="control-label col-md-3 col-sm-3 ">Nome</label>
                                  <div class="col-md-9 col-sm-9 ">
                                  <input type="text" class="form-control" id="trilha_name" required="" name="trilha_name" placeholder="" placeholder="">
                                  </div>
                                </div>                            
                                <div class="form-group row"><!-- -->
                                  <label class="control-label col-md-3 col-sm-3 ">Descrição <span class="required">*</span>
                                  </label>
                                  <div class="col-md-9 col-sm-9 ">
                                  <textarea class="form-control" rows="3" id="trilha_descricao" required="" name="trilha_descricao" placeholder=""></textarea>
                                  </div>
                                </div>
                                <div class="form-group row "><!-- -->
                                  <label class="control-label col-md-3 col-sm-3 ">Nome amigável</label>
                                  <div class="col-md-9 col-sm-9 ">
                                  <input type="text" class="form-control" id="trilha_nomeamigavel" required="" name="trilha_nomeamigavel" placeholder="">
                                  </div>
                                </div>                          
                                <div class="ln_solid"></div><!-- -->
                                <div class="form-group">    <!-- -->
                                  <!--<div class="col-md-9 col-sm-9  offset-md-3">-->
                                  <div class="col-md-2 col-sm-2">
                                    <button type="button" class="btn btn-secondary button-4 btn-cancelar-do-salvar-trilha">Cancelar</button>
                                  </div>
                                  <div class="col-md-3 col-sm-3">
                                    <button type="submit" class="btn btn-secondary btn-salvar btn-salvar-trilha submit-cadastro-de-trilha">Salvar trilha</button>
                                  </div>
                                  <div class="col-md-7 col-sm-7">
                                    <div class="trilha-save-message text-success"></div>
                                  </div>
                                </div>                  
                              </form>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="x_panel cadastrar"><!-- // painel cadastrar video  -->
                            <div class="x_title">
                              <h2><i class="fa-solid fa-file-video"></i> Vídeo <small>Cadastrar</small></h2>
                              <ul class="nav navbar-right panel_toolbox">
                                <li><a class=""><i class="fa-solid fa-circle-question"></i></a></li>
                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                </li>
                                <li class="dropdown">
                                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <a class="dropdown-item" href="#">Settings 1</a>
                                      <a class="dropdown-item" href="#">Settings 2</a>
                                    </div>
                                </li>
                                <li><a class="close-link  desabilita-evento-mouse"><i class="fa fa-close"></i></a>
                                </li>
                              </ul>
                              <div class="clearfix"></div>
                            </div>
                            
                            <!--<div class="popup">
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed natus velit omnis maiores numquam accusamus voluptatem sint? Vel aspernatur vero quis rem quidem repudiandae officiis architecto veritatis amet deserunt!</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed natus velit omnis maiores numquam accusamus voluptatem sint? Vel aspernatur vero quis rem quidem repudiandae officiis architecto veritatis amet deserunt!</p>
                            </div>-->                                                  
                            <div class="x_content">                              
                              <form id="cadastro_video" class="form-cadastro-de-trilha form-horizontal form-label-left">
                                <div class="form-group row">
                                  <label class="control-label col-md-3 col-sm-3 label-categoria">Categoria <span class="btn-secondary button-4 btn-cadastro-de-categoria-janela-cadastro-de-video" data-toggle="modal" data-target="#form_cadastro_de_categoria">Add</span></label>
                                  <div class="col-md-9 col-sm-9 ">
                                    <select class="form-control" id="categoria" required="" name="categoria">
                                      <option value=""> ...</option>
                                      <option value="1">Css</option>
                                      <option value="2">Html</option>
                                      <option value="3">Javascript</option>
                                      <option value="4">Sem categoria</option>
                                      <option value="6">Lógica</option>
                                    </select>
                                  </div>
                                </div> 
                                <div class="form-group row ">
                                  <label class="control-label col-md-3 col-sm-3 ">Video</label>
                                  <div class="col-md-9 col-sm-9 ">
                                    <input type="text" class="form-control" id="nomevideo" required="" name="nomevideo" placeholder="">
                                  </div>
                                </div>  
                                <div class="form-group row ">
                                  <label class="control-label col-md-3 col-sm-3 ">Código</label>
                                  <div class="col-md-5 col-sm-5 ">
                                    <input type="text" class="form-control" id="codigoyt" required="" name="codigoyt" placeholder="">
                                  </div>
                                  <div class="col-md-4 col-sm-4 ferramentas-codigo-video">
                                    <i class="fa-solid fa-eraser rubber"></i> 
                                    <i class="fa-solid fa-copy copy"></i>
                                    <i class="fa-solid fa-screwdriver-wrench normalize"></i>
                                    <a href="" target="_blank"><i class="fa-brands fa-youtube-square youtube-link-tester"></i></a>
                                  </div>
                                </div>                         
                                <div class="ln_solid"></div>
                                <div class="form-group">
                                  <div class="col-md-2 col-sm-2">
                                    <button type="button" class="btn btn-secondary button-4 btn-cancelar-do-salvar-video">Cancelar</button>
                                  </div>
                                  <div class="col-md-3 col-sm-3">
                                    <button type="submit" class="btn btn-secondary btn-salvar btn-salvar-video submit">Salvar vídeo</button>
                                  </div>
                                  <div class="col-md-7 col-sm-7">
                                    <div class="trilha-save-message text-success"></div>                                    
                                  </div>
                                </div>                  
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12 col-sm-12  ">
                          <div class="x_panel"><!-- // painel lista geral de vídeos  -->
                                <div class="x_title">
                                <h2><i class="fa-solid fa-arrow-right-to-bracket"></i> Trilha<small>Vincular   <i class="fa fa-video-camera"></i></small></h2>
                                <ul class="nav navbar-right panel_toolbox">
                                  <li><a class=""><i class="fa-solid fa-circle-question"></i></a></li>
                                <li><a class="collapse-link desabilita-evento-mouse"><i class="fa fa-chevron-up"></i></a>
                                </li>
                                <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Settings 1</a>
                                <a class="dropdown-item" href="#">Settings 2</a>
                                </div>
                                </li>
                                <li><a class="close-link desabilita-evento-mouse"><i class="fa fa-close" style="pointer-events: none !important;"></i></a>
                                </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                            <div class="x_content">      
                                <div class="col-md-6">
                                    <table class="table jambo_table table-responsive-sm table-responsive-md lista-videos-geral">
                                      <thead>
                                        <tr>
                                          <th>#</th>
                                          <th>Vídeo</th>
                                          <th>Código</th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody></tbody>
                                    </table>                  
                                </div>
                                <div class="col-md-6">
                                    <table class="table jambo_table table-responsive-sm table-responsive-md lista-videos-da-trilha">
                                      <thead>
                                        <tr>
                                          <th>#</th>
                                          <th>Vídeo<span class="total-videos-trilha">Vídeo</span><span class="th-titulo-da-trilha"></span></th>
                                          <th>Código</th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody></tbody>
                                    </table>
                                </div>
                            </div>
                          </div>        
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4 video-panel"><!-- // painel player de vídeo  -->
                          <div class="x_panel video-run">
                            <div class="x_title">
                              <h2><i class="fa-brands fa-youtube"></i> <span>Vídeo</span> <small>player</small></h2>
                              <ul class="nav navbar-right panel_toolbox">
                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                                <li class="dropdown">
                                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <a class="dropdown-item" href="#">Settings 1</a>
                                      <a class="dropdown-item" href="#">Settings 2</a>
                                    </div>
                                </li>
                                <li><a class="close-link desabilita-evento-mouse"><i class="fa fa-close"></i></a>
                                </li>
                              </ul>
                              <div class="clearfix"></div>
                            </div>
                            <div class="x_content"> 
                              <div class="embed-responsive embed-responsive-16by9">
                                  <iframe class="embed-responsive-item" width="640" height="360" src="" autoplay="1" allowfullscreen=""></iframe>
                              </div>                                               
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <!--<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
                    <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                </div>
                </div><!-- container-fluid  -->
            </div>
          </div> 
        </div>
    </div>




       <!-- Modal/Painel gerendiamento de trilhas do usuário (trilhas, vídeos)-->
       <div class="modal fade bd-example-modal-xl" id="modalGerenciarTrilhasUsers" tabindex="-1" role="dialog" aria-labelledby="modalGerenciarTrilhasUsersLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
              <a href="javascript:;" class="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
              <img src="images/users/foto_marcelo.jpg" alt=""><span>Marcelo Neri</span>
            </a>
                <h5 class="modal-title" style="display: none;" id="modalGerenciarAtribuidosLabel"><span class="modal-user-photo user-profile"></span><span class="modal-user-name"></span></h5>
                <!--<h5 class="modal-title" id="exampleModalLabel"></h5>-->
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>
            <div class="modal-body">
                <div class="container container-user-modal-trilha">
                  <h3 class="userName d-flex justify-content-center"></h3>
                  <div class="row">
                    <div class="col-md-12 col-sm-12  ">
                      <div class="x_panel"><!-- // painel lista geral de vídeos  -->
                            <div class="x_title">
                            <h2><i class="fa-solid fa-arrow-right-to-bracket"></i> Trilhas vinculadas a este usuário<small>Listar   <i class="fa fa-video-camera"></i></small></h2>
                            <ul class="nav navbar-right panel_toolbox">
                              <li><a class=""><i class="fa-solid fa-circle-question"></i></a></li>
                            <li><a class="collapse-link desabilita-evento-mouse"><i class="fa fa-chevron-up"></i></a>
                            </li>
                            <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Settings 1</a>
                            <a class="dropdown-item" href="#">Settings 2</a>
                            </div>
                            </li>
                            <li><a class="close-link desabilita-evento-mouse"><i class="fa fa-close" style="pointer-events: none !important;"></i></a>
                            </li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">      
                            <div class="col-md-12">    
                                <table class="table jambo_table table-responsive-sm table-responsive-md lista-trilhas-do-user">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>nome da trilha</th>
                                      <th>tipo</th>
                                      <th>categoria</th>
                                      <th>status</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </table>                  
                            </div>
                        </div>
                      </div>        
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-sm-12  ">
                      <div class="x_panel mt-3"><!-- // painel lista geral trilhas disponíveis  -->
                            <div class="x_title">
                            <h2><i class="fa-solid fa-arrow-right-to-bracket"></i> Trilhas disponíveis<small>Listar   <i class="fa fa-video-camera"></i></small></h2>
                            <ul class="nav navbar-right panel_toolbox">
                              <li><a class=""><i class="fa-solid fa-circle-question"></i></a></li>
                            <li><a class="collapse-link desabilita-evento-mouse"><i class="fa fa-chevron-up"></i></a>
                            </li>
                            <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Settings 1</a>
                            <a class="dropdown-item" href="#">Settings 2</a>
                            </div>
                            </li>
                            <li><a class="close-link desabilita-evento-mouse"><i class="fa fa-close" style="pointer-events: none !important;"></i></a>
                            </li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">      
                            <div class="col-md-12">
                                <table class="table jambo_table table-responsive-sm table-responsive-md lista-trilhas-disponiveis-user-manager">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>nome da trilha</th>
                                      <th>tipo</th>
                                      <th>categoria</th>
                                      <th>status</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </table>                  
                            </div>
                        </div>
                      </div>        
                    </div>
                  </div> 
                </div><!-- container-user-modal-trilha  -->
            </div>
          </div> 
        </div>
    </div>










    

    <!-- jQuery -->
    <script src="../vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
   <script src="../vendors/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <!-- FastClick -->
    <script src="../vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="../vendors/nprogress/nprogress.js"></script>   
    <!-- mask input -->
    <script src="../vendors/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js"></script>
    
    <!-- Custom Theme Scripts -->
    <script src="../build/js/custom.min.js"></script>
    <script src="script_plataforma.js"></script>
    <script src="script_cadastro_de_trilha.js"></script>
    <script src="script_cadastro_de_videos.js"></script>
    <script src="script_precessa_tela_trilha_usuario.js"></script>
  </body>
</html>
