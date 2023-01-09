const figlet = require('figlet')
const colors = require('colors')


figlet('Hello World!!', function(err, data) {// Callback, essa funcao eh passada para funcao figlet e a figlet executa ela com os parametros internos
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)//So retorna aqui, caso nao tenha err
});