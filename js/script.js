$(function(){
    $('#btnIndex').click(function(){
        var e = document.getElementById("pgSelect");
        var itemSelecionado = e.options[e.selectedIndex].value;
    if(itemSelecionado == 1){
        window.location.assign("http://localhost:63342/Desafio_Semana1/autorizado.html");
    }else if(itemSelecionado == 2){
        window.location.assign("http://localhost:63342/Desafio_Semana1/errooperadora.html");
    }else{
        window.location.assign("http://localhost:63342/Desafio_Semana1/errodesconhecido.html");
    }

    })
});