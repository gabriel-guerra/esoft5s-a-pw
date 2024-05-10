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
    
        const content = document.querySelector('#content');
        const tarefas = JSON.parse(localStorage.getItem('tarefas'))

        tarefas.map((tarefa) => {
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

            div.classList.add("tarefa");
            h2.textContent = tarefa.nome;
            p.textContent = tarefa.descricao;

            div.appendChild(h2)
            div.appendChild(p)

            content.appendChild(div)

        })
    
    })
}

main()