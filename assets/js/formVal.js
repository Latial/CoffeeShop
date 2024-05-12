$(document).ready(function(){
    $("#name").blur(function(){
        var regIme = /^[A-Z][a-z]{2,19}$/;
        proveraRegEx(regIme, "#name")
    })
    $("#email").blur(function(){
        var regEmail = /^[\w\.\-]+\@([a-z0-9]+\.)+[a-z]{2,3}$/;
        proveraRegEx(regEmail, "#email")
    })
    $("#phone").blur(function(){
        var regPhone = /^06[0-9]\/[\d]{3}\-[\d]{3,4}$/;
        proveraRegEx(regPhone, "#phone")
    })
    function proveraRegEx(regEx, element){
        if($(element).val().match(regEx)){
            $(element).removeClass("greska");
            $(element).addClass("ispravno");
            return false;
        }
        else{
            $(element).removeClass("ispravno");
            $(element).addClass("greska");
            return true;
        }
    }
    $("#send").click(provera);
    function provera(){
        var fieldName = $("#name");
        var fieldEmail = $("#email");
        var fieldPhone = $("#phone");
        var regIme = /^[A-Z][a-z]{2,19}$/;
        var regEmail = /^[\w\.\-]+\@([a-z0-9]+\.)+[a-z]{2,3}$/;
        var regPhone = /^06[0-9]\/[\d]{3}\-[\d]{3,4}$/;
        var brojGresaka = 0;
        if(proveraRegEx(regIme, fieldName)){
            brojGresaka++;
        }
        if(proveraRegEx(regEmail, fieldEmail)){
            brojGresaka++;
        }
        if(proveraRegEx(regPhone, fieldPhone)){
            brojGresaka++;
        }
        console.log(brojGresaka)
        if(brojGresaka == 0){
            $("#ispis").html("<h3 class='alert alert-success'>Uspesno ste prijavili formu</h3>");
        }
        else{
            $('#ispis').html("<p class='alert alert-danger'>Niste lepo popunili formu, ispravite greske</p>");
        }
    }
});
document.querySelector("#textArea").addEventListener("keyup", function(){

    let polje = document.querySelector("#textArea");
    let vrednostPolja = polje.value;
    let brojKaraktera = vrednostPolja.length;

    if(brojKaraktera <= 200){
        let ostatak = 200 - Number(brojKaraktera);
        document.querySelector("#brojKaraktera").innerHTML = ostatak;
    }
    else{
        polje.value = vrednostPolja.substring(0, 200);
    }
})