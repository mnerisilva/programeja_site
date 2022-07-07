
    const _listaVideosGeral = document.querySelector(".lista-videos-geral tbody");
    const _listaVideosAtribuidos = document.querySelector(".lista-videos-atribuidos tbody");
    const _selectIdTrilhaEscolhida = document.querySelector('#trilha_escolhida');
    const _btnCarregaTrilha = document.querySelector('.btn-carrega-trilha');
    const _formFiltraTrilha = document.querySelector('.filtra-trilha');
    const _listaVideosDaTrilha = document.querySelector('.lista-videos-da-trilha tbody');
    const _iframeYoutube = document.querySelector('iframe.embed-responsive-item');
    const _videoPanel = document.querySelector('.video-panel');
    const _totalVideosGeralDoMomento = document.querySelector('.lista-videos-geral thead th:nth-child(4)');
    const _thTituloDestaTrilha = document.querySelector('.lista-videos-da-trilha thead th:nth-child(2)');
    const _totalVideosDestaTrilha = document.querySelector('.lista-videos-da-trilha thead th:nth-child(4)');
    const _tituloVideoPanelEmExecucao = document.querySelector('.video-panel .x_panel span');

    let _THtituloDaTrilha = '';

    let _btnVincula;

    let _dataListaDeVideosGeral     = '';
    let _dataListaDeVideosDaTrilha  = '';

    let _arrIdConteudoVideosDaTrilha = [];

    let _arrPovoSelect = [];

    let _idDaTrilhaEscolhida = '';

    povoaSelectDasTrilhas();







    /////////// USUÁRIOS DA PLATAFORMA - LISTAGEM GERAL //////////////////////////////////////////
    $.ajax({
        type: "POST",
        url: "lista_users.php",
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
            _td4.innerHTML = `<i class="fa-solid fa-gears user-course-manager" data-toggle="modal" data-target="#modalGerenciarAtribuidos" data-userid="${userItem.user_id}" data-username="${userItem.user_name}" data-userphoto="${userItem.user_photo}"></i>&nbsp;<i class="fa-solid fa-user-gear user-manager"></i>`;
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
                _modalUserPhoto.innerHTML = `<img class="user-avatar" src="${e.target.dataset.userphoto}" />`;
                _modalUserName.innerHTML = e.target.dataset.username;
                setTimeout(function(){
                    _videoPanel.style.opacity = 1;
                }, 900);
            });
        })

        _userManager.forEach(function(item){
            item.addEventListener('click', function(e){
                _modalUserName.innerHTML = e.target.dataset.username;
            });
        })

    }); 
    /////////// USUÁRIOS DA PLATAFORMA - LISTAGEM GERAL //////////////////////////////////////////   








    /////////// VÍDEOS DA PLATAFORMA - LISTAGEM GERAL //////////////////////////////////////////
    $.ajax({
        type: "POST",
        url: "lista.php",
        dataType: "json",
        encode: true,
    }).done(function (data) {
        _dataListaDeVideosGeral = data;
        loopingDeMontagemAjaxListaVideosGeral(data); // manda para o "for" montar tr td da tabela lista geral de vídeos
        _btnVincula = document.querySelectorAll(".btn-vincula");
        _btnVincula.forEach(function(btnAtribui){
            btnAtribui.addEventListener('click', listenerDoAtribui);
                })

    _selectIdTrilhaEscolhida.addEventListener('change', function(e){                
                console.log(_THtituloDaTrilha);
                if(e.target.value === '') {
                    adicionaDisabledBtnAtribui(_btnVincula);
                }
            });
    $(_formFiltraTrilha).submit(function(event){
                    event.preventDefault();
                    console.log('entrou dentro do listener do form FiltraTrilha', _selectIdTrilhaEscolhida.value);
                    _THtituloDaTrilha = _arrPovoSelect[_selectIdTrilhaEscolhida.value];
                    console.log('entrou dentro do listener do form FiltraTrilha', _selectIdTrilhaEscolhida.textContent);
                    console.log(event.target)
                    _listaVideosDaTrilha.innerHTML = '';                    
                    removeDisabledBtnAtribui(_btnVincula);
                    listaVideosDaTrilha();
                });
                
    const _linkYoutube = document.querySelectorAll('.link-youtube');
    console.log(_linkYoutube);

    _linkYoutube.forEach(function(link){
                        link.addEventListener('click', function(e){
                                        e.preventDefault();
                                        console.log(e.target);
                                        let src = `https://www.youtube.com/embed/${e.target.dataset.youtube_code}?autoplay=1`;
                                        console.log(e.target);
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
                    console.log('entrou na function listenerDoAtribui()');
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
                    console.log($("#trilha_escolhida").val());                    
                    _idDaTrilhaEscolhida = $("#trilha_escolhida").val();
                    var formData = {
                        trilha_escolhida: $("#trilha_escolhida").val()
                    };
                    $.ajax({
                        type: "POST",
                        url: "lista_videos_da_trilha.php",
                        data: formData,
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        console.log(data);
                        _dataListaDeVideosDaTrilha = data;
                        loopingDeMontagemAjaxListaVideosDaTrilha(data);
                        _listaVideosGeral.innerHTML = '';
                        atualizaListaDeVideosGeral(_dataListaDeVideosGeral);
                        _arrIdConteudoVideosDaTrilha = [];
                          console.log(_arrIdConteudoVideosDaTrilha);
                          setTimeout(function(){
                            _listaVideosDaTrilha.style.opacity = 1;
                          }, 300)

                          const _formRemoveVideoDaTrilha = document.querySelectorAll('.form-remove-video-da-trilha');
                          _formRemoveVideoDaTrilha.forEach(function(item){
                            $(item).submit(function(event){
                                event.preventDefault();
                                
                                var formData_ = {
                                    video_a_desvincular: item.querySelector('.input-form-remove-video-trilha').value
                                };
                                console.log(formData_);
                                item.parentNode.parentNode.style.opacity = 0;
                                setTimeout(function(){
                                    item.parentNode.parentNode.remove();
                                }, 1000);
                            })
                          });
                    });        

                }






function povoaSelectDasTrilhas(){
                    $.ajax({
                        // inicio do código ajax listagem inicial - lista users
                        type: "POST",
                        url: "lista_trilhas.php",
                        dataType: "json",
                        encode: true,
                    }).done(function (data) {
                        console.log(data);
                        
                        _listaVideosDaTrilha.innerHTML = '';
                        const _optionVazio = document.createElement('option');        
                        _optionVazio.value = "";
                        _optionVazio.textContent = " ...";
                        _selectIdTrilhaEscolhida.appendChild(_optionVazio);

                        for (trilha of data){
                            let _option = document.createElement('option');
                            _option.value = trilha.trilha_id;
                            console.log(_option);
                            _option.textContent = trilha.trilha_name;
                            _selectIdTrilhaEscolhida.appendChild(_option);
                            _arrPovoSelect[trilha.trilha_id] = trilha.trilha_name;
                        }
                        console.log(_arrPovoSelect);
                    });
                }






function removeClassActive(nodeListLinks){
                    nodeListLinks.forEach(function(link){
                        link.parentNode.parentNode.classList.remove('active');
                        link.querySelector('i').style.color = '#212529';
                    })   

                }




function atualizaListaDeVideosGeral(nodeList){   
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
                            _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><i class="fa-brands fa-youtube youtube-icon"></i> >${texto_t2}</a>`;
                            _td3.appendChild(_nodeText3);
                            _td4.innerHTML = `<form class="form-vincula-video-a-trilha"><input type="hidden" class="input-form-vincula-video-a-trilha" name="input-form-vincula-video-a-trilha" value="${videoItem.id}"><button type="submit" class="btn btn-secondary btn-vincula" data-id="${videoItem.id}" data-id_conteudo_indice="${videoItem.id_conteudo_indice}" data-descricao="${videoItem.descricao}" data-codigo="${videoItem.codigo}"><i class="fa fa-plus" aria-hidden="true"></i> Vincula</button></form>`;
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
                                        video_a_vincular: item.querySelector('.input-form-vincula-video-a-trilha').value
                                    };
                                    console.log(formData_);
                                    item.parentNode.parentNode.style.opacity = 0;
                                    setTimeout(function(){
                                        item.parentNode.parentNode.remove();
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
                            _td4.innerHTML = `<form class="form-vincula-video-a-trilha"><input type="hidden" class="input-form-vincula-video-a-trilha" name="input-form-vincula-video-a-trilha" value="${videoItem.id}"><button type="submit" class="btn btn-secondary btn-vincula" data-id="${videoItem.id}" data-id_conteudo_indice="${videoItem.id_conteudo_indice}" data-descricao="${videoItem.descricao}" data-codigo="${videoItem.codigo}"><i class="fa fa-plus" aria-hidden="true"></i> Vincula</button></form>`;
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
                                        video_a_vincular: item.querySelector('.input-form-vincula-video-a-trilha').value
                                    };
                                    console.log(formData_);
                                    item.parentNode.parentNode.style.opacity = 0;
                                    setTimeout(function(){
                                        item.parentNode.parentNode.remove();
                                    }, 1000);
                                })
                            });                                                               
                    }
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
                        _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" data-youtube_code="${videoItem.codigo}" data-descricao="${videoItem.descricao}"><i class="fa-brands fa-youtube youtube-icon"></i> ${texto_t2}</a>`;
                        _td3.appendChild(_nodeText3);
                        _td4.innerHTML = `<form class="form-vincula-video-a-trilha"><input type="hidden" class="input-form-vincula-video-a-trilha" name="input-form-vincula-video-a-trilha" value="${videoItem.id}"><button type="submit" class="btn btn-secondary btn-vincula" data-id="${videoItem.id}" data-id_conteudo_indice="${videoItem.id_conteudo_indice}" data-descricao="${videoItem.descricao}" data-codigo="${videoItem.codigo}"><i class="fa fa-plus" aria-hidden="true"></i> Vincula</button></form>`;
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
                              video_a_vincular: item.querySelector('.input-form-vincula-video-a-trilha').value
                          };
                          console.log(formData_);
                          item.parentNode.parentNode.style.opacity = 0;
                          setTimeout(function(){
                              item.parentNode.parentNode.remove();
                          }, 1000);
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
                        _td4.innerHTML = `<form class="form-remove-video-da-trilha" data-trilha_videos_id="${trilha.trilha_videos_id}"><input type="hidden" class="input-form-remove-video-trilha" name="input-form-remove-video-trilha" value="${trilha.trilha_videos_id}" /><button type="submit" class="btn btn-secondary">Desvincula</button></form>`;
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