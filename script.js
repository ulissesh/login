const usuarios = [];

function criarLogin() {
    const inputUsername = document.getElementById("login").value;
    const inputPassword = document.getElementById("senha").value;
    const inputConfirmPassword = document.getElementById("confirmSenha").value;

    const createSuccessLabel = document.getElementById("createSuccessLabel");
    const createErrorLabel = document.getElementById("createErrorLabel");

    if (validarSenha(inputPassword)) {
        if (inputPassword === inputConfirmPassword) {
            usuarios.push({ username: inputUsername, password: inputPassword });
            
            createSuccessLabel.style.display = "block";
            createErrorLabel.style.display = "none";

            document.getElementById("criarLoginForm").style.display = "none";
            document.getElementById("loginForm").style.display = "block";
        } else {
            createErrorLabel.textContent = 'A confirmação da senha não está igual a senha';
            createSuccessLabel.style.display = "none";
            createErrorLabel.style.display = "block";
        }
    } else {
        var errorMessage = 'A senha não atende aos critérios necessários:\n';

        if (inputPassword.length < 8) {
            errorMessage += '- A senha deve ter ao menos 8 caracteres.\n';
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(inputPassword)) {
            errorMessage += '- A senha deve incluir ao menos um caractere especial.\n';
        }

        if (!/[A-Z]/.test(inputPassword)) {
            errorMessage += '- A senha deve incluir ao menos uma letra maiúscula.\n';
        }

        if(!/[0-9]/.test(inputPassword)) {
            errorMessage += '- A senha deve conter ao menos um número';
        }

        createErrorLabel.textContent = errorMessage;
        createSuccessLabel.style.display = "none";
        createErrorLabel.style.display = "block";
    }
}

function realizarLogin() {
    const inputUsername = document.getElementById("loginLogin").value;
    const inputPassword = document.getElementById("senhaLogin").value;

    const usuarioEncontrado = usuarios.find(user => user.username === inputUsername && user.password === inputPassword);

    const loginSuccessLabel = document.getElementById("loginSuccessLabel");
    const loginErrorLabel = document.getElementById("loginErrorLabel");

    if (usuarioEncontrado) {

        loginSuccessLabel.style.display = "block";
        loginErrorLabel.style.display = "none";
    } else {

        loginErrorLabel.style.display = "block";
        loginSuccessLabel.style.display = "none";
    }
}

function validarSenha(senha) {
    return senha.length >= 8 && /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha) && /[A-Z]/.test(senha) && /[0-9]/.test(senha);
}

function mostrarSenha(idCampoSenha) {
    const campoSenha = document.getElementById(idCampoSenha);
    const btnMostrarSenha = document.getElementById(`show${idCampoSenha.replace('senha', 'Password')}Btn`);

    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        btnMostrarSenha.textContent = "Ocultar Senha";
    } else {
        campoSenha.type = "password";
        btnMostrarSenha.textContent = "Mostrar Senha";
    }

}

function voltarAoInicio() {
    window.location.reload();
}
