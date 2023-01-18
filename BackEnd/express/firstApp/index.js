const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("New request");
//     res.send('<h1> Hello world </h1>');
// });

app.get('/', (req, res) => {
    res.send('<h1> Hello world, i am the home page</h1>');
});

const myRes = (req, res) => {
    console.log(req.params);
    res.send(`<h1> Subclass ${req.params.subclass}</h1>`);
}
app.get('/r/:subclass', myRes);

app.get('/r/:subclass/:sort', (req, res) => {
    const { subclass, sort } = req.params;
    res.send(`<div> Subclass <b>${subclass}</b> sorting type <b>${sort}</b></div>`);
});

app.get('/search', (req, res) => {
    console.log(req.query);
    const { q } = req.query;
    res.send(`<div>Search term <b>${q}</b>`);
});

app.get('/cats', (req, res) => {
    console.log("Cat Request");
    res.send("Meow");
});
app.post('/cats', (req, res) => {
    res.send("Post request on cats!");
})

app.get('/dog', (req, res) => {
    res.send("Au au");
});

app.get('*', (req, res) => {
    res.send("Nao conheco esse caminho");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});