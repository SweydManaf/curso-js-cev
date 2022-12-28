function calcular(){
    let res = document.getElementById('res')
    let txtNum = document.getElementById('txtNum').value
    let tab = document.getElementById('seltab')

    if (txtNum.length == 0){
        alert('Por favor, digite um número!')
    } else{
        let n = Number(txtNum)
        tab.innerHTML = ''

        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }
    }
}