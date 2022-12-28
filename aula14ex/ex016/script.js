function contar(){
    let res = document.getElementById('res')
    let inicio = document.getElementById('txtInicio').value
    let fim = document.getElementById('txtFim').value
    let passo = document.getElementById('txtPasso').value


    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i <= f) {
            for (let c = i;c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        } else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }

}