function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "user@gmail.com" && password === "senha") {
        
    } else {
        alert("Email ou senha estão incorretos!");
    }
}

function cadastrar() {
    window.location.href = "../Cadastro/Cadastro.html";
}

function esqueceuAsenha() {
    alert("Função de cadastro não será implementada nesse projeto :)");
}