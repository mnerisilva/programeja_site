
    const _listaVideosGeral = document.querySelector(".lista-videos-geral tbody");
    const _listaVideosAtribuidos = document.querySelector(".lista-videos-atribuidos tbody");
    const _selectIdTrilhaEscolhida = document.querySelector('#trilha_escolhida');
    const _selectIdCategoriaCadastroDeTrilha = document.querySelector('.form-cadastro-de-trilha #id_categoria');
    const _selectCategoriaCatastroDeVideo = document.querySelector('#cadastro_video #categoria');
    const _btnCarregaTrilha = document.querySelector('.btn-carrega-trilha');
    const _formFiltraTrilha = document.querySelector('.filtra-trilha');
    const _listaVideosDaTrilha = document.querySelector('.lista-videos-da-trilha tbody');
    const _iframeYoutube = document.querySelector('iframe.embed-responsive-item');
    const _videoPanel = document.querySelector('.video-panel');
    const _totalVideosGeralDoMomento = document.querySelector('.lista-videos-geral thead th:nth-child(4)');
    const _thTituloDestaTrilha = document.querySelector('.lista-videos-da-trilha thead th:nth-child(2)');
    const _totalVideosDestaTrilha = document.querySelector('.lista-videos-da-trilha thead th:nth-child(4)');
    const _tituloVideoPanelEmExecucao = document.querySelector('.video-panel .x_panel span');
    const _divMessageTrilhaSalva = document.querySelector('.trilha-save-message');
    const _btnSubmitCadastroDeTrilha = document.querySelector('.submit-cadastro-de-trilha');
    const _form_cadastro_video = document.querySelector("#cadastro_video");
    const _spanTotalVideosTrilha = document.querySelector('.total-videos-trilha');
    const _thTituloDaTrilha = document.querySelector('.th-titulo-da-trilha');
    const _modalGerenciamentoTrilhasUsers = document.querySelector('#modalGerenciarTrilhasUsers .modal-body');

    const _idCategoriaTrilha = document.querySelector('#id_categoria');
    const _trilhaType = document.querySelector('#trilha_type');
    const _trilhaName = document.querySelector('#trilha_name');
    const _trilhaDescricao = document.querySelector('#trilha_descricao');
    const _trilhaNomeAmigavel = document.querySelector('#trilha_nomeamigavel');
    const _categoriaVideo = document.querySelector('#categoria')
    const _nomeVideo = document.querySelector('#nomevideo');
    const _codigoYt = document.querySelector('#codigoyt');

    const _clicaNoBotaoPaginaInicial = document.querySelector('.clica-no-botao-pagina-inicial');
    const _btnAddInsereCategoria = document.querySelector('.btn-add-insere-categoria');
    //const _btnCloseModalQueServeAosCadastros = document.querySelector('.closeModalQueServeAosCadastros');
    const _btnCadastroDeCategoriaJanelaCadastroDeTrilhas = document.querySelector('.btn-cadastro-de-categoria-janela-cadastro-de-trilhas');
    const _btnCadastroDeTipoJanelaCadastroDeTrilhas = document.querySelector('.btn-cadastro-de-tipo-janela-cadastro-de-trilhas');
    const _btnCadastroDeCategoriaJanelaCadastroDeVideo = document.querySelector('.btn-cadastro-de-categoria-janela-cadastro-de-video');
    const _btnCloseModalQueServeAoCadastroDeUser = document.querySelector('.close-modal-que-serve-ao-cadastro-de-user');
    //const _btnCloseModalQueServeAosCadastros = document.querySelector('.close-modal-que-serve-aos-cadastros');
    //const _btnCloseModalQueServeAosCadastrosTipo = document.querySelector('.close-modal-que-serve-aos-cadastros-tipo');
    const _btnCancelaModalQueServeAoCadastroDeUser = document.querySelector('.cancela-modal-que-serve-ao-cadastro-de-user');
    const _btnCancelaModalQueServeAosCadastros = document.querySelector('.cancela-modal-que-serve-aos-cadastros');
    const _btnCancelaModalQueServeAosCadastrosTipo = document.querySelector('.cancela-modal-que-serve-aos-cadastros-tipo');
    const _btnCancelarDoSalvarTrilha = document.querySelector('.btn-cancelar-do-salvar-trilha');
    const _btnCancelarDoSalvarVideo = document.querySelector('.btn-cancelar-do-salvar-video');
    const _btnInsereUser = document.querySelector('.btn-insere-user');
    const _btnSalvarUser = document.querySelector('.btn-salvar-user');
    const _btnSalvarUserEdit = document.querySelector('.btn-salvar-user-edit');
    const _btnCancelarSalvarUser = document.querySelector('.btn-cancelar-salvar-user');
    const _btnCancelarSalvarUserEdit = document.querySelector('.btn-cancelar-salvar-user-edit');
    const _btnUserCourseManager = document.querySelectorAll('.btn-insere-user');

    const _btnUserManagerEdit = document.querySelector('.user-manager-edit');



    const _btnUserMessageSaved = document.querySelector('.user-message-saved');



    
    

    const _mask = document.querySelector('.mask');


    const _formModalQueServeAosCadastros = document.querySelector('.form-modal-que-serve-aos-cadastros');
    const _formModalQueServeAosCadastrosTipo = document.querySelector('.form-modal-que-serve-aos-cadastros-tipo');
    const _formModalQueServeAoCadastroDeUser = document.querySelector('.form-modal-que-serve-ao-cadastro-de-user');
    const _formModalCadastroDeUser = document.querySelector('#form_cadastro_de_user');
    const _formModalCadastroDeUserEdit = document.querySelector('#form-modal-cadastro-de-user-edit');
    const _formModalCadastroDeCategoria = document.querySelector('#form_cadastro_de_categoria');
    const _formModalCadastroDeTipo = document.querySelector('#form_cadastro_de_tipo');
    const _formCadastroDeUserEdit = document.querySelector('#form-cadastro-de-user-edit');


    const _modalGerenciarAtribuidos = document.querySelector('.modal#modalGerenciarAtribuidos');



            //$(form_cadastro_de_user).modal('show'); // ABRE MODAL BOOTSTRAP ASSIM QUE A PÁGINA CARREGA

            // EXECUTA "alert('modal fechou')" ASSIM QUE A MODAL FOR FECHADA
            $(form_cadastro_de_user).on('hide.bs.modal', function (event) {
                _formModalQueServeAoCadastroDeUser.querySelector('#user_name').value = '';
                _formModalQueServeAoCadastroDeUser.querySelector('#user_email').value = '';
            });

            
            // EXECUTA "alert('modal abriu')" ASSIM QUE A MODAL FOR aberta
            $(_formModalCadastroDeUser).on('shown.bs.modal', function (event) {
                // alert('modal abriu);
            });




    const _listaTrilhasDoUser = document.querySelector('table.lista-trilhas-do-user tbody');

    const _listaTrilhasDisponiveisTelaUserManager = document.querySelector('.lista-trilhas-disponiveis-user-manager tbody');

    const _closeModalModalGerenciarAtribuidos = document.querySelector('#modalGerenciarAtribuidos .close span');

    let _btnFormTrilhaUser = '';

    let _userIdDoUsuario = '';
    
    let _arrayIDsTrilhasDoUser = [];

    const _userManager      = '';
    const _modalUserPhoto   = '';
    const _modalUserName    = '';  
    
    
    let _statusExclusao = '9999999999';

    pega();

    pegaDadosUsuarioEspecifico(2);







                // clique no botão "cancelar" do cadastro de trilha e do cadastro de videos
                _btnCancelarDoSalvarTrilha.addEventListener('click', function(){  
                    cancelar_LimpaCamposCadastroDeTrilhas();                 
                });
                _btnCancelarDoSalvarVideo.addEventListener('click', function(){   
                    cancelar_LimpaCamposCadastroDeVideos();                 
                })
                
                // abre modal que serve aos cadastros 
                _btnInsereUser.addEventListener('click', function(){
                    abreModalQueServeAoCadastroDeUser();                    
                });
                _btnCadastroDeCategoriaJanelaCadastroDeTrilhas.addEventListener('click', function(){
                    abreModalQueServeAosCadastros();                    
                });
                _btnCadastroDeTipoJanelaCadastroDeTrilhas.addEventListener('click', function(){
                    abreModalQueServeAosCadastrosTipo();                    
                });    
                _btnCadastroDeCategoriaJanelaCadastroDeVideo.addEventListener('click', function(){
                    abreModalQueServeAosCadastros();                    
                }); 
                // fecha modal que serve aos cadastros
                /*_btnCloseModalQueServeAoCadastroDeUser.addEventListener('click', function(){
                    fechaModalQueServeAoCadastroDeUser()
                });*/
                /*_btnCloseModalQueServeAosCadastros.addEventListener('click', function(){
                    fechaModalQueServeAosCadastros()
                });*/
                /*_btnCloseModalQueServeAosCadastrosTipo.addEventListener('click', function(){
                    fechaModalQueServeAosCadastrosTipo()
                });*/
                // fecha modal que serve aos cadastros _btnCancelaModalQueServeAoCadastroDeUser
                _btnCancelarSalvarUser.addEventListener('click', function(){
                    fechaModalQueServeAoCadastroDeUser()
                });
                _btnCancelaModalQueServeAosCadastros.addEventListener('click', function(){
                    fechaModalQueServeAosCadastros()
                });                                
                _btnCancelaModalQueServeAosCadastrosTipo.addEventListener('click', function(){
                    fechaModalQueServeAosCadastros()
                });
                _btnCancelaModalQueServeAosCadastrosTipo.addEventListener('click', function(){
                    fechaModalQueServeAosCadastrosTipo()
                });



                // esconde título e quantidade de vídeo da trilha - enquanto ainda não for escolhida uma trilha
                _spanTotalVideosTrilha.style.opacity = 0;
                _thTituloDaTrilha.style.opacity = 0; ////////////////////


                // recolhe panel-video (player) após 3 segundos do carregamento da aplicação
                const _collapse_link = document.querySelector('.video-run .collapse-link i');////////////////////
                setTimeout(() => {
                    $(_collapse_link).trigger( "click" );                  
                }, 3000);/////////////////////////


    let _THtituloDaTrilha = '';

    let _btnVincula;

    let _dataListaDeVideosGeral     = '';
    let _dataListaDeVideosDaTrilha  = '';

    let _arrIdConteudoVideosDaTrilha = [];

    let _arrPovoaSelectFiltaTrilha = [];
    let _arrPovoaSelect = [];

    let _idDaTrilhaEscolhida = '';
    

    _listaTrilhasDoUser.innerHTML = '';
    _listaTrilhasDisponiveisTelaUserManager.innerHTML = '';





    povoaSelectDoFiltrarTrilhas();

    povoaSelectDaCategoriaDoCadastrarTrilhas();

    povoaSelectDaCategoriaDoCadastrarVideo();




    $(_formModalCadastroDeUser).submit(function(event){
                    event.preventDefault();
                    console.log('clicou no button submit da modal de cadastro de usuário')
                    var formData_ = {
                                        user_name: _formModalCadastroDeUser.querySelector('#user_name').value,
                                        user_email: _formModalCadastroDeUser.querySelector('#user_email').value,
                                        user_whatsapp: (_formModalCadastroDeUser.querySelector('#user_whatsapp').value).match(/\d/g).join(""),
                                        user_logradouro: _formModalCadastroDeUser.querySelector('#user_logradouro').value,
                                        user_numero: _formModalCadastroDeUser.querySelector('#user_numero').value,
                                        user_complemento: _formModalCadastroDeUser.querySelector('#user_complemento').value,
                                        user_cep: (_formModalCadastroDeUser.querySelector('#user_cep').value).match(/\d/g).join(""),
                                        user_bairro: _formModalCadastroDeUser.querySelector('#user_bairro').value,
                                        user_cidade: _formModalCadastroDeUser.querySelector('#user_cidade').value,
                                        user_uf: _formModalCadastroDeUser.querySelector('#user_uf').value,
                                        user_cpf: (_formModalCadastroDeUser.querySelector('#user_cpf').value).match(/\d/g).join(""),
                                        user_idade: _formModalCadastroDeUser.querySelector('#user_idade').value,
                                        user_pix: _formModalCadastroDeUser.querySelector('#user_pix').value,
                                        user_photo: 'images/users/avatar.png'
                                    };
                    console.log('Campos que irão para o salva_user.php', formData_);
                    salvaUser(formData_);
                    
                });


    $(_formModalCadastroDeUserEdit).submit(function(event){
                    event.preventDefault();
                    console.log('clicou no button submit da modal de cadastro de usuário')
                    var formData_ = {
                                        user_id_edit: _userIdDoUsuario,
                                        user_name_edit: _formModalCadastroDeUserEdit.querySelector('#user_name_edit').value,
                                        user_email_edit: _formModalCadastroDeUserEdit.querySelector('#user_email_edit').value,
                                        user_whatsapp_edit: (_formModalCadastroDeUserEdit.querySelector('#user_whatsapp_edit').value).match(/\d/g).join(""),
                                        user_logradouro_edit: _formModalCadastroDeUserEdit.querySelector('#user_logradouro_edit').value,
                                        user_numero_edit: _formModalCadastroDeUserEdit.querySelector('#user_numero_edit').value,
                                        user_complemento_edit: _formModalCadastroDeUserEdit.querySelector('#user_complemento_edit').value,
                                        user_cep_edit: (_formModalCadastroDeUserEdit.querySelector('#user_cep_edit').value).match(/\d/g).join(""),
                                        user_bairro_edit: _formModalCadastroDeUserEdit.querySelector('#user_bairro_edit').value,
                                        user_cidade_edit: _formModalCadastroDeUserEdit.querySelector('#user_cidade_edit').value,
                                        user_uf_edit: _formModalCadastroDeUserEdit.querySelector('#user_uf_edit').value,
                                        user_cpf_edit: (_formModalCadastroDeUserEdit.querySelector('#user_cpf_edit').value).match(/\d/g).join(""),
                                        user_idade_edit: _formModalCadastroDeUserEdit.querySelector('#user_idade_edit').value,
                                        user_pix_edit: _formModalCadastroDeUserEdit.querySelector('#user_pix_edit').value,
                                        user_photo_edit: 'images/users/avatar.png'
                                    };
                    console.log('Campos que irão para o salva_user.php', formData_);
                    salvaUserEdit(formData_);
                    
                });                


    /*$(_formCadastroDeTrilha).submit(function(event){
                    event.preventDefault();
                    console.log('clicou no button submit da modal de cadastro de trilha')*/
                    /*console.log('_arrPovoaSelect: '+_arrPovoaSelectFiltaTrilha);
                    _THtituloDaTrilha = _arrPovoaSelectFiltaTrilha[_selectIdTrilhaEscolhida.value];
                    _listaVideosDaTrilha.innerHTML = '';                    
                    removeDisabledBtnAtribui(_btnVincula);
                    listaVideosDaTrilha();
                    _spanTotalVideosTrilha.style.opacity = 1;
                    _thTituloDaTrilha.style.opacity = 1;*/
                /*});*/               



    $(_formModalCadastroDeCategoria).submit(function(event){
                    event.preventDefault();
                    console.log('clicou no button submit da modal de cadastro de categoria')
                    /*console.log('_arrPovoaSelect: '+_arrPovoaSelectFiltaTrilha);
                    _THtituloDaTrilha = _arrPovoaSelectFiltaTrilha[_selectIdTrilhaEscolhida.value];
                    _listaVideosDaTrilha.innerHTML = '';                    
                    removeDisabledBtnAtribui(_btnVincula);
                    listaVideosDaTrilha();
                    _spanTotalVideosTrilha.style.opacity = 1;
                    _thTituloDaTrilha.style.opacity = 1;*/
                });

    $(_formModalCadastroDeTipo).submit(function(event){
                    event.preventDefault();
                    console.log('clicou no button submit da modal de cadastro de tipo')
                    /*console.log('_arrPovoaSelect: '+_arrPovoaSelectFiltaTrilha);
                    _THtituloDaTrilha = _arrPovoaSelectFiltaTrilha[_selectIdTrilhaEscolhida.value];
                    _listaVideosDaTrilha.innerHTML = '';                    
                    removeDisabledBtnAtribui(_btnVincula);
                    listaVideosDaTrilha();
                    _spanTotalVideosTrilha.style.opacity = 1;
                    _thTituloDaTrilha.style.opacity = 1;*/
                });                





    /////////// USUÁRIOS DA PLATAFORMA - LISTAGEM GERAL //////////////////////////////////////////
    listaGeralDeUsuarios();
    /////////// USUÁRIOS DA PLATAFORMA - LISTAGEM GERAL //////////////////////////////////////////   







    /////////// VÍDEOS DA PLATAFORMA - LISTAGEM GERAL //////////////////////////////////////////
    $.ajax({
        type: "POST",
        url: "php/lista.php",
        dataType: "json",
        encode: true,
    }).done(function (data) {
        _dataListaDeVideosGeral = data;
        loopingDeMontagemAjaxListaVideosGeral(data); // manda para o "for" montar tr td no tbody da tabela .lista-geral-de-vídeos
        _btnVincula = document.querySelectorAll(".btn-vincula");
        _btnVincula.forEach(function(btnAtribui){
            btnAtribui.addEventListener('click', listenerDoAtribui);
        })

        
        _btnVincula = document.querySelectorAll(".btn-vincula");    // desabilita todos os botões "Vincula",
        _btnVincula.forEach(function(btnAtribui){                   // quando ainda não há uma trilha carregada           
            btnAtribui.setAttribute('disabled', true);              //
        }); //                                                      //



    _selectIdTrilhaEscolhida.addEventListener('change', function(e){                
                //console.log(_THtituloDaTrilha);
                //console.log(e.target.value);
                if(e.target.value === '') {
                    adicionaDisabledBtnAtribui(_btnVincula);
                }
            });



    $(_formFiltraTrilha).submit(function(event){
                    event.preventDefault();
                    //console.log('entrou dentro do listener do form FiltraTrilha', _selectIdTrilhaEscolhida.value);
                    console.log('_arrPovoaSelect: '+_arrPovoaSelectFiltaTrilha);
                    _THtituloDaTrilha = _arrPovoaSelectFiltaTrilha[_selectIdTrilhaEscolhida.value];
                    //console.log('entrou dentro do listener do form FiltraTrilha', _selectIdTrilhaEscolhida.textContent);
                    //console.log(event.target)
                    _listaVideosDaTrilha.innerHTML = '';                    
                    removeDisabledBtnAtribui(_btnVincula);
                    listaVideosDaTrilha();
                    _spanTotalVideosTrilha.style.opacity = 1;
                    _thTituloDaTrilha.style.opacity = 1;
                    // console.log('_idDaTrilhaEscolhida: '+_idDaTrilhaEscolhida);
                });

                
    const _linkYoutube = document.querySelectorAll('.link-youtube');

    _linkYoutube.forEach(function(link){
                        link.addEventListener('click', function(e){
                                        e.preventDefault();
                                        //console.log(e.target);
                                        let src = `https://www.youtube.com/embed/${e.target.dataset.youtube_code}?autoplay=1`;
                                        //console.log(e.target);
                                        _iframeYoutube.setAttribute('src', src);
                                        _iframeYoutube.getAttribute('src');
                                        setTimeout(function(){
                                            _tituloVideoPanelEmExecucao.innerHTML = e.target.dataset.descricao.substring(0,30);
                                        }, 800);
                                        removeClassActive(_linkYoutube);
                                        e.target.parentNode.parentNode.classList.add('active');
                                        e.target.querySelector('i').style.color = 'red';
                                    })
                });

    });
    /////////// VÍDEOS DA PLATAFORMA - LISTAGEM GERAL //////////////////////////////////////////









    function listenerDoAtribui(e){ // listner dos botões ADICIONAR
                    let _trVideosGerais = e.target.parentNode.parentNode;
                    //e.target.classList.remove('btn-vincula');
                    //e.target.classList.add('btn-remove');
                    //e.target.textContent = 'Remover';
                    //e.target.removeEventListener('click', listenerDoAtribui, false);
                    //_listaVideosAtribuidos.appendChild(_trVideosGerais);
                }






