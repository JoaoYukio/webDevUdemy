function makeColor(r,g,b)
{
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        const {r,g,b} = this;
        console.log(`rgb(${r}, ${g}, ${b})`) 
    }
    color.hex = function(){
        const {r,g,b} = this;
        console.log('#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1));
    }
    return color;
}

// Usando construtor
function Color(r,g,b)
{
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.rgb = ()=>{
    const {r,g,b} = this;
    console.log(`rgb(${r}, ${g}, ${b})`) 
}
Color.prototype.hex = ()=>{
    const {r,g,b} = this;
    console.log('#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1));
}
Color.prototype.rgba = function(a=1.0){
    const {r,g,b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`
}
// Usando Classe

class Color{
    constructor(r,g,b,name)
    {
        this.r = r;//Cria um parametro r
        this.g = g;
        this.b = b;
        this.colorName = name;
    }
    //Criando metodos
    rgb()
    {
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    hex()
    {
        const {r,g,b} = this;
        return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
    }
}