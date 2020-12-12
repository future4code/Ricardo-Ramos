let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    const camposDespesas = (despesas) => {
        divDespesas.innerHTML += `<p>Valor: R$ ${despesas.valor} - Tipo: ${despesas.tipo} - Descrição: ${despesas.descricao}</p>`
    }
    despesas.map(camposDespesas)
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    arrDespesas.forEach((tipoExtrato) => {
        switch(tipoExtrato.tipo) {
            case "alimentação":
                gastoAlimentacao += tipoExtrato.valor
                break;
            case "utilidades":
                gastoUtilidades += tipoExtrato.valor
                break;
            case "viagem":
                gastoViagem += tipoExtrato.valor
                break;
        }

        gastoTotal += tipoExtrato.valor
    })

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("Faltou algum valor ou algum valor é um número negativo")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    // DESAFIO 1
    if(tipoFiltro == "" && valorMin == "" && valorMax == "") {
        alert("Não deixe campos vazios!")
    } else if(tipoFiltro === tipoFiltro.value && valorMin === 0 || valorMax === 0) {
        alert("Preencha todos os valores antes de filtrar!")
    } else if(valorMin < 0 || valorMax < 0) {
        alert("Não é possível filtrar números negativos!")
    } else if(valorMin >= valorMax) {
        alert("Valor mínimo não pode ser igual ou maior do que o valor máximo!")
    }

    let condicionaisFiltros = (filtros) => {

        if(tipoFiltro === "todos") {
            if(valorMin > 0 && valorMax >= 0) {
                if(valorMin <= filtros.valor && valorMax >= filtros.valor) {
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        } else if(filtros.tipo === tipoFiltro) {
            if(valorMin > 0 && valorMax >= 0) {
                if(valorMin <= filtros.valor && valorMax >= filtros.valor) {
                    return true
                } else {
                    return false
                }
            } else {
                return true
            }
        } else {
            return false
        }
    }

    let despesasFiltradas = arrDespesas.filter(condicionaisFiltros) // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO

    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}