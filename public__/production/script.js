$(document).ready(function () {
  const _listaVideos = document.querySelector(".lista-videos tbody");
  const _normalize = document.querySelector(".normalize");
  const _rubber = document.querySelector(".rubber");
  const _copy = document.querySelector(".copy");
  const _youtubeLinkTester = document.querySelector(".youtube-link-tester");
  const _modalContent = document.querySelector("._modal-content");
  const _modalCancel = document.querySelector("._modal-cancel");
  const _deleteCancel = document.querySelector(".delete-cancel");
  const _deleteConfirm = document.querySelector(".delete-confirm");
  const _delete_button_confirm = document.querySelector(".delete-button-confirm");
  const _formModalConfimDeleteId = document.querySelector("#modalConfirmDeleteId");
  const _form_cadastro_video = document.querySelector("#cadastro_video");
  const _form_cadastro_de_trilha = document.querySelector("#cadastro_de_trilha");
  const _input_confirm_id_modal_delete = document.querySelector("#input_confirm_id_modal_delete");
  const _deleteModal = document.querySelector("#deleteModal");
  let trash_icon_delete_all;
  let _linha_da_listagem;


  
 

  listarVideos();
  

  _copy.addEventListener("click", function () {
    navigator.clipboard.writeText(_codigoyt.value);
  });
  _rubber.addEventListener("click", function () {
    console.log("cliquei no rubber");
    _codigoyt.value = "";
  });
  _normalize.addEventListener("click", function () {
    if (_codigoyt.value === "" || _codigoyt.value === null) {
      console.log("campo codigo está vazio");
      return;
    } else {
      let link = _codigoyt.value;
      if (!link.includes("watch?v=")) {
        return;
      } else {
        let partes = link.split("watch?v=");
        if (partes[1].length > 11) {
          console.log("é uma playlist");
          _codigoyt.value = partes[1].substring(0, 11);
          _youtubeLinkTester.setAttribute("href",`https://www.youtube.com/watch?v=${_codigoyt.value}`);
        } else {
          console.log("é um vídeo simples");
          _codigoyt.value = partes[1];
          _youtubeLinkTester.setAttribute("href",`https://www.youtube.com/watch?v=${_codigoyt.value}`);
        }
        return;
      }
    }
  });

  _modalCancel.addEventListener("click", function () {});

  $.ajax({
    // inicio do código ajax listagem inicial - cadastro de vídeo avulso
    type: "POST",
    url: "php/lista.php",
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
      _listaVideos.appendChild(_tr);
    } // fim do for
    _trash_icon_delete_all = document.querySelectorAll(".trash-icon-delete");
    console.log(_modalContent);
    bindTrashIconDelete();
  }); // fim do código ajax listagem inicial - cadastro de vídeo avulso





  $(_form_cadastro_video).submit(function (event) {
    // inicio do código ajax envio - cadastro de vídeo avulso
    var formData = {
      categoria: $("#categoria").val(),
      nomevideo: $("#nomevideo").val(),
      codigoyt: $("#codigoyt").val(),
    };
    $.ajax({
      type: "POST",
      url: "php/recebe.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
      console.log(typeof data);
      let _ultimoAdicionado = data.length - 1;
      console.log(
        data[_ultimoAdicionado].descricao,
        data[_ultimoAdicionado].codigo
      );
      let _tr = document.createElement("tr");
      let _td1 = document.createElement("td");
      let _td2 = document.createElement("td");
      let _td3 = document.createElement("td");
      let _td4 = document.createElement("td");
      let _td5 = document.createElement("td");
      let _nodeText1 = document.createTextNode(data[_ultimoAdicionado].id);
      let _nodeText2 = document.createTextNode(
        data[_ultimoAdicionado].descricao
      );
      let _nodeText3 = document.createTextNode(data[_ultimoAdicionado].codigo);
      _td1.appendChild(_nodeText1);
      _td2.appendChild(_nodeText2);
      let texto_t2 = _td2.textContent;
      _td2.textContent = texto_t2;
      _td2.innerHTML = `<a href="https://www.youtube.com/watch?v=${data[_ultimoAdicionado].codigo}" class="link-youtube" target="_blank"><i class="fa-brands fa-youtube youtube-icon"></i> ${texto_t2}</a>`;
      _td3.appendChild(_nodeText3);
      _td4.innerHTML = '<i class="fa-solid fa-pencil"></i>';
      _td5.innerHTML = `<i class="fa-solid fa-trash-can trash-icon-delete" data-id="${data[_ultimoAdicionado].id}" data-id_conteudo_indice="${data[_ultimoAdicionado].id_conteudo_indice}" data-descricao="${data[_ultimoAdicionado].descricao}" data-codigo="${data[_ultimoAdicionado].codigo}" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>`;
      _tr.appendChild(_td1);
      _tr.appendChild(_td2);
      _tr.appendChild(_td3);
      _tr.appendChild(_td4);
      _tr.appendChild(_td5);
      _listaVideos.appendChild(_tr);
      _trash_icon_delete_all = document.querySelectorAll(".trash-icon-delete");
      _icon_delete_cancal_all = document.querySelectorAll(".delete-cancel");
      _icon_delete_confirm_all = document.querySelectorAll(".delete-confirme");
      console.log(_modalContent);
      bindTrashIconDelete();

      /*}*/
      _select_categoria.value = "";
      _nomevideo.value = "";
      _codigoyt.value = "";
    });
    event.preventDefault();
  });

  // fim do código ajax envio - cadastro de vídeo avulso

  const _select_categoria = document.querySelector("#categoria");
  const _nomevideo = document.querySelector("#nomevideo");
  const _codigoyt = document.querySelector("#codigoyt");
  const _form = document.querySelector("form");
  const _buttonSubmit = document.querySelector(".submit");

  let quantidadeCampos = 1;

  const _videos = document.querySelectorAll(".video");
  const _tipo = document.querySelector("#tipo");
  _tipo_escolhido = "video";

  ////////////////////////// FUNÇOES GERAIS ///////////////////////////////////////////////////////////////////////////////
  function listarVideos() {
    $.ajax({
      type: "POST",
      url: "php/lista.php",
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log("entrou na function listar", data);
    });
  }

  function bindTrashIconDelete() {
    _trash_icon_delete_all.forEach(function (trash) {
      trash.addEventListener("click", function (e) {
        console.log(e.target);
        console.log(_modalContent);
        /*e.target.parentNode.parentNode.querySelector("td:nth-child(2)").style.textDecoration = "line-through";
        e.target.parentNode.parentNode.querySelector("td:nth-child(2)").style.pointerEvents = "none";
        e.target.parentNode.parentNode.querySelector("td:nth-child(3)").style.textDecoration = "line-through";*/
        _modalContent.innerHTML = `<td>${e.target.dataset.id} </td><td>${e.target.dataset.descricao} </td><td>${e.target.dataset.codigo} </td>`;
        _delete_button_confirm.dataset.id = e.target.dataset.id;
        _delete_button_confirm.dataset.descricao = e.target.dataset.descricao;
        _delete_button_confirm.dataset.codigo = e.target.dataset.codigo;
        _input_confirm_id_modal_delete.value = e.target.dataset.id;
        _linha_da_listagem = e.target.parentNode.parentNode;
        console.log(e.target.parentNode.parentNode);
        /*e.target.style.pointerEvents = "none";
        let _deleteCancelDestaTD = e.target.parentNode.querySelector(".delete-cancel");
        let _deleteConfirmDestaTD = e.target.parentNode.querySelector(".delete-confirm");
        let _etarget = e.target;*/

        //bindIconDeleteCancel(_etarget, _deleteCancelDestaTD, _deleteConfirmDestaTD);
        //bindIconDeleteConfirm(_etarget, _deleteCancelDestaTD, _deleteConfirmDestaTD);

        /*e.target.style.display = "none";
        e.target.parentNode.querySelector(".delete-cancel").style.opacity = 1;
        e.target.parentNode.querySelector(".delete-cancel").style.pointerEvents = "all";
        e.target.parentNode.querySelector(".delete-confirm").style.opacity = 1;
        e.target.parentNode.querySelector(".delete-confirm").style.pointerEvents = "all";
        e.target.style.pointerEvents = "none";*/
      });
    });
  }













  function bindIconDeleteCancel(_etarget, _iconDeleteCancelAtual, _iconDeleteConfirmAtual) {
    return;
    _iconDeleteCancelAtual.style.color = "red";

    _iconDeleteCancelAtual.addEventListener('click', function(e){
      _iconDeleteCancelAtual.style.opacity = 0;
      _iconDeleteCancelAtual.style.pointerEvents = 'none';
      _iconDeleteConfirmAtual.style.opacity = 0;
      _iconDeleteConfirmAtual.style.pointerEvents = 'none';
      setTimeout(function(){_etarget.style.display = 'inline-block'; _etarget.style.pointerEvents = 'auto'}, 300);
      _etarget.parentNode.parentNode.querySelector('td:nth-child(2)').style.textDecoration = 'auto';
      _etarget.parentNode.parentNode.querySelector('td:nth-child(3)').style.textDecoration = 'auto';
      _etarget.parentNode.parentNode.style.opacity = 0;
      setTimeout(function(){_etarget.parentNode.parentNode.style.display = 'none';}, 200);
      //_idExcluir = e.target.dataset.id;
      //exclui(_idExcluir);
      
      console.log(_etarget);
    });
  }

  function bindIconDeleteConfirm(_etarget, _iconDeleteConfirmAtual, _iconDeleteConfirmAtual) {
    return;
    _iconDeleteConfirmAtual.style.color = "#5dc15d";
    //_trash_icon_delete_all.forEach(function (trash) {}
  }

  function exclui(_id) {
    /*$.ajax({
      type: "POST",
      url: "php/exclui.php",
       data: {'id':_id},
      dataType: "json",
      encode: true,
    }).done(function (data) {});*/
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  $(_formModalConfimDeleteId).submit(function (event) {
    // inicio do código ajax envio - cadastro de vídeo avulso
    console.log('entrou aqui')
    var formData = {
      id: $("#input_confirm_id_modal_delete").val()
    };
    $.ajax({
      type: "POST",
      url: "php/exclui.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log('O vídeo foi excluído!!!');
      //_deleteModal.classList.remove('show');
      _deleteModal.classList.remove('show');
      document.body.querySelector('.modal-backdrop').classList.remove('show');
      _linha_da_listagem.style.display = "none";
    });
    event.preventDefault();
  });




});
