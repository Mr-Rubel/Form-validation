
function subbtn(){
    var textvalue = document.querySelector("#text").value;
    var numbervalue = document.querySelector("#number").value;
    var emailvalue = document.querySelector("#email").value;
    var pwdvalue = document.querySelector("#pwd").value;
    var cpwdvalue = document.querySelector("#cpwd").value;

    if(textvalue==""){
        document.querySelector(".tex").innerHTML = "Minimum 4 charecter yet";
        return false;
    }
    if(numbervalue.length>11){
        document.querySelector(".num").innerHTML = "only 11 digit support.";
        return false;
    }
    if(numbervalue.length<11){
        document.querySelector(".num").innerHTML = "number is too short.";
        return false;
    }
    if(isNaN(numbervalue)){
        document.querySelector(".num").innerHTML = "only number.";
        return false;
    }
    if(pwdvalue!=cpwdvalue){
        document.querySelector(".not").innerHTML = "pwd are not match";
        return false;
    }
    if(emailvalue=="\,[]{}()"){
        document.querySelector(".eml").innerHTML = "please correct digite give.";
    }
    if(emailvalue==""){
        document.querySelector(".eml").innerHTML = "please fill blank.";
    }

}