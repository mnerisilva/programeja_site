
const _listaVideosGeral = document.querySelector(".lista-videos-geral tbody");
const _listaVideosAtribuidos = document.querySelector(".lista-videos-atribuidos tbody");


    $.ajax({
        // inicio do código ajax listagem inicial - cadastro de vídeo avulso
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
            _td4.innerHTML = `<i class="fa-solid fa-gear user-course-manager" data-bs-toggle="modal" data-bs-target="#modalGerenciarAtribuidos" data-userId="${userItem.user_id}" data-userName="${userItem.user_name}"></i>&nbsp;<i class="fa-solid fa-user-gear user-manager"></i>`;
            _tr.appendChild(_td1);
            _tr.appendChild(_td2);
            _tr.appendChild(_td3);
            _tr.appendChild(_td4);
            _tbody.appendChild(_tr);
        }

        const _userCourseManager = document.querySelectorAll('.user-course-manager');
        const _userManager = document.querySelectorAll('.user-manager');
        const _modalUserId = document.querySelector('.modal-user-id');
        const _modalUserName = document.querySelector('.modal-user-name');

        _userCourseManager.forEach(function(item){
            item.addEventListener('click', function(e){
                _modalUserId.innerHTML = `${e.target.dataset.userid} - `;
                _modalUserName.innerHTML = e.target.dataset.username;
            });
        })

        _userManager.forEach(function(item){
            item.addEventListener('click', function(e){
                _modalUserId.innerHTML = `${e.target.dataset.userid} - `;
                _modalUserName.innerHTML = e.target.dataset.username;
            });
        })

    });    



    $.ajax({
        // inicio do código ajax listagem inicial - cadastro de vídeo avulso
        type: "POST",
        url: "lista.php",
        dataType: "json",
        encode: true,
    }).done(function (data) {
        console.log(data);
        for (videoItem of data) {
        console.log(videoItem.descricao, videoItem.codigo);
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
        _td4.innerHTML = `<button class="btn btn-secondary btn-atribui" data-id="${videoItem.id}" data-id_conteudo_indice="${videoItem.id_conteudo_indice}" data-descricao="${videoItem.descricao}" data-codigo="${videoItem.codigo}">Atribuir</button>`;
        _tr.appendChild(_td1);
        _tr.appendChild(_td2);
        _tr.appendChild(_td3);
        _tr.appendChild(_td4);
        _listaVideosGeral.appendChild(_tr);
        } // fim do for
        const _btnAtribui = document.querySelectorAll(".btn-atribui");

        //console.log('entrou aqui');
        console.log(_btnAtribui);
        _btnAtribui.forEach(function(btnAtribui){
            btnAtribui.addEventListener('click', ouveAtribui);
        })


    }); // fim do código ajax listagem inicial - cadastro de vídeo avulso }


function ouveAtribui(e){
                let _trVideosGerais = e.target.parentNode.parentNode;
                console.log(_trVideosGerais);
                e.target.classList.remove('btn-atribui');
                e.target.classList.add('btn-remove');
                e.target.textContent = 'Remover';
                e.target.removeEventListener('click', ouveAtribui, false);               
                _listaVideosAtribuidos.appendChild(_trVideosGerais);
            }




  