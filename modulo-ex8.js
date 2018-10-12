function funcImplementaOperacao(valor1, valor2, func_operacao) {
    // console.log("valor1: ", valor1, "- valor2: ", valor2, "- operacao: ", func_operacao)
    return func_operacao(valor1, valor2)
}

module.exports = {
    funcImpl: funcImplementaOperacao
}