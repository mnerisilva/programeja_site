
                          const _formCadastroDeTrilha = document.querySelector('.form-cadastro-de-trilha');
                         
                            $(_formCadastroDeTrilha).submit(function(event){
                                event.preventDefault();
                                console.log('entrou no submit do form-cadastro de trilhas')

                                let trilha_name = _formCadastroDeTrilha.querySelector('#trilha_name').value;
                                let trilha_type = _formCadastroDeTrilha.querySelector('#trilha_type').value;
                                let trilha_descricao = _formCadastroDeTrilha.querySelector('#trilha_descricao').value;
                                let trilha_nomeamigavel = _formCadastroDeTrilha.querySelector('#trilha_nomeamigavel').value;
                                let id_categoria = _formCadastroDeTrilha.querySelector('#id_categoria').value;

                                console.log(trilha_name, trilha_type, trilha_descricao, trilha_nomeamigavel, id_categoria);
                                



                                  
                                /*var formData_ = {
                                    trilha_escolhida: $("#trilha_escolhida").val()
                                };
                                $.ajax({
                                    type: "POST",
                                    url: "insere_trilha.php",
                                    data: formData_,
                                    dataType: "json",
                                    encode: true,
                                }).done(function (data) {
                                    console.log(data);
                                });*/                            







                                //`trilha_name`, `trilha_type`, `trilha_descricao`, `trilha_nomeamigavel`, `id_categoria`, `trilha_status













                            
                          });