
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

    const _listaTrilhasDoUser = document.querySelector('table.lista-trilhas-do-user tbody');

    const _listaTrilhasDisponiveisTelaUserManager = document.querySelector('.lista-trilhas-disponiveis-user-manager tbody');


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

    let _arrPovoSelect = [];

    let _idDaTrilhaEscolhida = '';

    let _trilhasDoUser = '';

    
    let _arrayIDsTrilhasDoUser = [];





    povoaSelectDoFiltrarTrilhas();

    povoaSelectDaCategoriaDoCadastrarTrilhas();

    povoaSelectDaCategoriaDoCadastrarVideo();

    console.log('_idDaTrilhaEscolhida: '+_idDaTrilhaEscolhida);









    //listaTabelaDaEsquerda();
    //listaTabelaDaDireita(1);






















    /////////// USUÁRIOS DA PLATAFORMA - LISTAGEM GERAL //////////////////////////////////////////
    $.ajax({
        type: "POST",
        url: "php/lista_users.php",
        dataType: "json",
        encode: true,
    }).done(function (data) {        
        const _tbody =  document.querySelector('table.lista-user tbody');
        for (userItem of data){
            const _tr = document.createElement('tr');
            const _td1 = document.createElement('td');
            const _td2 = document.createElement('td');
            const _td3 = document.createElement('td');
            const _td4 = document.createElement('td');
            const _nodeText1 = document.createTextNode(userItem.user_id);
            const _nodeText2 = document.createTextNode(userItem.user_name);
            _td1.innerHTML = `<img src="${userItem.user_photo}" class="user-avatar" />`;
            _td2.appendChild(_nodeText1);
            _td3.appendChild(_nodeText2);
            _td4.innerHTML = `<i class="fa-solid fa-user-gear user-manager" data-toggle="modal" data-target="#modalGerenciarTrilhasUsers" data-user_id="${userItem.user_id}" data-user_name="${userItem.user_name}"></i>`;
            _tr.appendChild(_td1);
            _tr.appendChild(_td2);
            _tr.appendChild(_td3);
            _tr.appendChild(_td4);
            _tbody.appendChild(_tr);
        }

        const _userCourseManager = document.querySelectorAll('.user-course-manager');
        const _userManager = document.querySelectorAll('.user-manager');
        const _modalUserPhoto = document.querySelector('.modal-user-photo');
        const _modalUserName = document.querySelector('.modal-user-name');

        _userCourseManager.forEach(function(item){
            item.addEventListener('click', function(e){
                //_modalUserPhoto.innerHTML = `<img class="user-avatar" src="${e.target.dataset.userphoto}" />`;
                _modalUserPhoto.innerHTML = '<img class="user-avatar" src="images/users/foto_marcelo.jpg" />';
                //_modalUserName.innerHTML = e.target.dataset.username;
                _modalUserName.innerHTML = 'Marcelo Neri';
                setTimeout(function(){
                    _videoPanel.style.opacity = 1;
                }, 900);
            });
        })

        _userManager.forEach(function(item){
            item.addEventListener('click', function(e){
                //_modalUserName.innerHTML = e.target.dataset.username;
                _modalGerenciamentoTrilhasUsers.querySelector('.userName').innerHTML = e.target.dataset.user_name;
                listaTrilhasDoUser(e.target.dataset.user_id);
                listaTrilhasDisponiveisUserManager();

            });
        })

    }); 
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
                    _THtituloDaTrilha = _arrPovoSelect[_selectIdTrilhaEscolhida.value];
                    //console.log('entrou dentro do listener do form FiltraTrilha', _selectIdTrilhaEscolhida.textContent);
                    //console.log(event.target)
                    _listaVideosDaTrilha.innerHTML = '';                    
                    removeDisabledBtnAtribui(_btnVincula);
                    listaVideosDaTrilha();
                    _spanTotalVideosTrilha.style.opacity = 1;
                    _thTituloDaTrilha.style.opacity = 1;
                    console.log('_idDaTrilhaEscolhida: '+_idDaTrilhaEscolhida);
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
                            _arrPovoSelect[trilha.trilha_id] = trilha.trilha_name;
                        }
                        //console.log(_arrPovoSelect);
                    });
                }






