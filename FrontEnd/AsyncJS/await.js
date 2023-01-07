function delayedColorChange(color, delay)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

delayedColorChange('red',1000)
    .then( ()=>delayedColorChange('orange',1000))
    .then(()=>delayedColorChange('blue',1000))

async function rainbow(){
    await delayedColorChange('red',100)//Vai parecer sequencial
    await delayedColorChange('orange',100)
    await delayedColorChange('yellow',100)
    await delayedColorChange('green',100)
    await delayedColorChange('blue',100)
    await delayedColorChange('green',100)
    await delayedColorChange('wellow',100)
    await delayedColorChange('orange',100)
    await delayedColorChange('red',100)
    return 'Tudo ok'
}

//rainbow().then((ret)=>{console.log(ret)}) 

