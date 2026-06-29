let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user");
const compscorepara=document.querySelector("#comp");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame=()=>{
   
    msg.innerText="Game Was Draw. Play Again!!";
    msg.style.backgroundColor="#081b31"
    
}

const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;

       
        msg.innerText=`You Win!!`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
compscorepara.innerText=compscore;
       
        msg.innerText=`You Lose...`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice= gencompchoice();
    console.log("comp choice=",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper" ? false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"? false:true;
        }else{
           userwin= compchoice==="rock"? false:true;
        }
        showwinner(userwin);
    }
};
choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
        playgame(userchoice);


    });
});