function escutaMudancaEstadoSelect() {
                    removeDisabledBtnAtribui(_btnVincula);
                }





function removeDisabledBtnAtribui(elemento){
                    for (btn of elemento) {
                        //console.log(btn);
                        btn.removeAttribute('disabled');
                    }
                }





function adicionaDisabledBtnAtribui(elemento){
                    for (btn of elemento) {
                        btn.setAttribute('disabled', true);
                    }    
                }




function listaVideosDaTrilha(){
                    //console.log($("#trilha_escolhida").val());                    
                    _idDaTrilhaEscolhida = $("#trilha_escolhida").val();
                    var formData = {
                        trilha_escolhida: $("#trilha_escolhida").val()
                    };
                    $.ajax({
                        type: "POST",
                        url: "php/lista_videos_da_trilha.php",
                        data: formData,
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        //console.log(data);
                        _dataListaDeVideosDaTrilha = data;
                        loopingDeMontagemAjaxListaVideosDaTrilha(data);
                        _listaVideosGeral.innerHTML = '';
                        atualizaListaDeVideosGeral(_dataListaDeVideosGeral);
                        _arrIdConteudoVideosDaTrilha = [];
                          //console.log(_arrIdConteudoVideosDaTrilha);
                          setTimeout(function(){
                            _listaVideosDaTrilha.style.opacity = 1;
                          }, 300)

                          const _formRemoveVideoDaTrilha = document.querySelectorAll('.form-remove-video-da-trilha');
                          _formRemoveVideoDaTrilha.forEach(function(item){
                            $(item).submit(function(event){
                                event.preventDefault();
                                
                                var formData_ = {
                                    trilha_escolhida: _idDaTrilhaEscolhida,
                                    video_a_desvincular: item.querySelector('.input-form-remove-video-trilha').value
                                };
                                //console.log(formData_);
                                item.parentNode.parentNode.style.opacity = 0;
                                setTimeout(function(){
                                    item.parentNode.parentNode.remove();
                                    desvinculaVideo(formData_);
                                }, 1000);
                            })
                          });
                    }); // .done        

                }






