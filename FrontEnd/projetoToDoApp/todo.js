let input = prompt("Digite o que deseja fazer: ");
let todos =  ['Limpar Casa', 'Jogar lixo'];
while(input!=='Quit')
{
    input = prompt("Digite o que deseja fazer: ");
    if(input === 'List')
    {
        console.log('********************');
        for(let i = 0; i<todos.length; i++)
        {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('********************');
    }else if(input === 'New'){
        const newTodo = prompt('Qual a tarefa?');
        todos.push(newTodo);
    }else if(input === 'Delete')
    {
        let index = parseInt(prompt("Qual o indice que gostaria de deletar?"));
        if(isNaN(index)){
            console.log("Indice invalido NaN");
        }else if(index < 0 || index > todos.length)
        {
            console.log("Indice invalido");
        }else{
            todos.splice(index, 1);
        }
    }
}