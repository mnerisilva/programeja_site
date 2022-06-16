const _playlist = [
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 1,
                            id: 1, // id do conteúdo. Neste caso, um vídeo
                            titulo: "Aula 01 - Criando novo projeto",
                            duracao: "05:45",
                            tipo: "video",
                            codigo_yt: "sj0p9O85AIg"
                        }
            }
    },
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 2,
                            id: 2, // id do conteúdo. Neste caso, um vídeo
                            titulo: "Aula 02 - Estrutura básica",
                            duracao: "15:21",
                            tipo: "video",
                            codigo_yt: "MOd8PCyEB88"
                        }
            }
    },
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 3,
                            id: 3, // id do conteúdo. Neste caso, um vídeo
                            titulo: "Aula 03 - Meta Tags, Cabeçalho e Parágrafo",
                            duracao: "22:03",
                            tipo: "video",
                            codigo_yt: "1ntb19o-2MI"
                        }
            }
    },
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 4,
                            id: 4, // id do conteúdo. Neste caso, um vídeo
                            titulo: "Aula 04 - Formatação de Texto",
                            duracao: "30:16",
                            tipo: "video",
                            codigo_yt: "RiGo7BN1Wps"
                        }
            }
    },
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 5,
                            id: 5, // id do conteúdo. Neste caso, um vídeo
                            titulo: "Aula 05 - Elementos de Citação",
                            duracao: "46:52",
                            tipo: "video",
                            codigo_yt: "bzWtE7GFi0Y"
                        }
            }
    }
]

const iframe = document.querySelector('iframe');

let src = `https://www.youtube.com/embed/${'sj0p9O85AIg'}?rel=0`;

iframe.setAttribute('src', src);

const _list = document.querySelector('.list ul');

console.log(_playlist)

for(let i=0; i < _playlist.length; i++){
    //console.log(_playlist[i].licao.conteudo.id, _playlist[i].licao.conteudo.titulo, _playlist[i].licao.conteudo.duracao);
    //_list.innerHTML = `<li>${_playlist[i].licao.conteudo.id} - ${_playlist[i].licao.conteudo.titulo}<span>${_playlist[i].licao.conteudo.duracao}</span></li>`
    var liNova = document.createElement('li');
    var string = `<span data-ytcodigo="${_playlist[i].licao.conteudo.codigo_yt}">${_playlist[i].licao.conteudo.id} - ${_playlist[i].licao.conteudo.titulo}</span><span class="duracao">${_playlist[i].licao.conteudo.duracao}</span>`;
    //var conteudoNovo = document.createTextNode(string);
    //liNova.appendChild(conteudoNovo);
    liNova.innerHTML = string;
    _list.appendChild(liNova);
    console.log(i)
    //_list.appendChild(_li)
}

//console.log(_playlist.length)