function povoaSelectDoFiltrarTrilhas(){ // chamado quando a aplicação inicia
                    _selectIdTrilhaEscolhida.innerHTML = '';
                    $.ajax({
                        // inicio do código ajax listagem inicial - lista users
                        type: "POST",
                        url: "php/lista_trilhas.php",
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        //console.log(data);
                        
                        _listaVideosDaTrilha.innerHTML = '';
                        const _optionVazio = document.createElement('option');        
                        _optionVazio.value = "";
                        _optionVazio.textContent = " ...";
                        _selectIdTrilhaEscolhida.appendChild(_optionVazio);

                        for (trilha of data){
                            let _option = document.createElement('option');
                            _option.value = trilha.trilha_id;
                            //console.log(_option);
                            _option.textContent = trilha.trilha_name;
                            _selectIdTrilhaEscolhida.appendChild(_option);
                            _arrPovoaSelectFiltaTrilha[trilha.trilha_id] = trilha.trilha_name;
                        }
                        //console.log('_arrPovoaSelectFiltraTrilha: '+_arrPovoaSelectFiltaTrilha);
                    });
                }








function povoaSelectDaCategoriaDoCadastrarTrilhas(){ // chamado quando a aplicação inicia
                    // console.log(_selectIdCategoriaCadastroDeTrilha.innerHTML);
                    _selectIdCategoriaCadastroDeTrilha.innerHTML = '';
                    $.ajax({
                        // inicio do código ajax listagem inicial - lista users
                        type: "POST",
                        url: "php/lista_categoria.php",
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        //console.log(data);
                        
                        //_listaVideosDaTrilha.innerHTML = '';
                        const _optionVazio = document.createElement('option');        
                        _optionVazio.value = "";
                        _optionVazio.textContent = " ...";
                        _selectIdCategoriaCadastroDeTrilha.appendChild(_optionVazio);

                        for (categoria of data){
                            let _option = document.createElement('option');
                            _option.value = categoria.id_categoria;
                            //console.log(_option);
                            _option.textContent = categoria.abrev_categoria;
                            _selectIdCategoriaCadastroDeTrilha.appendChild(_option);
                            _arrPovoaSelect[categoria.id_categoria] = categoria.abrev_categoria;
                        }
                        _arrPovoaSelect = [];
                        //console.log(_arrPovoaSelect);
                    });
                }





                
function povoaSelectDaCategoriaDoCadastrarVideo(){ // chamado quando a aplicação inicia
                    // console.log(_selectCategoriaCatastroDeVideo.innerHTML);
                    _selectCategoriaCatastroDeVideo.innerHTML = '';
                    $.ajax({
                        // inicio do código ajax listagem inicial - lista users
                        type: "POST",
                        url: "php/lista_categoria.php",
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        //console.log(data);
                        
                        //_listaVideosDaTrilha.innerHTML = '';
                        const _optionVazio = document.createElement('option');        
                        _optionVazio.value = "";
                        _optionVazio.textContent = " ...";
                        _selectCategoriaCatastroDeVideo.appendChild(_optionVazio);

                        for (categoria of data){
                            let _option = document.createElement('option');
                            _option.value = categoria.id_categoria;
                            //console.log(_option);
                            _option.textContent = categoria.abrev_categoria;
                            _selectCategoriaCatastroDeVideo.appendChild(_option);
                            _arrPovoaSelect[categoria.id_categoria] = categoria.abrev_categoria;
                        }
                        _arrPovoaSelect = [];
                        //console.log(_arrPovoaSelect);
                    });
                }                








