
const _listaVideosGeral = document.querySelector(".lista-videos-geral tbody");

listaUsers();
listaVideosGeral();

function listaUsers(){
    $.ajax({
        // inicio do código ajax listagem inicial - cadastro de vídeo avulso
        type: "POST",
        url: "lista_users.php",
        dataType: "json",
        encode: true,
    }).done(function (data) {
        console.log(data);
        const _tbody =  document.querySelector('table tbody');

        for (userItem of data){
            console.log(userItem);
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
        console.log(_userCourseManager);
        console.log(_userManager);

        _userCourseManager.forEach(function(item){
            item.addEventListener('click', function(e){
                console.log(e.target.dataset.userid);
                _modalUserId.innerHTML = `${e.target.dataset.userid} - `;
                _modalUserName.innerHTML = e.target.dataset.username;
            });
        })

        _userManager.forEach(function(item){
            item.addEventListener('click', function(e){
                console.log('clicou');
                _modalUserId.innerHTML = `${e.target.dataset.userid} - `;
                _modalUserName.innerHTML = e.target.dataset.username;
            });
        })

    });    
}

function listaVideosGeral(){
 $.ajax({
    // inicio do código ajax listagem inicial - cadastro de vídeo avulso
    type: "POST",
    url: "lista.php",
    dataType: "json",
    encode: true,
  }).done(function (data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].descricao, data[i].codigo);
    }
    for (let i = 0; i < data.length; i++) {
      let _tr = document.createElement("tr");
      let _td1 = document.createElement("td");
      let _td2 = document.createElement("td");
      let _td3 = document.createElement("td");
      let _td4 = document.createElement("td");
      let _td5 = document.createElement("td");
      let _nodeText1 = document.createTextNode(data[i].id);
      let _nodeText2 = document.createTextNode(data[i].descricao);
      let _nodeText3 = document.createTextNode(data[i].codigo);
      _td1.appendChild(_nodeText1);
      _td2.appendChild(_nodeText2);
      _td2.classList.add("tdlink");
      let texto_t2 = _td2.textContent;
      _td2.textContent = texto_t2;
      _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${data[i].codigo}" class="link-youtube" target="_blank"><i class="fa-brands fa-youtube youtube-icon"></i> ${texto_t2}</a>`;
      _td3.appendChild(_nodeText3);
      _td4.innerHTML = '<i class="fa-solid fa-pencil"></i>';
      _td5.innerHTML = `<i class="fa-solid fa-trash-can trash-icon-delete id-delete" data-id="${data[i].id}" data-id_conteudo_indice="${data[i].id_conteudo_indice}" data-descricao="${data[i].descricao}" data-codigo="${data[i].codigo}" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>&nbsp;<i class="fa-solid fa-xmark delete-cancel"></i>&nbsp;<i class="fa-solid fa-check delete-confirm"></i>`;
      _tr.appendChild(_td1);
      _tr.appendChild(_td2);
      _tr.appendChild(_td3);
      _tr.appendChild(_td4);
      _tr.appendChild(_td5);
      _listaVideosGeral.appendChild(_tr);
    } // fim do for
    _trash_icon_delete_all = document.querySelectorAll(".trash-icon-delete");
    console.log(_modalContent);
    bindTrashIconDelete();
  }); // fim do código ajax listagem inicial - cadastro de vídeo avulso    

}