//_selectIdCategoriaCadastroDeTrilha
//_selectCategoriaCatastroDeVideo/



function povoaSelectDaCategoriaDoCadastrarTrilhas(){ // chamado quando a aplicação inicia
                    console.log(_selectIdCategoriaCadastroDeTrilha.innerHTML);
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
                            _arrPovoSelect[categoria.id_categoria] = categoria.abrev_categoria;
                        }
                        _arrPovoSelect = [];
                        //console.log(_arrPovoSelect);
                    });
                }





                
function povoaSelectDaCategoriaDoCadastrarVideo(){ // chamado quando a aplicação inicia
                    console.log(_selectCategoriaCatastroDeVideo.innerHTML);
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
                            _arrPovoSelect[categoria.id_categoria] = categoria.abrev_categoria;
                        }
                        _arrPovoSelect = [];
                        //console.log(_arrPovoSelect);
                    });
                }                








function removeClassActive(nodeListLinks){
                    nodeListLinks.forEach(function(link){
                        link.parentNode.parentNode.classList.remove('active');
                        link.querySelector('i').style.color = '#212529';
                    })   

                }




/*function atualizaListaDeVideosGeral(nodeList){   
                    console.log(_arrIdConteudoVideosDaTrilha);
                    console.log(nodeList);
                    if(_arrIdConteudoVideosDaTrilha.length === 0){
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
                            _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><i class="fa-brands fa-youtube youtube-icon"></i>${texto_t2}</a>`;
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
                                                                console.log(e.target.dataset.youtube_code);
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
                                    console.log(formData_);
                                    item.parentNode.parentNode.style.opacity = 0;
                                    setTimeout(function(){
                                        item.parentNode.parentNode.remove();
                                        vinculaVideo(formData_);
                                    }, 1000);
                                })
                            });

                    } else if(_arrIdConteudoVideosDaTrilha.length > 0){
                        console.log('entrou aqui');
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
                            _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><i class="fa-brands fa-youtube youtube-icon"></i> ${texto_t2}</a>`;
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
                                                                console.log(e.target.dataset.youtube_code);
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
                                    console.log(formData_);
                                    item.parentNode.parentNode.style.opacity = 0;
                                    setTimeout(function(){
                                        item.parentNode.parentNode.remove();
                                        vinculaVideo(formData_);
                                    }, 1000);
                                })
                            });                                                               
                    }
                }*/







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
                        _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><i class="fa-brands fa-youtube youtube-icon"></i> ${texto_t2}</a>`;
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
                          console.log(formData_);
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
                        _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${trilha.conteudo_codigoyoutube}" class="link-youtube"><i class="fa-brands fa-youtube youtube-icon"></i> <span>${texto_t2}</span></a>`;
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
                        console.log('TRILHA ESCOLHIDA:'+ _idDaTrilhaEscolhida)
                }            





    

