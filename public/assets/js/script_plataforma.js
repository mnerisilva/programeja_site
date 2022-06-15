const _playlist = [
    {
        licao: {
                id: 1, // id da lição
                conteudo: {            
                            ordem: 1,
                            id: 1, // id do conteúdo. Neste caso, um vídeo
                            titulo: "introdução",
                            duracao: "05:45",
                            tipo: "video"
                        }
            }
    },
    {
        licao: {
                id: 2, // id da lição
                conteudo: {            
                            ordem: 2,
                            id: 2, // id do conteúdo. Neste caso, um vídeo
                            titulo: "lógica de programação",
                            duracao: "15:21",
                            tipo: "video"
                        }
            }
    }
]

//const _list = document.querySelectorAll('.list ul li');

for(let i=0; i < _playlist.length; i++){
    console.log(_playlist[i].licao.conteudo.id, _playlist[i].licao.conteudo.titulo, _playlist[i].licao.conteudo.duracao )
}