function removeClassActive(nodeListLinks){
                    nodeListLinks.forEach(function(link){
                        link.parentNode.parentNode.classList.remove('active');
                        link.querySelector('i').style.color = '#212529';
                    })   

                }










function loopingDeMontagemAjaxListaVideosGeral(nodeList){    
                    for (videoItem of nodeList) {
                        let _tr = document.createElement("tr");
                        let _td1 = document.createElement("td");
                        let _td2 = document.createElement("td");
                        let _td3 = document.createElement("td");
                        let _td4 = document.createElement("td");
                        let _td5 = document.createElement("td");
                        let _nodeText1 = document.createTextNode(videoItem.id);
                        let _nodeText2 = document.createTextNode(videoItem.descricao);
                        let _nodeText3 = document.createTextNode(videoItem.codigo);
                        _td1.appendChild(_nodeText1);
                        _td2.appendChild(_nodeText2);
                        _td2.classList.add("tdlink");
                        let texto_t2 = _td2.textContent;
                        _td2.textContent = texto_t2;
                        //_td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><i class="fa-brands fa-youtube youtube-icon"></i> ${texto_t2}</a>`;
                        _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><img src="https://img.youtube.com/vi/${videoItem.codigo}/hqdefault.jpg" class="img-responsive" style="max-width: 180px"> ${texto_t2}</a>`;
                        _td3.appendChild(_nodeText3);
                        _td4.innerHTML = `<form class="form-vincula-video-a-trilha"><input type="hidden" class="input-form-vincula-video-a-trilha" name="input-form-vincula-video-a-trilha" value="${videoItem.id}"><button type="submit" class="btn btn-secondary btn-vincula" data-id="${videoItem.id}" data-id_conteudo_indice="${videoItem.id_conteudo_indice}" data-descricao="${videoItem.descricao}" data-codigo="${videoItem.codigo}"><i class="fa fa-plus" aria-hidden="true"></i> Vincular</button></form>`;
                        _tr.appendChild(_td1);
                        _tr.appendChild(_td2);
                        _tr.appendChild(_td3);
                        _tr.appendChild(_td4);
                        _listaVideosGeral.appendChild(_tr);
                    } // fim do for
                    _totalVideosGeralDoMomento.textContent = `Total: [ ${nodeList.length} ]`;
                    
                    const _formVinculaVideoATrilha = document.querySelectorAll('.form-vincula-video-a-trilha');
                    _formVinculaVideoATrilha.forEach(function(item){
                      $(item).submit(function(event){
                          event.preventDefault();
                          
                          var formData_ = {
                            trilha_escolhida: _idDaTrilhaEscolhida,
                              video_a_vincular: item.querySelector('.input-form-vincula-video-a-trilha').value
                          };
                          // console.log(formData_);
                          if(formData_.trilha_escolhida != ''){
                            item.parentNode.parentNode.style.opacity = 0;
                            setTimeout(function(){
                                item.parentNode.parentNode.remove();
                                vinculaVideo(formData_);
                            }, 1000);                            
                          }
                      })
                    });                    
                }



            


            


function loopingDeMontagemAjaxListaVideosDaTrilha(nodeList){
                    for (trilha of nodeList) {
                        let _tr = document.createElement("tr");
                        let _td1 = document.createElement("td");
                        let _td2 = document.createElement("td");
                        let _td3 = document.createElement("td");
                        let _td4 = document.createElement("td");
                        let _nodeText1 = document.createTextNode(trilha.id_conteudo);
                        let _nodeText2 = document.createTextNode(trilha.conteudo_descricao);
                        let _nodeText3 = document.createTextNode(trilha.conteudo_codigoyoutube);
                        let _nodeText4 = document.createTextNode('');
                        _td1.appendChild(_nodeText1);
                        _td2.appendChild(_nodeText2);
                        _td2.classList.add("tdlink");
                        let texto_t2 = _td2.textContent;
                        _td2.textContent = texto_t2;
                        _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${trilha.conteudo_codigoyoutube}" class="link-youtube"><img src="https://img.youtube.com/vi/${trilha.conteudo_codigoyoutube}/hqdefault.jpg" class="img-responsive" style="max-width: 180px"> <span>${texto_t2}</span></a>`;
                        _td3.appendChild(_nodeText3);
                        _td4.innerHTML = `<form class="form-remove-video-da-trilha" data-trilha_videos_id="${trilha.trilha_videos_id}"><input type="hidden" class="input-form-remove-video-trilha" name="input-form-remove-video-trilha" value="${trilha.trilha_videos_id}" /><button type="submit" class="btn btn-secondary btn-desvincula"><i class="fa-solid fa-xmark"></i> Desvincular</button></form>`;
                        _tr.appendChild(_td1);
                        _tr.appendChild(_td2);
                        _tr.appendChild(_td3);
                        _tr.appendChild(_td4);
                        _listaVideosDaTrilha.appendChild(_tr);
                        _arrIdConteudoVideosDaTrilha.push(trilha.id_conteudo);
                        }
                        _thTituloDestaTrilha.innerHTML = ` <span class="th-titulo-da-trilha"><span class="barra1"></span>${_THtituloDaTrilha}<span class="barra2"></span></span> `;
                        _totalVideosDestaTrilha.innerHTML = `          Total: [ ${nodeList.length} ] vídeos`;
                        //console.log('TRILHA ESCOLHIDA:'+ _idDaTrilhaEscolhida)
                }            






function salvaUser(formData){
                    $.ajax({
                        type: "POST",
                        url: "php/salva_user.php",
                        data: formData,
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        console.log('Retorno do ajax php/salva_user.php: '+data);
                        _btnSalvarUser.setAttribute('disabled','');
                        _btnSalvarUser.style.pointerEvents = 'none';
                        _btnCancelarSalvarUser.setAttribute('disabled','');
                        _btnCancelarSalvarUser.style.pointerEvents = 'none';
                        setTimeout(function(){
                            _btnUserMessageSaved.classList.add('success');
                        }, 1000);
                        setTimeout(function(){
                        }, 2500);
                        setTimeout(() => {
                            _btnSalvarUser.removeAttribute('disabled');
                            _btnSalvarUser.style.pointerEvents = 'all';
                            _btnCancelarSalvarUser.removeAttribute('disabled');
                            _btnCancelarSalvarUser.style.pointerEvents = 'all';
                            $(_btnCancelarSalvarUser).trigger('click');
                            listaGeralDeUsuarios();
                            _formModalCadastroDeUser.querySelector('#user_name').value;
                            _formModalCadastroDeUser.querySelector('#user_email').value;
                            _btnUserMessageSaved.classList.remove('success');
                        }, 5000);
                    });  
                }


function salvaUserEdit(formData){
                    console.log(formData);
                    $.ajax({
                        type: "POST",
                        url: "php/salva_user_editado.php",
                        data: formData,
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        console.log('Retorno do ajax php/salva_user.php: '+data);
                        _btnSalvarUserEdit.setAttribute('disabled','');
                        _btnSalvarUserEdit.style.pointerEvents = 'none';
                        _btnCancelarSalvarUserEdit.setAttribute('disabled','');
                        _btnCancelarSalvarUserEdit.style.pointerEvents = 'none';
                        setTimeout(function(){
                            _btnUserMessageSaved.classList.add('success');
                        }, 1000);
                        setTimeout(function(){
                        }, 2500);
                        setTimeout(() => {
                            _btnSalvarUserEdit.removeAttribute('disabled');
                            _btnSalvarUserEdit.style.pointerEvents = 'all';
                            _btnCancelarSalvarUserEdit.removeAttribute('disabled');
                            _btnCancelarSalvarUserEdit.style.pointerEvents = 'all';
                            $(_btnCancelarSalvarUserEdit).trigger('click');
                            listaGeralDeUsuarios();
                            _formModalCadastroDeUserEdit.querySelector('#user_name').value;
                            _formModalCadastroDeUserEdit.querySelector('#user_email').value;
                            _btnUserMessageSaved.classList.remove('success');
                        }, 5000);
                    });  
                }                



