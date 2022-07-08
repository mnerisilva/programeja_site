
                          const _formCadastroDeTrilha = document.querySelector('.form-cadastro-de-trilha');
                         
                            $(_formCadastroDeTrilha).submit(function(event){
                                event.preventDefault();
                                console.log('entrou no submit do form-cadastro de trilhas')
                                
                                
                                let _id_categoria = _formCadastroDeTrilha.querySelector('#id_categoria').value;
                                let _trilha_type = _formCadastroDeTrilha.querySelector('#trilha_type').value;
                                let _trilha_name = _formCadastroDeTrilha.querySelector('#trilha_name').value;
                                let _trilha_descricao = _formCadastroDeTrilha.querySelector('#trilha_descricao').value;
                                let _trilha_nomeamigavel = _formCadastroDeTrilha.querySelector('#trilha_nomeamigavel').value;

                                console.log(_id_categoria);
                                console.log(_trilha_type);
                                console.log(_trilha_name);
                                console.log(_trilha_descricao);
                                console.log(_trilha_nomeamigavel);
                                



                                  
                                var formData_ = {
                                    "id_categoria": _id_categoria,
                                    "trilha_type": _trilha_type,
                                    "trilha_name": _trilha_name,
                                    "trilha_descricao": _trilha_descricao,
                                    "trilha_nomeamigavel": _trilha_nomeamigavel
                                };

                                console.log(formData_);
                                $.ajax({
                                    type: "POST",
                                    url: "insere_trilha.php",
                                    data: formData_,
                                    dataType: "json",
                                    encode: true,
                                }).done(function (data) {
                                    console.log(data);
                                    _formCadastroDeTrilha.querySelector('#id_categoria').value = '';
                                    _formCadastroDeTrilha.querySelector('#trilha_type').value = '';
                                    _formCadastroDeTrilha.querySelector('#trilha_name').value = '';
                                    _formCadastroDeTrilha.querySelector('#trilha_descricao').value = '';
                                    _formCadastroDeTrilha.querySelector('#trilha_nomeamigavel').value = '';                                    
                                });                        
                          });