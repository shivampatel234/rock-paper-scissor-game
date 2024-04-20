let userScore= 0;
let compScore = 0;

const choices = document.querySelectorAll(".choich");
const ScoreUser = document.querySelector("#user-score");
const Scorecomp = document.querySelector("#comp-score");
const massage = document.querySelector("#msg");


const genComChoice = () =>{
        const options = ['rock','paper','scissor'];
        const idx = Math.floor(Math.random()*3);
        return options[idx];
}

const playgame = (userchoice) =>{
        const userwin = userchoice;
        const computerwin = genComChoice();
        if(computerwin === userwin ){
                massage.innerText ="Match was Draw play Again !!!"
                massage.style.backgroundColor = "#081b31";
        }
      
        else if(userwin  =="rock" && computerwin =="scissor" ){
                massage.innerText = `You win Your ${userwin} beats ${computerwin}`;
                massage.style.backgroundColor = "green";
                userScore++;
                ScoreUser.innerText = userScore;

                }
        else if(userwin  =="paper" && computerwin =="rock" ){
                massage.innerText = `You win Your ${userwin} beats ${computerwin}`;
                massage.style.backgroundColor = "green";
                userScore++;
                ScoreUser.innerText = userScore;
                }
        else if(userwin  =="scissor" && computerwin =="paper" ){
                massage.innerText = `You win Your ${userwin} beats ${computerwin}`;
                massage.style.backgroundColor = "green";
                userScore++;
                ScoreUser.innerText = userScore;
                }
        else{
                massage.innerText = `You Loss ${computerwin} beats Your ${userwin}`;
                massage.style.backgroundColor = "red";
                compScore ++;
                Scorecomp.innerText = compScore ;
                }
        }




choices.forEach((choich) =>{
        choich.addEventListener("click",()=>{
                const userchoice = choich.getAttribute("id")
                playgame(userchoice)
        })
})
