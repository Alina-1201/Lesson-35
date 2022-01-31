let firstNumber = document.querySelector('#first_number')
let secondNumber = document.querySelector('#second_number')
let result = document.querySelector('.result')
let btnPlus = document.querySelector('.btn_plus')
let btnMinus = document.querySelector('.btn_minus')
let btnMultiply = document.querySelector('.btn_multiply')
let btnDividet = document.querySelector('.btn_dividet')
let btnKv1 = document.querySelector('.btn_kv1')
let btnKv2 = document.querySelector('.btn_kv2')
let btnSqrt1 = document.querySelector('.btn_sqrt1')
let btnSqrt2 = document.querySelector('.btn_sqrt2')

btnPlus.onclick = function(){
    let sum = firstNumber.value*1 + secondNumber.value*1
    result.textContent = sum
}

btnMinus.onclick = function(){
    let minus = firstNumber.value*1 - secondNumber.value*1
    result.textContent = minus
}

btnMultiply.onclick = function(){
    let mul = firstNumber.value*1 * secondNumber.value*1
    result.textContent = mul
}

btnDividet.onclick = function(){
    console.log(secondNumber.value)
    if (secondNumber.value !==0){
        let div = firstNumber.value*1 / secondNumber.value*1
        result.textContent = div
    } else {
        result.textContent = 'Деление на 0 невозможно'
    }

}

btnKv1.onclick = function(){
    let kv1 = firstNumber.value**2
    result.textContent = kv1
}

btnKv2.onclick = function(){
    let kv2 = secondNumber.value**2
    result.textContent = kv2
}

btnSqrt1.onclick = function(){
    let sqrt1 = Math.sqrt(firstNumber.value)
    result.textContent = sqrt1
}

btnSqrt2.onclick = function(){
    let sqrt2 = Math.sqrt(secondNumber.value)
    result.textContent = sqrt2
}