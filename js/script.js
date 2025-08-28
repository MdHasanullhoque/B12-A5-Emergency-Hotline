//coin
const coinBox = document.getElementById("coin-count-2")
let coins = 100;

coinBox.innerText = coins;








const callBtn = document.getElementById("call-btn")
const clearBtn = document.getElementById("clear-btn")
const historyBox = document.getElementById("history-box")


callBtn.addEventListener("click", function () {

        const serviceName = document.getElementById("box-h1-bengali").innerText
        const serviceNumber = document.getElementById("999-police").innerText


        //alert

        alert(`Calling: ${serviceName} ${serviceNumber}`) ;



    ///coin condition
    if (coins >= 20) {



        const currentTime = new Date().toLocaleTimeString();



        const historyCard = document.createElement("div")
        historyCard.className = "shadow-md bg-white rounded-lg p-2 mb-3"



        historyCard.innerHTML = `${serviceName}    ${currentTime} <br>  ${serviceNumber}`



        historyBox.appendChild(historyCard)

        coins -= 20;
    }
    else {
        alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
    }
    coinBox.innerText = coins;
})




clearBtn.addEventListener("click", function () {
    historyBox.innerHTML = ""

})

const heartIconButton=document.getElementById("heart-for-click")
const heartTap=document.getElementById("heart-count-1")

let heart=0
heartIconButton.addEventListener("click",function(){
    heart+=1
    heartTap.innerText=heart;
})




//copy


 
const copyBtn =document.getElementById("copy-btn");
const copyCount=document.getElementById("count-3")
let copyCountStart=0;

copyBtn.addEventListener("click",function(){
    const serviceNumber = document.getElementById("999-police").innerText


       // Copy text to clipboard
    navigator.clipboard.writeText(serviceNumber)
        .then(() => {

            //count copy

            copyCountStart +=1;
            copyCount.innerText=copyCountStart;
            alert(`নম্বর কপি হয়েছে: ${serviceNumber}`);
        })

        .catch(err => {
            console.error('নম্বর কপি হয়নি: ', err);
        });
})