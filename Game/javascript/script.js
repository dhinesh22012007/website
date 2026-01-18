var input=document.getElementById("input")
var btn=document.getElementById("btn")
var para=document.getElementById("para")
var sc=document.getElementById("sc")

const winsound=document.getElementById("winsound")
const losesound=document.getElementById("losesound")
const muteBtn = document.getElementById("muteBtn");
var isMuted = false;


var rn=Math.floor(Math.random()*10)+1
var tsc=3;

function check()
{
    var guess=Number(input.value)

    if(!guess || guess < 1 || guess > 10)
    {
        para.textContent = "Enter a number between 1 and 10!";
        input.value=" "
        return;
    }
    if(guess==rn)
    {
        para.textContent = "🎉 You are Right!";
        winsound.currentTime=0;
         winsound.play();
        alert("🎉👑Congratulation You Win!");
        resetGame();
    }
    else{
        tsc--;
        sc.textContent="life: "+tsc
        para.textContent="❌ Wrong guess! Try again."

    }
    if (tsc === 0) {
        losesound.currentTime=0;
        losesound.play();
        alert("😔Game Over! The correct number was: " + rn);
        resetGame();
    }

    input.value=" "
    input.focus()
}
function resetGame()
{
    rn=Math.floor(Math.random()*10)+1
    tsc=3
    sc.textContent="Life: "+tsc
    para.textContent="Start guessing..."
}

input.addEventListener("keyup",function(event){
    if(event.key=="Enter")
        check();
})
input.focus();

muteBtn.addEventListener("click", function () {
    isMuted = !isMuted;

    winsound.muted = isMuted;
    losesound.muted = isMuted;

    muteBtn.textContent = isMuted ? "🔇 Sound OFF" : "🔊 Sound ON";
});
