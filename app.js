let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const genCompChoices = () =>{
    const options = ["Rock", "paper", "Scissor"]
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx]

}

const palygame = (userchoice) => {
    console.log("userchoice =", userchoice);
    // const compChoice = genCompChoices();
    console.log("compChoice =", compChoice);
}

choices.forEach(choice => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        console.log("choice was clicked", choiceid);
        // console.log("choice was clicked", userchoice);
        palygame(userchoice);
    })
});