function excluiUser(user_id){
        var formData = {
            user_id: user_id
        };    
        $.ajax({
            type: "POST",
            url: "php/exclui_user.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            //// console.log(data);
            listaGeralDeUsuarios();
        });

}
                




    

function vinculaVideo(formData){
                    $.ajax({
                        type: "POST",
                        url: "php/vincula_video_a_trilha.php",
                        data: formData,
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        //// console.log(data);
                        _listaVideosGeral.innerHTML = '';
                        _listaVideosDaTrilha.innerHTML = '';
                        listaVideosDaTrilha();
                    });    
                    //console.log('entrou na function vinculaVideo');
                    //console.log(formData);
                }






function desvinculaVideo(formData){
                    $.ajax({
                        type: "POST",
                        url: "php/desvincula_video_da_trilha.php",
                        data: formData,
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        //console.log(data);
                        _listaVideosGeral.innerHTML = '';
                        _listaVideosDaTrilha.innerHTML = '';
                        listaVideosDaTrilha();
                    });    
                    //console.log('entrou na function vinculaVideo');
                    //console.log(formData);
                }








function vinculaTrilhaAoUser(formData){
                    $.ajax({
                        type: "POST",
                        url: "php/vincula_trilha_ao_user.php",
                        data: formData,
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        console.log(data);
                        _listaTrilhasDoUser.innerHTML = '';
                        _listaTrilhasDisponiveisTelaUserManager.innerHTML = '';
                        listaTrilhasDoUser(_userIdDoUsuario); 
                    });    
                }






function desvinculaTrilhaDoUser(formData){
                    $.ajax({
                        type: "POST",
                        url: "php/desvincula_trilha_do_user.php",
                        data: formData,
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        console.log(data);
                        _listaTrilhasDoUser.innerHTML = '';
                        _listaTrilhasDisponiveisTelaUserManager.innerHTML = '';
                        listaTrilhasDoUser(_userIdDoUsuario);
                    });
                }










/*function listaTabelaDaEsquerda () {
                $.ajax({
                    type: "POST",
                    url: "php/lista.php",
                    dataType: "json",
                    encode: true,
                }).done(function (data) {
                    console.log(data, typeof data);
                });
            }
function listaTabelaDaDireita ( _idDaTrilhaEscolhida ) {
                var formData = {
                    trilha_escolhida: _idDaTrilhaEscolhida
                };
                $.ajax({
                    type: "POST",
                    url: "php/lista_videos_da_trilha.php",
                    data: formData,
                    dataType: "json",
                    encode: true,
                }).done(function (data) {
                    console.log(data, typeof data);
                });
            }*/                











function atualizaListaDeVideosGeral(nodeList){   
                // console.log(_arrIdConteudoVideosDaTrilha);
                // console.log(nodeList);
                if(_arrIdConteudoVideosDaTrilha.length === 0){
                //if(_idDaTrilhaEscolhida === ''){
                    for (videoItem of nodeList) {
                        let _tr = document.createElement("tr");
                        let _td1 = document.createElement("td");
                        let _td2 = document.createElement("td");
                        let _td3 = document.createElement("td");
                        let _td4 = document.createElement("td");
                        let _td5 = document.createElement("td");
                        let _nodeText1 = document.createTextNode(videoItem.id);
                        let _nodeText2 = document.createTextNode(videoItem.descricao);
                        let _nodeText3 = document.createTextNode(videoItem.codigo);
                        _td1.appendChild(_nodeText1);
                        _td2.appendChild(_nodeText2);
                        _td2.classList.add("tdlink");
                        let texto_t2 = _td2.textContent;
                        _td2.textContent = texto_t2;
                        //_td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><i class="fa-brands fa-youtube youtube-icon"></i>${texto_t2}</a>`;
                        _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><img src="https://img.youtube.com/vi/${videoItem.codigo}/hqdefault.jpg" class="img-responsive" style="max-width: 180px">${texto_t2}</a>`;
                        _td3.appendChild(_nodeText3);
                        _td4.innerHTML = `<form class="form-vincula-video-a-trilha"><input type="hidden" class="input-form-vincula-video-a-trilha" name="input-form-vincula-video-a-trilha" value="${videoItem.id}"><button type="submit" class="btn btn-secondary btn-vincula" data-id="${videoItem.id}" data-id_conteudo_indice="${videoItem.id_conteudo_indice}" data-descricao="${videoItem.descricao}" data-codigo="${videoItem.codigo}"><i class="fa fa-plus" aria-hidden="true"></i> Vincular</button></form>`;
                        _tr.appendChild(_td1);
                        _tr.appendChild(_td2);
                        _tr.appendChild(_td3);
                        _tr.appendChild(_td4);
                        _listaVideosGeral.appendChild(_tr);
                    } 
                        _totalVideosGeralDoMomento.textContent = `Total - [ ${nodeList.length} ]`;                        
                                    
                        const _linkYoutube = document.querySelectorAll('.link-youtube');

                        _linkYoutube.forEach(function(link){
                                            link.addEventListener('click', function(e){
                                                            e.preventDefault();
                                                            // console.log(e.target.dataset.youtube_code);
                                                            let src = `https://www.youtube.com/embed/${e.target.dataset.youtube_code}?autoplay=1`;
                                                            _iframeYoutube.setAttribute('src', src);
                                                            _iframeYoutube.getAttribute('src');
                                                            removeClassActive(_linkYoutube);
                                                            e.target.parentNode.parentNode.classList.add('active');
                                                            e.target.querySelector('i').style.color = 'red';
                                                        })
                                    });

                    
                        const _formVinculaVideoATrilha = document.querySelectorAll('.form-vincula-video-a-trilha');
                        _formVinculaVideoATrilha.forEach(function(item){
                            $(item).submit(function(event){
                                event.preventDefault();
                                
                                var formData_ = {
                                    trilha_escolhida: _idDaTrilhaEscolhida,
                                    video_a_vincular: item.querySelector('.input-form-vincula-video-a-trilha').value
                                };
                                // console.log(formData_);
                                item.parentNode.parentNode.style.opacity = 0;
                                setTimeout(function(){
                                    item.parentNode.parentNode.remove();
                                    vinculaVideo(formData_);
                                }, 1000);
                            })
                        });

                } else if(_arrIdConteudoVideosDaTrilha.length > 0){
                    // console.log('entrou aqui');
                    for (videoItem of nodeList) {
                        let _tr = document.createElement("tr");
                        let _td1 = document.createElement("td");
                        let _td2 = document.createElement("td");
                        let _td3 = document.createElement("td");
                        let _td4 = document.createElement("td");
                        let _td5 = document.createElement("td");
                        let _nodeText1 = document.createTextNode(videoItem.id);
                        let _nodeText2 = document.createTextNode(videoItem.descricao);
                        let _nodeText3 = document.createTextNode(videoItem.codigo);
                        _td1.appendChild(_nodeText1);
                        _td2.appendChild(_nodeText2);
                        _td2.classList.add("tdlink");
                        let texto_t2 = _td2.textContent;
                        _td2.textContent = texto_t2;
                        //_td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><i class="fa-brands fa-youtube youtube-icon"></i> ${texto_t2}</a>`;
                        _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><img src="https://img.youtube.com/vi/${videoItem.codigo}/hqdefault.jpg" class="img-responsive" style="max-width: 180px"> ${texto_t2}</a>`;
                        _td3.appendChild(_nodeText3);
                        _td4.innerHTML = `<form class="form-vincula-video-a-trilha"><input type="hidden" class="input-form-vincula-video-a-trilha" name="input-form-vincula-video-a-trilha" value="${videoItem.id}"><button type="submit" class="btn btn-secondary btn-vincula" data-id="${videoItem.id}" data-id_conteudo_indice="${videoItem.id_conteudo_indice}" data-descricao="${videoItem.descricao}" data-codigo="${videoItem.codigo}"><i class="fa fa-plus" aria-hidden="true"></i> Vincular</button></form>`;
                        _tr.appendChild(_td1);
                        _tr.appendChild(_td2);
                        _tr.appendChild(_td3);
                        _tr.appendChild(_td4);
                        if(!_arrIdConteudoVideosDaTrilha.includes(videoItem.id)){_listaVideosGeral.appendChild(_tr);}
                    }
                        _totalVideosGeralDoMomento.textContent = `Total: [ ${_listaVideosGeral.childElementCount} ]`;                            
                                    
                        const _linkYoutube = document.querySelectorAll('.link-youtube');

                        _linkYoutube.forEach(function(link){
                                            link.addEventListener('click', function(e){
                                                            e.preventDefault();
                                                            // console.log(e.target.dataset.youtube_code);
                                                            let src = `https://www.youtube.com/embed/${e.target.dataset.youtube_code}?autoplay=1`;
                                                            _iframeYoutube.setAttribute('src', src);
                                                            _iframeYoutube.getAttribute('src');
                                                            removeClassActive(_linkYoutube);
                                                            e.target.parentNode.parentNode.classList.add('active');
                                                            e.target.querySelector('i').style.color = 'red';
                                                        })
                                    });

                        const _formVinculaVideoATrilha = document.querySelectorAll('.form-vincula-video-a-trilha');
                        _formVinculaVideoATrilha.forEach(function(item){
                            $(item).submit(function(event){
                                event.preventDefault();
                                
                                var formData_ = {
                                    trilha_escolhida: _idDaTrilhaEscolhida,
                                    video_a_vincular: item.querySelector('.input-form-vincula-video-a-trilha').value
                                };
                                // console.log(formData_);
                                item.parentNode.parentNode.style.opacity = 0;
                                setTimeout(function(){
                                    item.parentNode.parentNode.remove();
                                    vinculaVideo(formData_);
                                }, 1000);
                            })
                        });                                                               
                }
            }    
            
            





































































