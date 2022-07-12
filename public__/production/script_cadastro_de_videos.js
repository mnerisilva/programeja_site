
const _normalize = document.querySelector(".normalize");
const _rubber = document.querySelector(".rubber");
const _copy = document.querySelector(".copy");
const _youtubeLinkTester = document.querySelector(".youtube-link-tester");
const _select_categoria = document.querySelector("#categoria");
const _nomevideo = document.querySelector("#nomevideo");
const _codigoyt = document.querySelector("#codigoyt");


//$(_select_categoria).val("2").trigger( "change" );

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
          _youtubeLinkTester.setAttribute("href", `https://www.youtube.com/watch?v=${_codigoyt.value}`);
        } else {
          console.log("é um vídeo simples");
          _codigoyt.value = partes[1];
          _youtubeLinkTester.setAttribute("href", `https://www.youtube.com/watch?v=${_codigoyt.value}`);
        }
        return;
      }
    }
  });

  


  $(_form_cadastro_video).submit(function (event) {
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
      _listaVideosGeral.innerHTML = '';
      atualizaListaDeVideosGeral(data);
      /*
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
      bindTrashIconDelete();*/
      _select_categoria.value = "";
      _nomevideo.value = "";
      _codigoyt.value = "";
    });
    event.preventDefault();
  });