function vinculaVideo(formData){
                    $.ajax({
                        type: "POST",
                        url: "php/vincula_video_a_trilha.php",
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
                console.log(_arrIdConteudoVideosDaTrilha);
                console.log(nodeList);
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
                        _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><i class="fa-brands fa-youtube youtube-icon"></i>${texto_t2}</a>`;
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
                                                            console.log(e.target.dataset.youtube_code);
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
                                console.log(formData_);
                                item.parentNode.parentNode.style.opacity = 0;
                                setTimeout(function(){
                                    item.parentNode.parentNode.remove();
                                    vinculaVideo(formData_);
                                }, 1000);
                            })
                        });

                } else if(_arrIdConteudoVideosDaTrilha.length > 0){
                    console.log('entrou aqui');
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
                        _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><i class="fa-brands fa-youtube youtube-icon"></i> ${texto_t2}</a>`;
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
                                                            console.log(e.target.dataset.youtube_code);
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
                                console.log(formData_);
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
                        _td3.appendChild(_nodeText3);
                        _td4.appendChild(_nodeText4);
                        _td5.appendChild(_nodeText5);
                        //_td2.classList.add("tdlink");
                        //let texto_t2 = _td2.textContent;
                        //_td2.textContent = texto_t2;
                        //_td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${trilha.conteudo_codigoyoutube}" class="link-youtube"><i class="fa-brands fa-youtube youtube-icon"></i> <span>${texto_t2}</span></a>`;
                        //_td3.appendChild(_nodeText3);
                        //_td6.innerHTML = `<form class="form-remove-video-trilha" data-trilha_user_id="${trilhaUser.trilha_id}"><input type="hidden" class="input-form-remove-video-trilha" name="input-form-remove-video-trilha-xxx" value="${trilhaUser.trilha_id}" /><button type="submit" class="btn btn-secondary btn-desvincula-trilha-user-manager"><i class="fa-solid fa-xmark"></i></button></form>`;
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
                }   





function listaTrilhasDoUser(user_id){  
                    var formData = {
                        user_id: user_id
                    };
                    $.ajax({
                        type: "POST",
                        url: "php/lista_trilhas_do_user.php",
                        data: formData,
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        console.log(data);
                        _listaTrilhasDoUser.innerHTML = '';
                        _trilhasDoUser = data;
                        let cont = 0;
                        _arrayIDsTrilhasDoUser = [];
                        for (item of _trilhasDoUser){
                            _arrayIDsTrilhasDoUser[cont] = item.trilha_id;
                            cont++;
                        }
                        console.log(_trilhasDoUser);
                        loopingDeMontagemAjaxListaTrilhasDoUser(data);
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





























































































function loopingDeMontagemAjaxListaTrilhasDisponiveisUserManage(nodeList){
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
                        _td3.appendChild(_nodeText3);
                        _td4.appendChild(_nodeText4);
                        _td5.appendChild(_nodeText5);
                        //_td2.classList.add("tdlink");
                        //let texto_t2 = _td2.textContent;
                        //_td2.textContent = texto_t2;
                        //_td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${trilha.conteudo_codigoyoutube}" class="link-youtube"><i class="fa-brands fa-youtube youtube-icon"></i> <span>${texto_t2}</span></a>`;
                        //_td3.appendChild(_nodeText3);
                        //_td6.innerHTML = `<form class="form-remove-video-da-trilha" data-trilhas_disponiveis_id="${trilhaUser.trilha_id}"><input type="hidden" class="input-form-remove-trilha-xxx" name="input-form-remove-trilha-xxx" value="${trilhaUser.trilha_id}" /><button type="submit" class="btn btn-secondary btn-desvincula-trilha-user-manager"><i class="fa-solid fa-plus"></i></button></form>`;
                        _tr.appendChild(_td1);
                        _tr.appendChild(_td2);
                        _tr.appendChild(_td3);
                        _tr.appendChild(_td4);
                        _tr.appendChild(_td5);
                        _tr.appendChild(_td6);
                        //_tr.appendChild(_td3);
                        //_tr.appendChild(_td4);
                        if(!_arrayIDsTrilhasDoUser.includes(trilhaUser.trilha_id)){
                            _listaTrilhasDisponiveisTelaUserManager.appendChild(_tr);
                        }
                        //_arrIdConteudoVideosDaTrilha.push(trilha.id_conteudo);
                        }
                        //_thTituloDestaTrilha.innerHTML = ` <span class="th-titulo-da-trilha"><span class="barra1"></span>${_THtituloDaTrilha}<span class="barra2"></span></span> `;
                        //_totalVideosDestaTrilha.innerHTML = `          Total: [ ${nodeList.length} ] vídeos`;
                        //console.log('TRILHA ESCOLHIDA:'+ _idDaTrilhaEscolhida)
                }   



                //_listaTrilhasDoUser
                //_listaTrilhasDisponiveisTelaUserManager

function listaTrilhasDisponiveisUserManager(){  
                    $.ajax({
                        type: "POST",
                        url: "php/lista_trilhas.php",
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        console.log(data);
                        console.log(typeof data);
                        console.log(data[0]);
                        _listaTrilhasDisponiveisTelaUserManager.innerHTML = '';
                        console.log(_arrayIDsTrilhasDoUser);
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