function loopingDeMontagemAjaxListaTrilhasDoUser(nodeList){
                    _listaTrilhasDoUser.innerHTML = '';
                    for (trilhaUser of nodeList) {
                        let _tr = document.createElement("tr");
                        let _td1 = document.createElement("td");
                        let _td2 = document.createElement("td");
                        let _td3 = document.createElement("td");
                        let _td4 = document.createElement("td");
                        let _td5 = document.createElement("td");
                        let _td6 = document.createElement("td");
                        let _nodeText1 = document.createTextNode(trilhaUser.trilha_id);
                        let _nodeText2 = document.createTextNode(trilhaUser.trilha_name);
                        let _nodeText3 = document.createTextNode(trilhaUser.trilha_type_name);
                        let _nodeText4 = document.createTextNode(trilhaUser.abrev_categoria);
                        let _nodeText5 = document.createTextNode(trilhaUser.trilha_status_name);
                        //let _nodeText3 = document.createTextNode(trilhaUser.conteudo_codigoyoutube);
                        //let _nodeText4 = document.createTextNode('');
                        _td1.appendChild(_nodeText1);
                        _td2.appendChild(_nodeText2);
                        _td2.innerHTML = `<i class="fa-solid fa-list-ul"></i>&nbsp;&nbsp;&nbsp;${trilhaUser.trilha_name}`;
                        _td3.appendChild(_nodeText3);
                        _td4.appendChild(_nodeText4);
                        _td5.appendChild(_nodeText5);
                        _td5.innerHTML = trilhaUser.trilha_status_name === 'on' ? `<i class="fa-solid fa-circle icon-on"></i>` : `<i class="fas fa-dot-circle icon-off"></i>`;
                        //_td2.classList.add("tdlink");
                        //let texto_t2 = _td2.textContent;
                        //_td2.textContent = texto_t2;
                        //_td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${trilha.conteudo_codigoyoutube}" class="link-youtube"><i class="fa-brands fa-youtube youtube-icon"></i> <span>${texto_t2}</span></a>`;
                        //_td3.appendChild(_nodeText3);
                        _td6.innerHTML = 
                                            `
                                                <form class="form-desvincula-trilha-do-user" data-trilha_user_id="${trilhaUser.trilha_id}">
                                                    <input type="hidden" class="input-x input-form-desvincula-trilha-do-user-userid" name="userid" value="${_userIdDoUsuario}" />
                                                    <input type="hidden" class="input-x input-form-desvincula-trilha-do-user-trilhaid" name="trilhaid" value="${trilhaUser.trilha_id}" />
                                                    <button type="submit" class="btn btn-secondary btn-desvincula-trilha-do-user btn-form-trilha-user"><i class="fa-solid fa-xmark"></i></button>
                                                </form>
                                            `;
                        //_td6.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
                        _tr.appendChild(_td1);
                        _tr.appendChild(_td2);
                        _tr.appendChild(_td3);
                        _tr.appendChild(_td4);
                        _tr.appendChild(_td5);
                        _tr.appendChild(_td6);
                        //_tr.appendChild(_td3);
                        //_tr.appendChild(_td4);
                        _listaTrilhasDoUser.appendChild(_tr);
                        //_arrIdConteudoVideosDaTrilha.push(trilha.id_conteudo);
                    }
                        //_thTituloDestaTrilha.innerHTML = ` <span class="th-titulo-da-trilha"><span class="barra1"></span>${_THtituloDaTrilha}<span class="barra2"></span></span> `;
                        //_totalVideosDestaTrilha.innerHTML = `          Total: [ ${nodeList.length} ] vídeos`;
                        //console.log('TRILHA ESCOLHIDA:'+ _idDaTrilhaEscolhida)
                        const _formDesvinculaTrilhaDoUser = document.querySelectorAll('.form-desvincula-trilha-do-user');
                        _formDesvinculaTrilhaDoUser.forEach(function(item){
                            $(item).submit(function(event){
                                event.preventDefault();
                                console.log('clicou no botão');  
                                var formData_ = {
                                    userid: item.querySelector('.input-form-desvincula-trilha-do-user-userid').value,
                                    trilhaid: item.querySelector('.input-form-desvincula-trilha-do-user-trilhaid').value
                                };
                                // console.log(formData_);                                
                                  item.parentNode.parentNode.style.opacity = 0;
                                  DESABILITAbtnFormTrilhaUser(_btnFormTrilhaUser)
                                  setTimeout(function(){
                                      item.parentNode.parentNode.remove();
                                      desvinculaTrilhaDoUser(formData_);
                                      _btnFormTrilhaUser = document.querySelectorAll('.btn-form-trilha-user');                                              
                                      DESABILITAbtnFormTrilhaUser(_btnFormTrilhaUser);
                                  }, 1000);                            
                                
                            })
                        });
                }   





function listaTrilhasDoUser(user_id){  
                    var formData = {
                        user_id: user_id
                    };
                    //console.log(formData.user_id);
                    $.ajax({
                        type: "POST",
                        url: "php/lista_trilhas_do_user.php",
                        data: formData,
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        //console.log(data);
                        _trilhasDoUser = data;
                        _arrayIDsTrilhasDoUser = []; 
                        let cont = 0;
                        for (item of _trilhasDoUser){
                            _arrayIDsTrilhasDoUser[cont] = item.trilha_id;
                            cont++;
                        }
                        loopingDeMontagemAjaxListaTrilhasDoUser(_trilhasDoUser);                        
                        _arrayIDsTrilhasDoUser = []; 
                        cont = 0;
                        for (item of _trilhasDoUser){
                            _arrayIDsTrilhasDoUser[cont] = item.trilha_id;
                            cont++;
                        }
                        listaTrilhasDisponiveisUserManager();
                    }); // .done        

                }
            



























































































