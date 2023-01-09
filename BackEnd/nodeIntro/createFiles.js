const fs = require('fs')
/*
fs.mkdir('D:/Mestrado Unifei/cursoWebDev/webDevUdemy/BackEnd/nodeIntro/dogs', {recursive: true}, (err)=>{
    if(err)throw err;//So roda caso consiga criar
});
*/

const arg = process.argv[2]
console.log(arg)

fs.mkdirSync(arg);

fs.writeFileSync("Teste/index.html")
fs.writeFileSync("Teste/index.css")
fs.writeFileSync("Teste/index.js")

