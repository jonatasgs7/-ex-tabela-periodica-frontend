function modal(){
    const bloco = document.querySelectorAll('.bloco')
    const titulo = document.querySelectorAll('.titulo-elemento')
    const curiosidade = document.querySelectorAll('.curiosidade p')
    const modal = document.querySelector('#modal')
    const modalTitulo = document.querySelector('.modal-titulo')
    const modalCuriosidade = document.querySelector('.modal-curiosidade')
    const botaoFechar = document.querySelector('.modal-fechar')
    const overlay = document.querySelector('.modal-overlay')
    

    bloco.forEach(function(blocoItem, i){

        if(curiosidade[i].innerHTML != "") {

            blocoItem.onclick = () => {
                modal.classList.add("modal-aberto")
                
                modalTitulo.innerHTML = titulo[i].innerHTML
                modalCuriosidade.innerHTML = curiosidade[i].innerHTML
            }

        }
        
        botaoFechar.onclick = () => {
            modal.classList.remove("modal-aberto")
        }

        overlay.onclick = () => {
            modal.classList.remove("modal-aberto")
        }
        
    })

}
window.onload = modal()

// Alternador de cor de fundo
function alternador(){
    const alternador = document.querySelector('.alternador-fundo')
    const alternadorLabel = document.querySelector('.alternador label')
    const fundo = document.querySelector('body')

    alternador.onchange = () => {
        fundo.classList.toggle('fundo-escuro')

        if(alternadorLabel.innerHTML == ' Fundo escuro'){
            alternadorLabel.innerHTML = ' Fundo branco'
        } else {
            alternadorLabel.innerHTML = ' Fundo escuro'
        }

    } 

}
window.onload = alternador()