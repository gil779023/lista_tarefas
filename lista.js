const frm = document.querySelector("form")      // obtém elementos da página
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
  e.preventDefault()                            // evita envio do form

  const tarefa = frm.inTarefa.value             // obtém o conteúdo digitado

  const h3 = document.createElement("h3")       // cria o elemento HTML h5
  const texto = document.createTextNode(tarefa) // cria um texto
  h3.appendChild(texto)                         // define que texto será filho de h5
  dvQuadro.appendChild(h3)                      // e que h5 será filho de divQuadro

  frm.inTarefa.value = ""                       // limpa o campo de edição
  frm.inTarefa.focus()                          // joga o cursor neste campo
})

frm.btSelecionar.addEventListener("click", () => { 
  const tarefas = document.querySelectorAll("h3")     // cria um click na variavel

  if (tarefas.length == 0) {
    alert("Não há tarefas para selecionar")           // compara se variavel igual a zero
    return                                        
  }

  let aux = -1                   // variavel q define variavel menos um

 
  for (let i = 0; i < tarefas.length; i++) {           // for para percorrer elementos 
  
    if (tarefas[i].className == "tarefa-selecionada") { // define posicao com tarefa selecionado
      tarefas[i].className = "tarefa-normal"            // define posicao com tarefa-normal
      aux = i                                     
      break                                             // variavel q recebe posicao
    }
  }

  
  if (aux == tarefas.length - 1) {                      // se posicao == tamanho da tarefas 

    aux = -1                                            // variavel decrementa em 1
  }

  tarefas[aux + 1].className = "tarefa-selecionada" 
})

frm.btRetirar.addEventListener("click", () => {         // evento retirar ao clickar
  const tarefas = document.querySelectorAll("h3") 

  let aux = -1               

  
  tarefas.forEach((tarefa, i) => {
    if (tarefa.className == "tarefa-selecionada") {  // referencia tarefas  com a classe para dar retorno no pop-up
      aux = i
      console.log(i)                                   
    }
  })

  if (aux == -1) {             
    alert("Selecione uma tarefa para removê-la...")          //condicao para remover em 1 caso se aplique
    return
  }

  if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
    dvQuadro.removeChild(tarefas[aux])        
  }
})

frm.btGravar.addEventListener("click", () => { 
  const tarefas = document.querySelectorAll("h3")    // evento clique para o botao tarefas gravar

  if (tarefas.length == 0) {
    alert("Não há tarefas para serem salvas")      // se nao tem tarefas retorna mensagem
    return                                         
  }

  let dados = ""                            
  tarefas.forEach(tarefa => { 
    dados += tarefa.innerText + ";"         
  })

  
  localStorage.setItem("tarefasDia", dados.slice(0, -1))

  
  if (localStorage.getItem("tarefasDia")) {
    alert("Ok! Tarefas Salvas")
  }
})

window.addEventListener("load", () => { 
  
  if (localStorage.getItem("tarefasDia")) {
    
    const dados = localStorage.getItem("tarefasDia").split(";")

    // percorre os dados armazenados em localStorage
    dados.forEach(dado => {
      const h3 = document.createElement("h3")      
      const texto = document.createTextNode(dado)  
      h3.appendChild(texto)                      
      dvQuadro.appendChild(h3)                   
    })
  }
})


frm.btGral.addEventListener("click", () => { 
  const tarefas = document.querySelectorAll("h3")  // a intencao e criar um elemento onde separe as tarefas feitas das q estao para fazer

  if (tarefas.length == 0) {
    alert("Não há tarefas feitas")      
    return                                         
  }

  let dados = ""                            
  tarefas.forEach(tarefa => { 
    dados += tarefa.innerText + ";"         
  })

  
  localStorage.setItem("tarefasDia", dados.slice(0, -1))

  
  if (localStorage.getItem("tarefasDia")) {
    alert("Ok! Tarefas Concuidas")
  }
})

function mostrar_feitas()
{
  if (tarefas => 1)
  localStorage.setItem("tarefasDia", dados.slice(0, -1))
  return
}
