

const input = document.querySelector('#cantidad_deposito')
const boton_deposito = document.querySelector('#boton_deposito')
const boton_retiro = document.querySelector('#boton_retiro')
const dineroCuenta = document.querySelector('#notificacion')

console.log({
    input,
    boton_deposito,
    dineroCuenta
})

const cuentaPersonal = {
    saldo: 0,
    nombre:"paola"
    cuenta: "123456"
    password: "789456"
}





//eventos del usuario
boton_deposito.addEventListener('click', function(e)){
    console.log(e)

    //tomar la cantidad que el usuario quiere depositar
    const deposito = input.value
    //convertir la cantidad a numero
    
    const numberDeposito = +deposito //es como usar el parseInt(deposito)
    // sie ne lhtml ya esta de typo número, no hay necesidad  de convertirlo aca en número
    console.log(typeof numberDeposito)
    //saber cuanto dinero tiene en su cuenta
    const saldo = cuantaPersonal.saldo
    //sumarlo con el deposito
    const resultado = saldo + deposito
    //mostrar en el elemento
    //tag de cantida dque el usuario tiene en su cuenta
    dineroCuenta.innerText = resultado
    // actualizar el saldo
    cuentaPersonal.saldo = resultado
}

boton_retiro.addEventListener('click', function()){
    console.log()

    //tomar la cantidad que el usuario quiere depositar
    const deposito = input.value
    //convertir la cantidad a numero
    
    const numberDeposito = +deposito //es como usar el parseInt(deposito)
    // sie ne lhtml ya esta de typo número, no hay necesidad  de convertirlo aca en número
    console.log(typeof numberDeposito)
    //saber cuanto dinero tiene en su cuenta
    const saldo = cuantaPersonal.saldo
    //sumarlo con el deposito
    const resultado = saldo - deposito
    //mostrar en el elemento
    //tag de cantida dque el usuario tiene en su cuenta
    dineroCuenta.innerText = resultado
    // actualizar el saldo
    cuentaPersonal.saldo = resultado


}
