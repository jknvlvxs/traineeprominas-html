$(function(){
    $('#btnIndex').click(function(){
        var e = document.getElementById("pgSelect");
        var itemSelecionado = e.options[e.selectedIndex].value;
    if(itemSelecionado == 1){
        window.location.assign("https://jknvlvxs.github.io/desafio1/autorizado");
    }else if(itemSelecionado == 2){
        window.location.assign("https://jknvlvxs.github.io/desafio1/errooperadora");
    }else{
        window.location.assign("https://jknvlvxs.github.io/desafio1/errodesconhecido");
    }

    })
});
