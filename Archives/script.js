function showFilhos(){
  document.getElementById('qtdDiv').style.display = 'block';
}
function hideFilhos(){
  document.getElementById('qtdDiv').style.display = 'none';
}

// botão CANCELAR/APAGAR
function cancel(){
  if(confirm("Essa ação vai apagar seus dados!")){
    window.location.reload()
    window.scrollTo(0,0)
    localStorage.clear()
  }
}

// botão SALVAR
function save(){
  
  // pegar os valores
  
  var nome = document.getElementById("nome").value
  var sobrenome = document.getElementById("sobrenome").value
  var cpf = document.getElementById("cpf").value
  var dtnasc = document.getElementById("dtnasc").value
  var sexoSelect = document.getElementById("sexo")
  var sexoValue = sexoSelect.options[sexoSelect.selectedIndex].text
  var filhos = document.querySelector('input[name="filhos"]:checked').value;
  if(filhos=="sim"){
    var qtdFilhos = document.getElementById("qtd").value
  }
  var moreInfo = document.getElementById("moreInfo").value
  var cep = document.getElementById("cepID").value
  var cidade = document.getElementById("cidade").value
  var ufSelect = document.getElementById("uf")
  var ufValue = ufSelect.options[ufSelect.selectedIndex].text
  var logr = document.getElementById("logr").value
  var bairro = document.getElementById("bairro").value
  var numC = document.getElementById("numC").value
  var compl = document.getElementById("compl").value
  
  
  // salvar os valroes
  
  localStorage.setItem("nome", nome)
  localStorage.setItem("sobrenome", sobrenome)
  localStorage.setItem("cpf", cpf)
  localStorage.setItem("data_nasc", dtnasc)
  localStorage.setItem("sexo", sexoValue)
  localStorage.setItem("tem_filhos", filhos)
  localStorage.setItem("info", moreInfo)
  localStorage.setItem("cep", cep)
  localStorage.setItem("cidade", cidade)
  localStorage.setItem("uf", ufValue)
  localStorage.setItem("logradouro", logr)
  localStorage.setItem("bairro", bairro)
  localStorage.setItem("num_casa", numC)
  if(compl!=""){
    localStorage.setItem("complemento", compl)
  }else{
    localStorage.setItem("complemento", "")
  }
  if(filhos=="sim"){
    localStorage.setItem("qtd_filhos", qtdFilhos)
  }else{
    localStorage.setItem("qtd_filhos", "")
  }

  
  // mensagem
  
  document.getElementById("msgSave").innerHTML = "Salvo com sucesso!"
  verifySave()
}


// verifica se há valor salvo no localStorage para mostrar o botão de editar
verifySave()
function verifySave(){
  if("cpf" in localStorage){
    document.getElementById('btnEdit').style.display = 'block'
    
  // troca o texto do botão cancelar para 'apagar'
  document.getElementById("cancel").innerHTML = "Apagar"
  } 
}


function edit(){

  // pega os valores salvos no local storage
  
  document.getElementById("nome").value = localStorage.getItem("nome")
  document.getElementById("sobrenome").value = localStorage.getItem("sobrenome")
  document.getElementById("cpf").value = localStorage.getItem("cpf")
  document.getElementById("dtnasc").value = localStorage.getItem("data_nasc")
  
  var sexoSelect = document.getElementById("sexo")
  sexoSelect.options[sexoSelect.selectedIndex].text = localStorage.getItem("sexo")

  document.getElementById("moreInfo").value = localStorage.getItem("info")
  document.getElementById("cepID").value = localStorage.getItem("cep")
  document.getElementById("cidade").value = localStorage.getItem("cidade")

  var ufSelect = document.getElementById("uf")
  ufSelect.options[ufSelect.selectedIndex].text = localStorage.getItem("uf")
  
  document.getElementById("logr").value = localStorage.getItem("logradouro")
  document.getElementById("bairro").value = localStorage.getItem("bairro")
  document.getElementById("numC").value = localStorage.getItem("num_casa")
  document.getElementById("compl").value = localStorage.getItem("complemento")


  // verifica no storage se a pessoa tem filhos ou não para mostrar a quantidade de filhos que ela tem
  if(localStorage.getItem("tem_filhos") == "sim"){ 
    showFilhos()
    var sim = document.getElementById("fiS")
    sim.checked = true
    document.getElementById("qtd").value = localStorage.getItem("qtd_filhos")
  }
  else if(localStorage.getItem("tem_filhos") == "nao"){
    hideFilhos()
    var nao = document.getElementById("fiN")
    nao.checked = true
  }
}
