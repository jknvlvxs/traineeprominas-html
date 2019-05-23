$(function(){
    $('#btnIpatinga').click(function(){
        $(document.getElementById('titulomodal')).html("Lista de Cursos em Ipatinga");
        $(document.getElementById('item1')).html("Biomedicina");
        $(document.getElementById('item2')).html("Engenharia Civil");
        $(document.getElementById('item3')).html("Engenharia Elétrica");
        $(document.getElementById('item4')).html("Fonoaudiologia");
        $(document.getElementById('item5')).html("Sistema de Informação");
        $("#modalExemplo").modal();
    });
    $('#btnContagem').click(function(){
        $(document.getElementById('titulomodal')).html("Lista de Cursos em Contagem");
        $(document.getElementById('item1')).html("Análise de Sistemas");
        $(document.getElementById('item2')).html("Enfermagem");
        $(document.getElementById('item3')).html("Farmácia");
        $(document.getElementById('item4')).html("Pedagogia");
        $(document.getElementById('item5')).html("Odontologia");
        $("#modalExemplo").modal();

    });
    $('#btnTimoteo').click(function(){
        $(document.getElementById('titulomodal')).html("Lista de Cursos em Timóteo");
        $(document.getElementById('item1')).html("Direito");
        $(document.getElementById('item2')).html("Estética e Cosmética");
        $(document.getElementById('item3')).html("Gestão de Recursos Humanos");
        $(document.getElementById('item4')).html("Gestão Pública");
        $(document.getElementById('item5')).html("Negócios Imobiliários");
        $("#modalExemplo").modal();
    });
});