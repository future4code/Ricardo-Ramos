function adicionarTarefa() {
    let digitarTarefa = document.getElementById("tarefa")
    let diaDaSemana = document.getElementById("dias-semana")
    let horaDoDia = document.getElementById("horas")
    let minutos = document.getElementById("minutos")

    if(digitarTarefa.value !== "") {
        let tarefaARealizar = document.getElementById(diaDaSemana.value)
        tarefaARealizar.innerHTML += `<li onclick="riscarTarefa(this)">${digitarTarefa.value} às ${horaDoDia.value}${minutos.value}</li>`
    
        digitarTarefa.value = ""
        } else {
            alert("Digite uma tarefa para incluir em um dos dias da semana!")
        }
}

let riscarTarefa = (tarefaARealizar) => {
    tarefaARealizar.style.textDecoration = "line-through"
}

let semanaArray = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]

let limparTudo = () => {
    if(confirm("Quer mesmo zerar a lista de tarefas da semana?")) {
        let confirmarLimpeza
        for(let i=0; i < semanaArray.length; i++) {
            confirmarLimpeza = document.getElementById(`${semanaArray[i]}`)
            confirmarLimpeza.innerHTML = ""
        }
    }
}