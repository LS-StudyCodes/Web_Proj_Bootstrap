function validarCadastro(){
    if (document.getElementById("name").value == "") {
        alert("Nome não inserido!");
        return false;
    } else if (document.getElementById("email").value == "") {
        alert("Email não inserido!");
        return false;
    } else if(document.getElementById("password1").value != document.getElementById("password2").value){
        alert("As senhas não conferem!");
        return false;
    } else if(document.getElementById("password1").value == "" ||document.getElementById("password2").value == "" )
    {
        alert("Senha não inserida!");
    }
     else {
        alert("Cadastro realizado com sucesso!")
        location.href = "/web_proj_plus_bootstrap/Home/Home.html"
    }
}
