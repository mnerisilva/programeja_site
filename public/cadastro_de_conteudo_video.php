<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cadastro de conteúdo - [vídeo]</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css"
      integrity="sha512-Ez0cGzNzHR1tYAv56860NLspgUGuQw16GiOOp/I2LuTmpSK9xDXlgJz3XN4cnpXWDmkNBKXR/VDMTCnAaEooxA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <style>
      body {
        background-color: #f8f9fa;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <form id="cadastro_video" method="POST" action="recebe.php">
        <h1>Cadastro de conteúdo - [ vídeo ]</h1>
        <div class="row g-3">
          <div class="col-md-2">
            <label for="categoria" class="form-label">Categoria</label>
            <select
              class="form-select"
              id="categoria"
              required=""
              name="categoria"
            >
              <option value="">Categoria...</option>
              <option value="1">Css</option>
              <option value="2">Html</option>
              <option value="3">Javascript</option>
              <option value="4">Sem categoria</option>
            </select>
          </div>
        </div>

        <div class="row g-3">
          <div class="col-md-6">
            <label for="nomevideo" class="form-label">Nome do vídeo</label>
            <input
              type="text"
              class="form-control"
              id="nomevideo"
              required=""
              name="nomevideo"
              placeholder=""
            />
          </div>
          <div class="col-md-2">
            <label for="codigoyt" class="form-label">Código do vídeo</label>
            <input
              type="text"
              class="form-control"
              id="codigoyt"
              required=""
              name="codigoyt"
              placeholder=""
            />
          </div>
        </div>        

        <button class="btn btn-primary submit" type="submit">Salvar</button>
      </form>
    </div>

   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js" integrity="sha512-QAV866KcCo2YSgj8D7BW+Zn3Fe5wVKTWwzKtWy8mkW+tePcJL7JYilvdfrBFQcdz4ODD48GpIPnhTp9UDI37uw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.min.js"
      integrity="sha512-EKWWs1ZcA2ZY9lbLISPz8aGR2+L7JVYqBAYTq5AXgBkSjRSuQEGqWx8R1zAX16KdXPaCjOCaKE8MCpU0wcHlHA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script>

      $(document).ready(function () {
        $("form").submit(function (event) {
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
          encode: true}).done(function(data) {
          console.log(data);
        });

        event.preventDefault();
      });
    });



        const _select_categoria = document.querySelector('#categoria');
        const _nomevideo = document.querySelector('#nomevideo');
        const _codigoyt = document.querySelector('#codigoyt');
        const _form = document.querySelector('form');
        const _buttonSubmit = document.querySelector('.submit');

        _select_categoria.value = '';
        _nomevideo.value = '';
        _codigoyt.value = '';


        const arrDivRow     = ['','','','','','','','','','',''];
        const arrDivCol_1   = ['','','','','','','','','','',''];
        const arrDivCol_2   = ['','','','','','','','','','',''];
        const arrLabel_1      = ['','','','','','','','','','',''];
        const arrLabel_2      = ['','','','','','','','','','',''];
        const arrLabelText_1  = ['','','','','','','','','','',''];
        const arrLabelText_2  = ['','','','','','','','','','',''];
        const arrInput_1      = ['','','','','','','','','','',''];
        const arrInput_2      = ['','','','','','','','','','',''];

        let quantidadeCampos = 1;


      const _videos = document.querySelectorAll(".video");
      const _tipo = document.querySelector("#tipo");
      _tipo_escolhido = "video";

      

      /*_tipo.addEventListener("change", function (e) {
        console.log(e.target.value);
        if (e.target.value === "playlist") {
          _tipo_escolhido = "playlist";
        } else {
          _tipo_escolhido = "video";          
          geraCampos(1);
        }
      });*/




      function geraCampos(quantidade){
        arrLabelText_1[quantidade] = document.createTextNode('Nome do vídeo');
        arrLabelText_2[quantidade] = document.createTextNode('Código do vídeo');
        arrLabel_1[quantidade] = document.createElement('label');
        arrLabel_1[quantidade].appendChild(arrLabelText_1[quantidade]);
        arrLabel_1[quantidade].setAttribute('for', 'nomevideo'+1);
        arrLabel_1[quantidade].classList.add('form-label');        
        arrLabel_2[quantidade] = document.createElement('label');
        arrLabel_2[quantidade].appendChild(arrLabelText_2[quantidade]);
        arrLabel_2[quantidade].setAttribute('for', 'linkyt'+1);
        arrLabel_2[quantidade].classList.add('form-label');
        arrInput_1[quantidade] = document.createElement('input');
        arrInput_1[quantidade].setAttribute('type','text');        
        arrInput_1[quantidade].classList.add('form-control');        
        arrInput_1[quantidade].setAttribute('id','nomevideo'+1);        
        arrInput_1[quantidade].setAttribute('required','');       
        arrInput_1[quantidade].setAttribute('name','nomevideo'+1); 
        arrInput_1[quantidade].setAttribute('placeholder','');
        arrInput_2[quantidade] = document.createElement('input');
        arrInput_2[quantidade].setAttribute('type','text');        
        arrInput_2[quantidade].classList.add('form-control');        
        arrInput_2[quantidade].setAttribute('id','linkyt'+1);        
        arrInput_2[quantidade].setAttribute('required','');       
        arrInput_2[quantidade].setAttribute('name','linkyt'+1);  
        arrInput_2[quantidade].setAttribute('placeholder',''); 
        arrDivCol_1[quantidade] = document.createElement('div');
        arrDivCol_1[quantidade].classList.add('col-md-6');
        arrDivCol_2[quantidade] = document.createElement('div');
        arrDivCol_2[quantidade].classList.add('col-md-2');
        arrDivRow[quantidade] = document.createElement('div');
        arrDivRow[quantidade].classList.add('row','g-3', 'video', 'video'+1);
        arrDivCol_1[quantidade].appendChild(arrLabel_1[quantidade]);
        arrDivCol_1[quantidade].appendChild(arrInput_1[quantidade]);
        arrDivCol_2[quantidade].appendChild(arrLabel_2[quantidade]);
        arrDivCol_2[quantidade].appendChild(arrInput_2[quantidade]);
        arrDivRow[quantidade].appendChild(arrDivCol_1[quantidade]);
        arrDivRow[quantidade].appendChild(arrDivCol_2[quantidade]);
        _form.appendChild(arrDivRow[quantidade]);
        _form.appendChild(_buttonSubmit);
        console.log(arrDivRow);
        console.log(arrDivCol_1);
        console.log(arrDivCol_2);
        console.log(arrLabel_1);
        console.log(arrLabel_2);
        console.log(arrLabelText_1);
        console.log(arrLabelText_2);
        console.log(arrInput_1);
        console.log(arrInput_2);             
      }
    </script>
  </body>
</html>
