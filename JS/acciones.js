$(document).ready(function () {
    //función para generar el rfc
    $("#generar").click(function () {
        //obtención de los datos proporcionados por el usuario 
        var valor1 = $("#nombre").val();
        var valor2 = $("#apPat").val();
        var valor3 = $("#apMat").val();
        var valor4 = $("#fecha").val();
        //variables para hacer las subcadenas
        var sName, sApMat, sApPat, sDia, sMes, sAnio, homoclavee, rfc;
        //constante y variables necesarias para la generación de las dos letras randoms(es la homoclave)
        const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        var word1 = alfabeto[Math.floor(Math.random() * alfabeto.length)];
        var word2 = alfabeto[Math.floor(Math.random() * alfabeto.length)];
        homoclavee = word1+word2;
        //generación de las subcadenas
        sName = valor1.substring(0,1);
        sApPat = valor2.substring(0,2);
        sApMat = valor3.substring(0,1);
        sDia = valor4.substr(-2, 2);
        sMes = valor4.substr(-5, 2);
        sAnio = valor4.substring(4, 2);
        //concatenación de las subcadenas
        rfc= sApPat+sApMat+sName+sAnio+sMes+sDia+homoclavee;
        //impresión del resultado final 
        $("#resultadoFinal").val(rfc);
    });

    //función para consumir un api
    $("#selectUsu").click(function(){
        var id = document.getElementById("idusu").value;
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users/"+ id,
            dataType:"json",
            success:function(data){
                var nam = "" + data.name + "";
                var ema=  "" + data.email + "";
                $('#nUsu').append(nam);
                $('#emailUsu').append(ema);
            }
            
        })
    })

    //función para limpiar(API)
    $("#clean").click(function(){
        $('#nUsu').empty();
        $('#emailUsu').empty();
        $('#idusu').val('');
    });

    //función para limpiar(RFC)
    $("#limpiar").click(function(){
        $('#nombre').val('');
        $('#apPat').val('');
        $('#apMat').val('');
        $('#fecha').val('');
        $('#resultadoFinal').val('');
    });

});//del "main"