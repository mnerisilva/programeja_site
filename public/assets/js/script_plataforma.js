const _playlist = [
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 1,
                            id: 1, // id do conteúdo. Neste caso, um vídeo
                            titulo: "introdução",
                            duracao: "05:45",
                            tipo: "video",
                            codigo_yt: "NHKUR8YQ3tk"
                        }
            }
    },
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 2,
                            id: 2, // id do conteúdo. Neste caso, um vídeo
                            titulo: "lógica de programação",
                            duracao: "15:21",
                            tipo: "video",
                            codigo_yt: "1So-GZonNu8"
                        }
            }
    },
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 3,
                            id: 3, // id do conteúdo. Neste caso, um vídeo
                            titulo: "variáveis",
                            duracao: "22:03",
                            tipo: "video",
                            codigo_yt: "gfkdaNKum2Q"
                        }
            }
    },
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 4,
                            id: 4, // id do conteúdo. Neste caso, um vídeo
                            titulo: "estrutura de dados",
                            duracao: "30:16",
                            tipo: "video",
                            codigo_yt: "thxYzTpOzHs"
                        }
            }
    },
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 5,
                            id: 5, // id do conteúdo. Neste caso, um vídeo
                            titulo: "estruturas de repetição",
                            duracao: "46:52",
                            tipo: "video",
                            codigo_yt: "4DNjOy9k3HI"
                        }
            }
    }
]

const _list = document.querySelector('.list ul');
var _li;

for(let i=0; i < _playlist.length; i++){
    console.log(_playlist[i].licao.conteudo.id, _playlist[i].licao.conteudo.titulo, _playlist[i].licao.conteudo.duracao);
    _list.innerHTML = `<li>${_playlist[i].licao.conteudo.id} - ${_playlist[i].licao.conteudo.titulo}<span>${_playlist[i].licao.conteudo.duracao}</span></li>`
}

console.log(_playlist.length)