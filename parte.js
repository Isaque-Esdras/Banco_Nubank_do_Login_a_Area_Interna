class Cadastro{

constructor(){

    this.id = 0
    this.array = []
    this.acao = ''
    
    
}

gerar(){

    let cadastro = this.lerClique()
    console.log(cadastro)

    if (this.seVazio(cadastro) == true) {
        this.adicionarNaArray(cadastro)
    }
    
    this.naTabela()
   
}

lerClique(){

    let cadastro = {}

    cadastro.id = this.id
    cadastro.nome = document.getElementById('nome').value
    cadastro.idade = document.getElementById('idade').value
    cadastro.funcao = document.getElementById('funcao').value
    cadastro.identificacao = document.getElementById('identificacao').value
    cadastro.acao = this.acao

    return cadastro
}


seVazio(cadastro) {
    
    let mensagem = ''

    if (cadastro.nome == 0) {
        mensagem += '- Digite o nome do Colaborador \n'
    }
    if (cadastro.idade == 0) {
        mensagem += '- Digite a idade do Colaborador \n'
    }
    if (cadastro.funcao == 0) {
        mensagem += '- Digite a função do Colaborador \n'
    }
    if (cadastro.identificacao == 0) {
        mensagem += '- Digite o Registro do Funcionário'
    }
    if (mensagem != 0) {
        alert(mensagem)
        return false
    }
        return true
}

adicionarNaArray(cadastro){

    this.array.push(cadastro)
    this.id ++
}

naTabela(){

    let tbody = document.getElementById('tbody')
    tbody.innerText = ''

    for (let i = 0; i < this.array.length; i++) {
        
        let tr = tbody.insertRow()

        let td_id = tr.insertCell()
        let td_nome = tr.insertCell()
        let td_idade = tr.insertCell()
        let td_funcao = tr.insertCell()
        let td_identificacao = tr.insertCell()
        let td_acao = tr.insertCell()


        td_id.innerText = this.array[i].id
        td_nome.innerText = this.array[i].nome
        td_idade.innerText = this.array[i].idade
        td_funcao.innerText = this.array[i].funcao
        td_identificacao.innerText = this.array[i].identificacao
        td_acao.innerText = this.array[i].acao


        let colocarImagem = document.createElement('img')
        colocarImagem.src = './del.png'
        td_acao.appendChild(colocarImagem)

        colocarImagem.setAttribute('onclick', 'cadastro.removerComImagem('+this.array[i].id+')')
        
    }
}

remover = () =>{

        document.getElementById('nome').value = ''
        document.getElementById('idade').value = ''
        document.getElementById('funcao').value = ''
        document.getElementById('identificacao').value = ''
}


removerComImagem(id){

        let tbody = document.getElementById('tbody')

        if (confirm('Deseja mesmo excluir desta lista, este colaborador ?')) {

            for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].id == id) {
                tbody.deleteRow(i)
                this.array.splice(i, 1)
            }
            
            }
        }
       
}




}


let cadastro = new Cadastro