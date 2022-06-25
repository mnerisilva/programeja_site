$(document).ready(function () {
  const _listaVideos = document.querySelector(".lista-videos tbody");
  const _normalize = document.querySelector(".normalize");
  const _rubber = document.querySelector(".rubber");
  const _copy = document.querySelector(".copy");
  const _youtubeLinkTester = document.querySelector(".youtube-link-tester");
  const _modalContent = document.querySelector("._modal-content");
  const _modalCancel = document.querySelector("._modal-cancel");
  let trash_icon_delete_all;

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
          _youtubeLinkTester.setAttribute(
            "href",
            `https://www.youtube.com/watch?v=${_codigoyt.value}`
          );
        } else {
          console.log("é um vídeo simples");
          _codigoyt.value = partes[1];
          _youtubeLinkTester.setAttribute(
            "href",
            `https://www.youtube.com/watch?v=${_codigoyt.value}`
          );
        }
        return;
      }
    }
  });

  _modalCancel.addEventListener("click", function () {});

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
      _td5.innerHTML = `<i class="fa-solid fa-trash-can trash-icon-delete" data-bs-toggle="" data-bs-toggle="modal" data-id="${data[i].id}" data-id_conteudo_indice="${data[i].id_conteudo_indice}" data-descricao="${data[i].descricao}" data-codigo="${data[i].codigo}" data-bs-target="#deleteModal"></i>&nbsp;<i class="fa-solid fa-xmark delete-cancel"></i>&nbsp;<i class="fa-solid fa-check delete-confirm"></i>`;
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

  $("form").submit(function (event) {
    // inicio do código ajax envio - cadastro de vídeo avulso
    var formData = {
      categoria: $("#categoria").val(),
      nomevideo: $("#nomevideo").val(),
      codigoyt: $("#codigoyt").val(),
    };
    $.ajax({
      type: "POST",
      url: "recebe.php",
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
      _td5.innerHTML = `<i class="fa-solid fa-trash-can trash-icon-delete" data-bs-toggle="modal" data-bs-toggle="modal" data-id="${data[_ultimoAdicionado].id}" data-id_conteudo_indice="${data[_ultimoAdicionado].id_conteudo_indice}" data-descricao="${data[_ultimoAdicionado].descricao}" data-codigo="${data[_ultimoAdicionado].codigo}" data-bs-target="#deleteModal"></i>`;
      _tr.appendChild(_td1);
      _tr.appendChild(_td2);
      _tr.appendChild(_td3);
      _tr.appendChild(_td4);
      _tr.appendChild(_td5);
      _listaVideos.appendChild(_tr);
      _trash_icon_delete_all = document.querySelectorAll(".trash-icon-delete");
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
      url: "lista.php",
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
        //console.log(_modalDeleteBodyModalContent.textContent)
        e.target.parentNode.parentNode.querySelector(
          "td:nth-child(2)"
        ).style.textDecoration = "line-through";
        e.target.parentNode.parentNode.querySelector(
          "td:nth-child(3)"
        ).style.textDecoration = "line-through";
        _modalContent.innerHTML = `<td>${e.target.dataset.id} </td><td>${e.target.dataset.descricao} </td><td>${e.target.dataset.codigo} </td>`;
        //e.target.style.pointerEvents = "none";
        e.target.style = 0;
      });
    });
  }

  function exclui() {
    $.ajax({
      type: "POST",
      url: "recebe.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {});
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
