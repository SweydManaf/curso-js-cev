function contar(){
    var res = document.getElementById('res')
    var inicio = Number(document.getElementById('txtInicio').value)
    var fim = Number(document.getElementById('txtFim').value)
    var passo = Number(document.getElementById('txtPasso').value)


    if (inicio === '' || fim === '' || passo === ''){
        res.innerText = 'Impossivel contar!'
    } else {
        if (passo == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
            res.innerHTML = ''
        for (c = inicio;c <= fim; c += passo){
        res.innerHTML += `${c}, `
    }
        } 
        
    }

}