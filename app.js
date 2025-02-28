/**
 * JoKenPo
 * @author Guilherme Rosa, Vitor de Assis, Wellington R Cruz.
 */

//=========================================================
// Registro do Service Worker
// se o navegador de internet suportar este recurso
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log("Service worker registrado!")
        })
}
//===========================================


// ALT + Z ativa quebra de linha automática

// Como saber se esta marcado o RADIOBUTTON ou CHECKBOX?
// R: document.getElementById('pedra').checked === false / se falso não foi preenchida


function jogar() {
    //Se incluir o preventDefault ele resolve o padrão do formulário de enviar e limpar ou também um input type button resolve
    //validação da obrigatoriedade de escolha do jogador
    if (document.getElementById('pedra').checked === false && document.getElementById('papel').checked === false && document.getElementById('tesoura').checked === false) {
        alert("Selecione uma opção")
    } else {
        // Lógica principal
        // sorteio de uma opção para o computador
        let sorteio = Math.floor(Math.random() * 3)
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "img/pcpedra.png"
                break
            case 1:
                document.getElementById('pc').src = "img/pcpapel.png"
                break
            case 2:
                document.getElementById('pc').src = "img/pctesoura.png"
                break
        }


        // Lógica para determinar empate ou declarar o vencedor
        if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2)) {
            document.getElementById('resultado').innerHTML = "EMPATE"
        } else if ((document.getElementById('pedra').checked === true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1)) {
            document.getElementById('resultado').innerText = "Jogador Venceu!"
        } else {
            document.getElementById('resultado').innerText = "PC Venceu!"
        }
    }
}
function limpar() {
    document.getElementById('pc').src = 'img/pc.png'
    document.getElementById('resultado').innerText = ""
}