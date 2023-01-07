const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const span1 = document.querySelector('#player1');
const span2 = document.querySelector('#player2');
const resetBtn = document.querySelector('#resetBtn');
const winningScoreSelect = document.querySelector("#playto");

const p1Obj = {
    score: 0,
    button: document.querySelector('#p1Btn'),
    display: document.querySelector('#player1')
}

const p2Obj = {
    score: 0,
    button: document.querySelector('#p2Btn'),
    display: document.querySelector('#player2')
}

function updateScores(player, opponent){
    if(!isGameOver)
    {
        player.score++;
        if(player.score === winningScore)
        {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    span1.textContent = 0;
    span2.textContent = 0;
    span1.classList.remove('has-text-success','has-text-danger');
    span2.classList.remove('has-text-success','has-text-danger');
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    p1Obj.score = 0;
}
//Usando o objeto p1
p1Obj.button.addEventListener('click', 
    ()=>{
        updateScores(p1Obj,p2Obj);
        /*
        if(!isGameOver){
            p1Score++;
            if(p1Score === winningScore)
            {
                isGameOver = true;
                span1.classList.add('has-text-success');
                span2.classList.add('has-text-danger');
                p1Btn.disabled = true;
                p2Btn.disabled = true;
            }
            span1.textContent = p1Score;
        }*/
    }
);

p2Btn.addEventListener('click', 
    ()=>{
        if(!isGameOver){
            p2Score++;
            if(p2Score === winningScore)
            {
                isGameOver = true;
                span2.classList.add('has-text-success');
                span1.classList.add('has-text-danger');
                p1Btn.disabled = true;
                p2Btn.disabled = true;
            }
            span2.textContent = p2Score;
        }
    }
);

resetBtn.addEventListener('click',reset);

winningScoreSelect.addEventListener('change',
    ()=>{
        winningScore = parseInt(winningScoreSelect.value);
        reset();
    }
);



