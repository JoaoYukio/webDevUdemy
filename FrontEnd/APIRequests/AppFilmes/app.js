const myForm = document.querySelector('#searchForm')
const myDiv = document.querySelector('#movies')

function makeImages(shows) {
    for(let imgs of shows)
    {
        if(imgs.show.image){
            const img = document.createElement('img');
            img.src = imgs.show.image.medium;
            myDiv.appendChild(img)
        }
    }
}  

myForm.addEventListener('submit',
    async (e)=>{
        e.preventDefault();
        myDiv.innerHTML = '';
        const searchValue=myForm.elements.query.value;
        const config = {params: {q: searchValue}}
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
        makeImages(res.data)
        myForm.elements.query.value = '';
    }
)