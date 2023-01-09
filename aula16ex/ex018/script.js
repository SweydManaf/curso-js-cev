let valores = []
let res = document.getElementById('res')
let num = document.getElementById('txtNum')
let tab = document.getElementById('seltab')

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor adicionado ${num.value}`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function mostrar(){
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else{
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior()}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor()}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma()}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media().toFixed(1)}.</p>`
    }
}

function maior(){
    i = valores[0]
    for (pos in valores){
        if (valores[pos] > i){
            i = valores[pos]
        }
    }
    return i
}

function menor(){
    i = valores[0]
    for (pos in valores){
        if (valores[pos] < i) {
            i = valores[pos]
        }
    }
    return i
}

function soma(){
    soma = 0 
    for (pos in valores){
        soma += valores[pos]
    }
    return soma
}

function media(){
    return Number(soma() / valores.length)
}