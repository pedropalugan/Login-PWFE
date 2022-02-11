
let cadastros = {}
let cont = 0
let usuario = []
function verificacao(){
    let usu = document.getElementById("username").value
    let pswd = document.getElementById("password").value
    if(usu == cadastros.cont[0] && pswd == cadastros.cont[1]){
    let tudo = document.getElementById("all");
    tudo.parentNode.removeChild(tudo);
    document.getElementById("myPage").innerHTML = `
    <div class="bem_vindo">
        <p>
            <a >
            <marquee>Seja bem vindo!</marquee>
            </a>
        </p>
    </div>
    ` 
    }
    else{
        alert("Senha ou usuário incorreto")
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}

function cadastrar(){
    let nov_usu = document.getElementById("novo_user").value
    let nov_pswd = document.getElementById("novo_pass").value
    cadastros = {
        cont : [nov_usu, nov_pswd] 
    }
    document.getElementById("novo_user").value = "";
    document.getElementById("novo_pass").value = "";
}

function nova_pag(){
    let tudo = document.getElementById("all");
    tudo.parentNode.removeChild(tudo);  
    document.getElementById("myPage").innerHTML = `
    <form id = "all">

    <input class="form-control" type="text" placeholder="Email" id="novo_user">

    <input class="form-control" type="password" placeholder="Password" id="novo_pass">

    <button type="button" onclick="cadastrar()">Cadastar</button>
    <br>
    <br>
    <p>Já se cadastrou? Clique<a onclick = "antiga_pag()"> aqui</a></p>
    </form>
    `
}

function antiga_pag(){
    let tudo = document.getElementById("all");
    tudo.parentNode.removeChild(tudo);
    document.getElementById("myPage").innerHTML = `
    <form id = "all">
        <h3><img src="images/MicrosoftTeams-image.png" width="70" height="70"></h3>


        <input class="form-control" type="text" placeholder="Email" id="username">

        <input class="form-control" type="password" placeholder="Password" id="password">

        <button type="button" onclick="verificacao()">Login</button>
        <br>
        <br>
        <br>
        <p>Não tem conta, se cadastre para acessar nosso site ao clicar<a onclick="nova_pag()"> aqui</a></p>
       
    </form>
    ` 
}