function loopingDeMontagemAjaxListaTrilhasDisponiveisUserManage(nodeList){
                    _listaTrilhasDisponiveisTelaUserManager.innerHTML = '';
                    for (trilhaUser of nodeList) {
                        let _tr = document.createElement("tr");
                        let _td1 = document.createElement("td");
                        let _td2 = document.createElement("td");
                        let _td3 = document.createElement("td");
                        let _td4 = document.createElement("td");
                        let _td5 = document.createElement("td");
                        let _td6 = document.createElement("td");
                        let _nodeText1 = document.createTextNode(trilhaUser.trilha_id);
                        let _nodeText2 = document.createTextNode(trilhaUser.trilha_name);
                        let _nodeText3 = document.createTextNode(trilhaUser.trilha_type_name);
                        let _nodeText4 = document.createTextNode(trilhaUser.abrev_categoria);
                        let _nodeText5 = document.createTextNode(trilhaUser.trilha_status_name);
                        //let _nodeText3 = document.createTextNode(trilhaUser.conteudo_codigoyoutube);
                        //let _nodeText4 = document.createTextNode('');
                        _td1.appendChild(_nodeText1);
                        _td2.appendChild(_nodeText2);
                        _td2.innerHTML = `<i class="fa-solid fa-list-ul"></i>&nbsp;&nbsp;&nbsp;${trilhaUser.trilha_name}`;
                        _td3.appendChild(_nodeText3);
                        _td4.appendChild(_nodeText4);
                        _td5.appendChild(_nodeText5);
                        _td5.innerHTML = trilhaUser.trilha_status_name === 'on' ? `<i class="fa-solid fa-circle icon-on"></i>` : `<i class="fas fa-dot-circle icon-off"></i>`;
                        //_td2.classList.add("tdlink");
                        //let texto_t2 = _td2.textContent;
                        //_td2.textContent = texto_t2;
                        //_td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${trilha.conteudo_codigoyoutube}" class="link-youtube"><i class="fa-brands fa-youtube youtube-icon"></i> <span>${texto_t2}</span></a>`;
                        //_td3.appendChild(_nodeText3);
                        _td6.innerHTML = `
                                            <form class="form-vincula-trilha-ao-user" data-trilhas_disponiveis_id="${trilhaUser.trilha_id}">
                                                <input type="hidden" class="input-y input-form-vincula-trilha-ao-user-userid" name="input_form_vincula_trilha_ao_user_userid" value="${_userIdDoUsuario}" />
                                                <input type="hidden" class="input-y input-form-vincula-trilha-ao-user-trilhaid" name="input_form_vincula_trilha_ao_user_trilhaid" value="${trilhaUser.trilha_id}" />
                                                <button type="submit" class="btn btn-secondary btn-vincula-trilha-ao-user btn-form-trilha-user"><i class="fa-solid fa-plus"></i></button>
                                            </form>
                                        `;
                        //_td6.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
                        //_td6.innerHTML = `<i class="fa-solid fa-plus"></i>`;
                        _tr.appendChild(_td1);
                        _tr.appendChild(_td2);
                        _tr.appendChild(_td3);
                        _tr.appendChild(_td4);
                        _tr.appendChild(_td5);
                        _tr.appendChild(_td6);
                        //_tr.appendChild(_td3);
                        //_tr.appendChild(_td4);
                        //console.log(_arrayIDsTrilhasDoUser);
                        //console.log(trilhaUser.trilha_id);
                        //console.log(nodeList);
                        if(!(_arrayIDsTrilhasDoUser.includes(trilhaUser.trilha_id))){
                            _listaTrilhasDisponiveisTelaUserManager.appendChild(_tr);
                        }
                        //_arrIdConteudoVideosDaTrilha.push(trilha.id_conteudo);
                    }   
                        // console.log(nodeList);
                        // console.log(_arrayIDsTrilhasDoUser);
                        //_thTituloDestaTrilha.innerHTML = ` <span class="th-titulo-da-trilha"><span class="barra1"></span>${_THtituloDaTrilha}<span class="barra2"></span></span> `;
                        //_totalVideosDestaTrilha.innerHTML = `          Total: [ ${nodeList.length} ] vídeos`;
                        //console.log('TRILHA ESCOLHIDA:'+ _idDaTrilhaEscolhida)
                        _btnFormTrilhaUser = document.querySelectorAll('.btn-form-trilha-user');
                        const _formVinculaTrilhaAoUser = document.querySelectorAll('.form-vincula-trilha-ao-user');
                        _formVinculaTrilhaAoUser.forEach(function(item){
                            $(item).submit(function(event){
                                event.preventDefault();
                                console.log('clicou no botão'); 
                                var formData_ = {
                                  trilha_escolhida: _idDaTrilhaEscolhida,
                                    userid: item.querySelector('.input-form-vincula-trilha-ao-user-userid').value,
                                    trilhaid: item.querySelector('.input-form-vincula-trilha-ao-user-trilhaid').value
                                };
                                // console.log(formData_);                                
                                  item.parentNode.parentNode.style.opacity = 0;
                                  DESABILITAbtnFormTrilhaUser(_btnFormTrilhaUser)
                                  setTimeout(function(){
                                      item.parentNode.parentNode.remove();
                                      vinculaTrilhaAoUser(formData_);
                                      _btnFormTrilhaUser = document.querySelectorAll('.btn-form-trilha-user');                                              
                                      DESABILITAbtnFormTrilhaUser(_btnFormTrilhaUser);
                                  }, 1000);  
                            })
                        });
    
                }   



               

function listaTrilhasDisponiveisUserManager(){  
                    $.ajax({
                        type: "POST",
                        url: "php/lista_trilhas.php",
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        // console.log(data);
                        // console.log(typeof data);
                        // console.log(data[0]);
                        _listaTrilhasDisponiveisTelaUserManager.innerHTML = '';
                        // console.log(_arrayIDsTrilhasDoUser);
                        loopingDeMontagemAjaxListaTrilhasDisponiveisUserManage(data);
                        /*
                        _dataListaDeVideosDaTrilha = data;
                        loopingDeMontagemAjaxListaVideosDaTrilha(data);
                        _listaVideosGeral.innerHTML = '';
                        atualizaListaDeVideosGeral(_dataListaDeVideosGeral);
                        _arrIdConteudoVideosDaTrilha = [];
                          setTimeout(function(){
                            _listaVideosDaTrilha.style.opacity = 1;
                          }, 300)
                          const _formRemoveVideoDaTrilha = document.querySelectorAll('.form-remove-video-da-trilha');
                          _formRemoveVideoDaTrilha.forEach(function(item){
                            $(item).submit(function(event){
                                event.preventDefault();                                
                                var formData_ = {
                                    trilha_escolhida: _idDaTrilhaEscolhida,
                                    video_a_desvincular: item.querySelector('.input-form-remove-video-trilha').value
                                };
                                //console.log(formData_);
                                item.parentNode.parentNode.style.opacity = 0;
                                setTimeout(function(){
                                    item.parentNode.parentNode.remove();
                                    desvinculaVideo(formData_);
                                }, 1000);
                            })
                          });
                          */
                    }); // .done        

                }








function DESABILITAbtnFormTrilhaUser(_btnFormTrilhaUser){
    _btnFormTrilhaUser.forEach(function(item){
        console.log('DESABILITOU OS BOTÕES DE VINCULA E DESVINCULA TRILHA')
        item.setAttribute('disabled','');
    });
}  



function abreModalQueServeAoCadastroDeUser() {

        setTimeout(() => {
            _formModalQueServeAoCadastroDeUser.classList.add('popup-open');            
        }, 300);
        setTimeout(() => {
            _mask.classList.add('mask-view-height');            
        }, 350);        
        setTimeout(() => {
            _mask.classList.add('mask-view-opacity');            
        }, 400);    
}



function abreModalQueServeAosCadastros() {
        setTimeout(() => {
            _formModalQueServeAosCadastros.classList.add('popup-open');            
        }, 300);
        setTimeout(() => {
            _mask.classList.add('mask-view-height');            
        }, 350);        
        setTimeout(() => {
            _mask.classList.add('mask-view-opacity');            
        }, 400);    
}

function fechaModalQueServeAoCadastroDeUser() {
        setTimeout(() => {
            _formModalQueServeAoCadastroDeUser.classList.remove('popup-open');            
        }, 300); 
        setTimeout(() => {
            _mask.classList.remove('mask-view-opacity');            
        }, 500); 
        setTimeout(() => {
            _mask.classList.remove('mask-view-height');            
        }, 550);
           
}


function fechaModalQueServeAosCadastros() {
    setTimeout(() => {
        _formModalQueServeAosCadastros.classList.remove('popup-open');            
    }, 300); 
    setTimeout(() => {
        _mask.classList.remove('mask-view-opacity');            
    }, 500); 
    setTimeout(() => {
        _mask.classList.remove('mask-view-height');            
    }, 550);
       
}

function fechaModalQueServeAosCadastrosTipo() {
    setTimeout(() => {
        _formModalQueServeAosCadastrosTipo.classList.remove('popup-open');            
    }, 300); 
    setTimeout(() => {
        _mask.classList.remove('mask-view-opacity');            
    }, 500); 
    setTimeout(() => {
        _mask.classList.remove('mask-view-height');            
    }, 550);
       
}

function abreModalQueServeAosCadastrosTipo() {
    setTimeout(() => {
        _formModalQueServeAosCadastrosTipo.classList.add('popup-open');            
    }, 300);
    setTimeout(() => {
        _mask.classList.add('mask-view-height');            
    }, 350);    
    setTimeout(() => {
        _mask.classList.add('mask-view-opacity');            
    }, 400);    
}

