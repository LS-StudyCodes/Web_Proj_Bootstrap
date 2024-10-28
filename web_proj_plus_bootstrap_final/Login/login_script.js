function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "user@gmail.com" && password === "senha") {
        window.location.href = "../Home/Home.html";
    } else {
        alert("Email ou senha estão incorretos!");
    }
}

function cadastrar() {
    location.href = "/web_proj_plus_bootstrap/Cadastro/Cadastro.html";
}