// //            <!--card-1-->
//             <div class=" shadow-xl bg-white w-auto h-[300px] p-5 relative rounded-lg  ">

//                 <img src="./assets/emergency.png" class="mb-5 h-[32px] w-[32px] " alt="">

//                 <div class="absolute top-2 right-5 mt-5">

//                     <i id="heart-for-click" class="fa-regular fa-heart"></i>

//                 </div>

//                 <h1 id="box-h1-bengali" class="text-lg font-bold ">জাতীয় জরুরি সেবা</h1>
//                 <p class="text-gray-500 text-sm">National Emergency</p>
//                 <h1 id="999-police" class="text-2xl font-bold mt-2">999</h1>
//                 <p class="text-gray-600 text-sm mb-6">সার্বজনীন</p>

//                 <div>
//                     <!--copy button-->
//                     <button id="copy-btn" class="border-2 p-2 w-[127px] h-10 rounded-2xl"><span><i
//                                 class="fa-regular fa-copy"></i></span> Copy</button>

//                     <!--call button-->
//                     <button id="call-btn" class="border-2 p-2 w-[127px] h-10 rounded-2xl text-white 
//                          bg-[#006747]">Call</button>

//                 </div>

//             </div>
//             <!--card-1 end-->



//1st card id based js


// //coin
// const coinBox = document.getElementById("coin-count-2")
// let coins = 100;

// coinBox.innerText = coins;


// const callBtn = document.getElementById("call-btn")
// const clearBtn = document.getElementById("clear-btn")
// const historyBox = document.getElementById("history-box")


// callBtn.addEventListener("click", function () {

//         const serviceName = document.getElementById("box-h1-bengali").innerText
//         const serviceNumber = document.getElementById("999-police").innerText


//         //alert

//         alert(`Calling: ${serviceName} ${serviceNumber}`) ;



//     ///coin condition
//     if (coins >= 20) {



//         const currentTime = new Date().toLocaleTimeString();



//         const historyCard = document.createElement("div")
//         historyCard.className = "shadow-md bg-white rounded-lg p-2 mb-3"



//         historyCard.innerHTML = `${serviceName}    ${currentTime} <br>  ${serviceNumber}`



//         historyBox.appendChild(historyCard)

//         coins -= 20;
//     }
//     else {
//         alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
//     }
//     coinBox.innerText = coins;
// })


// //clear btn

// clearBtn.addEventListener("click", function () {
//     historyBox.innerHTML = ""

// })


// //heart btn

// const heartIconButton=document.getElementById("heart-for-click")
// const heartTap=document.getElementById("heart-count-1")

// let heart=0
// heartIconButton.addEventListener("click",function(){
//     heart+=1
//     heartTap.innerText=heart;
// })




// //copy



// const copyBtn =document.getElementById("copy-btn");
// const copyCount=document.getElementById("count-3")
// let copyCountStart=0;

// copyBtn.addEventListener("click",function(){
//     const serviceNumber = document.getElementById("999-police").innerText


//        // Copy text to clipboard
//     navigator.clipboard.writeText(serviceNumber)
//         .then(() => {

//             //count copy

//             copyCountStart +=1;
//             copyCount.innerText=copyCountStart;
//             alert(`নম্বর কপি হয়েছে: ${serviceNumber}`);
//         })

//         .catch(err => {
//             console.error('নম্বর কপি হয়নি: ', err);
//         });
// })





//------------------others card section with quiry selector all


const cards = document.querySelectorAll(".card"); // set all div names in card for select all card with one click

let coins = 100;  //coin button nav section


let heart = 0; //heart button nav section

let copyCount = 0; //copy button nav section


// navbar elements
const coinBox = document.getElementById("coin-count-2"); //count button icon 0  connection

const heartTap = document.getElementById("heart-count-1"); //heart icon 0 span connection

const copyCountBox = document.getElementById("count-3"); //copy button

const historyBox = document.getElementById("history-box"); // history div connection

coinBox.innerText = coins; // coin id 

heartTap.innerText = heart; //heart icon

copyCountBox.innerText = copyCount; //copy icon


//selecting all card with one for each loop

cards.forEach(card => {

    const callBtn = card.querySelector(".call-btn"); //call button selected

    //copy button select
    const copyBtn = card.querySelector(".copy-btn");

    //heart icon
    const heartIcon = card.querySelector(".fa-heart");

    //h1 heading 
    const serviceName = card.querySelector(".service-name");

    //contact number from any card and all
    const serviceNumber = card.querySelector(".service-number");

    //call button connect

    callBtn.addEventListener("click", function () {
        if (coins < 20) {
            alert("আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।"); //alert after coin is less then 20
            return;
        }

        alert(`Calling: ${serviceName.innerText} ${serviceNumber.innerText}`); // h1 tag and number tag selected for the new div,
        //  writing this section in the coins condition because of coins is 1000 to 0

        coins -= 20;
        coinBox.innerText = coins;

        //adding to history
        const currentTime = new Date().toLocaleTimeString(); //time setup

        const historyCard = document.createElement("div"); //new div create



        historyCard.className = "shadow-md bg-white rounded-lg p-2 mb-3"; //div style for history box

        //-----
        
        //--

        historyCard.innerHTML = `${serviceName.innerText}  ${currentTime} <br>  ${serviceNumber.innerText}`;
        historyBox.appendChild(historyCard); //adding the new div to history box

    });

    //copy button from web as per instruction 
    copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(serviceNumber.innerText)
            .then(() => {
                copyCount++; //copy count
                copyCountBox.innerText = copyCount;
                alert(`নম্বর কপি হয়েছে: ${serviceNumber.innerText}`); //alert for click
            });
    });


    //heart icon section

    heartIcon.addEventListener("click", function () {
        heart++; //heart count
        heartTap.innerText = heart;
    });
});

// Clear history button
document.getElementById("clear-btn").addEventListener("click", function () {
    historyBox.innerHTML = ""; //clear everything in the div
});