function fechaModalQueServeAosCadastrosTipo() {
    setTimeout(() => {
        _formModalQueServeAosCadastrosTipo.classList.remove('popup-open');            
    }, 300); 
    setTimeout(() => {
        _mask.classList.remove('mask-view-opacity');            
    }, 500); 
    setTimeout(() => {
        _mask.classList.remove('mask-view-height');            
    }, 550);
       
}

function cancelar_LimpaCamposCadastroDeTrilhas(){
    _idCategoriaTrilha.value = '';
    _trilhaType.value = '';
    _trilhaName.value = '';
    _trilhaDescricao.value = '';
    _trilhaNomeAmigavel.value = '';

}

function cancelar_LimpaCamposCadastroDeVideos(){
    _categoriaVideo.value = '';
    _nomeVideo.value = '';
    _codigoYt.value = '';
}






function verificaSeUserPodeSerExcluido(user_id) {
    console.log('verifica se o usuário ' + user_id +' pode ser excluído');
                _status = 9999999999; 

                /*while (_status === 9999999999) {
                    if(_statusExclusao != 9999999999){
                        _status = _statusExclusao;
                    }            
                    return _statusExclusao ;
                  }*/ 
            }











function listaGeralDeUsuarios(){
    $.ajax({
        type: "POST",
        url: "php/lista_users.php",
        dataType: "json",
        encode: true,
    }).done(function (data) {        
        const _tbody =  document.querySelector('table.lista-user tbody');
        _tbody.innerHTML = '';
        for (userItem of data){
            const _tr = document.createElement('tr');
            const _td1 = document.createElement('td');
            const _td2 = document.createElement('td');
            const _td3 = document.createElement('td');
            const _td4 = document.createElement('td');
            const _td5 = document.createElement('td');
            const _td6 = document.createElement('td');
            const _td7 = document.createElement('td');
            const _nodeText1 = document.createTextNode(userItem.user_id);
            const _nodeText2 = document.createTextNode(userItem.user_name);
            _td1.innerHTML = `<img src="${userItem.user_photo}" class="user-avatar" />`;
            _td2.appendChild(_nodeText1);
            _td3.appendChild(_nodeText2);
            _td4.innerHTML = `<i class="fa-solid fa-user-pen user-manager-edit" data-toggle="modal" title="editar usuário" data-target="#form-cadastro-de-user-edit" data-user_id="${userItem.user_id}" data-user_name="${userItem.user_name}" data-user_email="${userItem.user_email}"></i>`;
            _td5.innerHTML = `<i class="fa-solid fa-user-gear user-manager" title="atribuir trilhas" data-toggle="modal" data-target="#modalGerenciarTrilhasUsers" data-user_id="${userItem.user_id}" data-user_name="${userItem.user_name}" data-user_photo="${userItem.user_photo}"></i>`;
            _td6.innerHTML = `<i class="fa-solid fa-eye user-manager-view"></i>`;
            _td7.innerHTML = `<i class="fa-solid fa-user-minus user-manager-trash" data-toggle="modal" title="excluir usuário" data-target="#xxx" data-user_id="${userItem.user_id}" data-user_name="${userItem.user_name}"></i>`;
            _tr.appendChild(_td1);
            _tr.appendChild(_td2);
            _tr.appendChild(_td3);
            _tr.appendChild(_td4);
            _tr.appendChild(_td5);
            _tr.appendChild(_td6);
            _tr.appendChild(_td7);
            _tbody.appendChild(_tr);
        }

        const _userManager = document.querySelectorAll('.user-manager');
        const _userManagerEdit = document.querySelectorAll('.user-manager-edit');
        const _userManagerTrash = document.querySelectorAll('.user-manager-trash');
        const _modalUserPhoto = document.querySelector('.modal-user-photo');
        const _modalUserName = document.querySelector('.modal-user-name');
        const _modalGerenciarTrilhasUsersSpanUserName = document.querySelector('#modalGerenciarTrilhasUsers .modal-header a span');
        const _modalGerenciarTrilhasUsersSrcUserPhoto = document.querySelector('#modalGerenciarTrilhasUsers .modal-header a img');
        
        _userManager.forEach(function(item){
            item.addEventListener('click', function(e){
                console.log(item);
                _userIdDoUsuario = item.dataset.user_id;
                //_modalUserName.innerHTML = e.target.dataset.username;
                _modalGerenciamentoTrilhasUsers.querySelector('.userName').innerHTML = e.target.dataset.user_name;
                _modalGerenciarTrilhasUsersSpanUserName.innerHTML = e.target.dataset.user_name;
                _modalGerenciarTrilhasUsersSrcUserPhoto.setAttribute('src', e.target.dataset.user_photo);
                listaTrilhasDoUser(e.target.dataset.user_id);
                console.log(_arrayIDsTrilhasDoUser);
            });
        })



        _userManagerEdit.forEach(function(item){
            item.addEventListener('click', function(e){
                console.log(item);
                _userIdDoUsuario = item.dataset.user_id;
                console.log(`clicou no user-mabager-edit ${_userIdDoUsuario}`);
                _formCadastroDeUserEdit.querySelector('span').innerHTML = `&nbsp;&nbsp;&nbsp;#${_userIdDoUsuario}`;
                let formData = {
                    user_id: _userIdDoUsuario
                };    
                $.ajax({
                    type: "POST",
                    url: "php/pega_user.php",
                    data: formData,
                    dataType: "json",
                    encode: true,
                }).done(function (data) {
                    console.log(data);
                    _formModalCadastroDeUserEdit.querySelector('#user_name_edit').value = data[0].user_name;
                    _formModalCadastroDeUserEdit.querySelector('#user_email_edit').value = data[0].user_email;
                    _formModalCadastroDeUserEdit.querySelector('#user_whatsapp_edit').value = data[0].user_whatsapp;
                    _formModalCadastroDeUserEdit.querySelector('#user_logradouro_edit').value = data[0].user_logradouro;
                    _formModalCadastroDeUserEdit.querySelector('#user_numero_edit').value = data[0].user_numero;
                    _formModalCadastroDeUserEdit.querySelector('#user_complemento_edit').value = data[0].user_complemento;
                    _formModalCadastroDeUserEdit.querySelector('#user_cep_edit').value = data[0].user_cep;
                    _formModalCadastroDeUserEdit.querySelector('#user_bairro_edit').value = data[0].user_bairro;
                    _formModalCadastroDeUserEdit.querySelector('#user_cidade_edit').value = data[0].user_cidade;
                    _formModalCadastroDeUserEdit.querySelector('#user_uf_edit').value = data[0].user_uf;
                    _formModalCadastroDeUserEdit.querySelector('#user_cpf_edit').value = data[0].user_cpf;
                    _formModalCadastroDeUserEdit.querySelector('#user_idade_edit').value = data[0].user_idade;
                    _formModalCadastroDeUserEdit.querySelector('#user_pix_edit').value = data[0].user_pix;
                })
            });
        })        

        _userManagerTrash.forEach(function(item){
            item.addEventListener('click', function(e){
                //console.log(item);
                user_id = item.dataset.user_id;
                user_name = item.dataset.user_name;

                var formData = {
                    user_id: user_id
                };
                $.ajax({
                    type: "POST",
                    url: "php/verifica_se_o_user_pode_ser_excluido.php",
                    data: formData,
                    dataType: "json",
                    encode: true,
                }).done(function (data) {  
                    //console.log(data);
                    //console.log(typeof data);
                    if(data > 0){
                        alert('O USUÁRIO não pose ser excluído!!!!!');                        
                    } else {
                        let retorno = confirm(`VOU EXCLUIR O USUÁRIO:\n              ${user_name}.\nConfirme, por favor!`);
                        console.log(retorno);
                        if(retorno){
                            console.log('aqui você coloca o código que escluirá o registro.');
                            excluiUser(user_id);
                        }
                        
                        
                    }
                })                 
            });
        })   
        
        


    });     
}

function pegaDadosUsuarioEspecifico(user_id) {
                var formData = {
                    user_id: user_id
                };    
                $.ajax({
                    type: "POST",
                    url: "php/pega_user.php",
                    data: formData,
                    dataType: "json",
                    encode: true,
                }).done(function (data) { 
                    console.log('Dados do usuário cujo user_id é igual a 2:', data);
                })

            }

































            
function pega() { 
                $.ajax({
                    type: "POST",
                    url: "php/monta_json_menu_categia_trilhas_videos.php",
                    dataType: "json",
                    encode: true,
                }).done(function (data) { 
                    console.log('Dados tabelão menu lateral - left_menu: ', data);
                })

            }