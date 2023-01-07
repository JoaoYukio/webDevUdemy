const myList = document.querySelector('#Lista')
const myBtn = document.querySelector('#Botao')

const config = {headers:{Accept:'application/json'}};

async function getPiada()
{
    try {
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res;
    } catch (error) {
        console.log(error)
        return null;
    }
}

async function putPiada()
{
    const piada = await getPiada(); // espera ate que seja feita
    const newItem = document.createElement('li');
    newItem.append(piada.data.joke);
    myList.append(newItem)
}

myBtn.addEventListener('click',
    ()=>putPiada()
)
