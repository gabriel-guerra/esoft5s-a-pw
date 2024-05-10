function enviarFormulario(e){
    e.preventDefault()
    
    const dados = new FormData(e.target)
    tarefa = {
        nome: dados.get('nome'),
        descricao: dados.get('descricao')
    }

    if (!localStorage.getItem('tarefas')){

        let tarefas = [];
        tarefas.push(tarefa);

        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }else{

        let tarefas = JSON.parse(localStorage.getItem('tarefas'))
        tarefas.push(tarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefas))

    }

    limparDados()
}

function limparDados(){

    const campoNome = document.querySelector('#nome')
    campoNome.value = "";

    const campoDescricao = document.querySelector('#descricao');
    campoDescricao.value = "";

}

function main(){
    document.addEventListener('DOMContentLoaded', () => {
    
        const main = document.querySelector('main');
        const tarefas = JSON.parse(localStorage.getItem('tarefas'))
        console.log(tarefas)

        tarefas.map((tarefa) => {
            const div = document.createElement('div');
            const h4 = document.createElement('h4');
            const p = document.createElement('p');

            h4.textContent = tarefa.nome;
            p.textContent = tarefa.descricao;

            div.appendChild(h4)
            div.appendChild(p)

            main.appendChild(div)

        })
        
        

    
    })
}

main()