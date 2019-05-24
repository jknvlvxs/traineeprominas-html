$(function(){
    $('#btnIndex').click(function(){
        var e = document.getElementById("pgSelect");
        var itemSelecionado = e.options[e.selectedIndex].value;
    if(itemSelecionado == 1){
        window.location.assign("autorizado.html");
    }else if(itemSelecionado == 2){
        window.location.assign("errooperadora.html");
    }else{
        window.location.assign("errodesconhecido.html");
    }

    })
});