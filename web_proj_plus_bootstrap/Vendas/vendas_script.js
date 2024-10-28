function mensagemEnviada() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const description = document.getElementById("description").value;

    if (name == "" || email == "" || phone == "" || description == ""){
        alert("Por favor, preencha os campos :)");

    } else {
        alert("Mensagem enviada para a nossa equipe. Muito obrigado! :)");
    }
}

function whatsapp() {
    alert("Abrindo whatsapp :)");
}