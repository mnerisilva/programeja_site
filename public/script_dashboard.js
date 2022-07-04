
    const _listaVideosGeral = document.querySelector(".lista-videos-geral tbody");
    const _listaVideosAtribuidos = document.querySelector(".lista-videos-atribuidos tbody");
    const _selectIdTrilhaEscolhida = document.querySelector('#trilha_escolhida');
    const _btnCarregaTrilha = document.querySelector('.btn-carrega-trilha');
    const _formFiltraTrilha = document.querySelector('.filtra-trilha');
    const _listaVideosDaTrilha = document.querySelector('.lista-videos-da-trilha tbody');




    console.log(_listaVideosDaTrilha);

    let _btnAtribui;

    povoaSelectTrilhas();



    $.ajax({
        // inicio do código ajax listagem inicial - lista users
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
            _td4.innerHTML = `<i class="fa-solid fa-gear user-course-manager" data-bs-toggle="modal" data-bs-target="#modalGerenciarAtribuidos" data-userid="${userItem.user_id}" data-username="${userItem.user_name}" data-userphoto="${userItem.user_photo}"></i>&nbsp;<i class="fa-solid fa-user-gear user-manager"></i>`;
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
            });
        })

        _userManager.forEach(function(item){
            item.addEventListener('click', function(e){
                _modalUserId.innerHTML = `${e.target.dataset.userid}`;
                _modalUserName.innerHTML = e.target.dataset.username;
            });
        })

    });    





    ///////  AJAX DE LISTAGEM GERAL DE VÍDEOS DA PLATAFORMA
    $.ajax({
        // inicio do código ajax listagem inicial - cadastro de vídeo avulso
        type: "POST",
        url: "lista.php",
        dataType: "json",
        encode: true,
    }).done(function (data) {
        //console.log(data);
        for (videoItem of data) {
        //console.log(videoItem.descricao, videoItem.codigo);
        }
        for (videoItem of data) {
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
        _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoItem.codigo}" class="link-youtube" target="_blank"><i class="fa-brands fa-youtube youtube-icon"></i> ${texto_t2}</a>`;
        _td3.appendChild(_nodeText3);
        _td4.innerHTML = `<button class="btn btn-secondary btn-atribui" disabled data-id="${videoItem.id}" data-id_conteudo_indice="${videoItem.id_conteudo_indice}" data-descricao="${videoItem.descricao}" data-codigo="${videoItem.codigo}">Vincula</button>`;
        _tr.appendChild(_td1);
        _tr.appendChild(_td2);
        _tr.appendChild(_td3);
        _tr.appendChild(_td4);
        _listaVideosGeral.appendChild(_tr);
        } // fim do for
        _btnAtribui = document.querySelectorAll(".btn-atribui");

        //console.log('entrou aqui');
        //console.log(_btnAtribui);
        _btnAtribui.forEach(function(btnAtribui){
            btnAtribui.addEventListener('click', listenerDoAtribui);
                })

    _selectIdTrilhaEscolhida.addEventListener('change', function(e){
                //if(e.target.value === '1'){
                if(e.target.value == '') {
                    adicionaDisabledBtnAtribui(_btnAtribui)
                    _listaVideosDaTrilha.innerHTML = ''; // limpa body da table que lista os vídeos da trilha - table da direita 
                } else if(parseInt(e.target.value) > 0){
                    removeDisabledBtnAtribui(_btnAtribui);
                }
            });
    $(_formFiltraTrilha).submit(function(event){
                    event.preventDefault();
                    console.log('entrou dentro do listener do form FiltraTrilha', _selectIdTrilhaEscolhida.value);
                    _listaVideosDaTrilha.innerHTML = '';
                    listaVideosDaTrilha();
                });

    }); // fim do código ajax listagem inicial - cadastro de vídeo avulso }






    function listenerDoAtribui(e){ // listner dos botões ADICIONAR
                    let _trVideosGerais = e.target.parentNode.parentNode;
                    e.target.classList.remove('btn-atribui');
                    e.target.classList.add('btn-remove');
                    e.target.textContent = 'Remover';
                    e.target.removeEventListener('click', listenerDoAtribui, false);
                    _listaVideosAtribuidos.appendChild(_trVideosGerais);
                }





  function escutaMudancaEstadoSelect() {
                    removeDisabledBtnAtribui(_btnAtribui);
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
                        for (trilha of data) {
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
                            _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${trilha.conteudo_codigoyoutube}" class="link-youtube" target="_blank"><i class="fa-brands fa-youtube youtube-icon"></i> ${texto_t2}</a>`;
                            _td3.appendChild(_nodeText3);
                            _td4.innerHTML = `<form class="form-remove-video-da-trilha" data-trilha_videos_id="${trilha.trilha_videos_id}"><input type="hidden" class="input-form-remove-video-trilha" name="input-form-remove-video-trilha" value="${trilha.trilha_videos_id}" /><button type="submit" class="btn btn-secondary">Desvincula</button></form>`;
                            _tr.appendChild(_td1);
                            _tr.appendChild(_td2);
                            _tr.appendChild(_td3);
                            _tr.appendChild(_td4);
                            _listaVideosDaTrilha.appendChild(_tr);
                          }

                          const _formRemoveVideoDaTrilha = document.querySelectorAll('.form-remove-video-da-trilha');
                          _formRemoveVideoDaTrilha.forEach(function(item){
                            $(item).submit(function(event){
                                event.preventDefault();
                                
                                var formData_ = {
                                    video_a_excluir: item.querySelector('.input-form-remove-video-trilha').value
                                };
                                console.log(formData_);
                                item.parentNode.parentNode.style.opacity = 0;
                                setTimeout(function(){
                                    item.parentNode.parentNode.remove();
                                }, 1000);
                               /*$.ajax({
                                    type: "POST",
                                    url: "exclui_video_da_trilha.php",
                                    data: formData_,
                                    dataType: "json",
                                    encode: true,
                                }).done(function (data) {
                                    console.log(data);
                                });*/

                            })
                          });
                    });        

                }





function povoaSelectTrilhas(){
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
                        }
                    });
                }
