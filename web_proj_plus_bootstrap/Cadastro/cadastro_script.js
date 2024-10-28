function validarCadastro(){
    if (document.getElementById("name").innerText == null) {
        alert("Nome não inserido!");
        return false;
    } else if (document.getElementById("email").innerText == null) {
        alert("Email não inserido!");
        return false;
    } else if(document.getElementById("password1").value != document.getElementById("password2").value){
        alert("As senhas não conferem!");
        return false;
    } else {
        alert("Cadastro realizado com sucesso!")
        location.href = "/web_proj_plus_bootstrap/Home/Home.html"
    }
}