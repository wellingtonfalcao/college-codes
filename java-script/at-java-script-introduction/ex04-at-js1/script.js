/*
----------------------------------------------------------------
Exercicio 4 - Sistema de Login
----------------------------------------------------------------

Crie um sistema onde o usuário digita um nome de usuário e 
senha utilizando prompt.

- Verifique se as credenciais estão corretas 
(defina valores fixos para nome de usuário e senha em JavaScript, 
como user: admin, password: 1234).

- Mostre um alert com a mensagem correta, 
conforme se o login foi bem sucedido ou não.

*/

// Entrada de dados 

    // Declaração prévia das variáveis
    const adminLogin = "admin";
    const adminSenha = 1234;

    // Entrada dos dados do usuário
    let usuarioLogin = prompt("Digite seu login");
    let usuarioSenha = Number(prompt("Digite sua senha"));

// Processamento das informações como true apenas se ambas forem corretas.
if (usuarioLogin === adminLogin && usuarioSenha === adminSenha ) {
    alert("Login realizado com sucesso");
} else {
    alert("Login inválido, tente novamente.");
}



