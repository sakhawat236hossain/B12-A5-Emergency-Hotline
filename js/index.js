// funtion getElementById
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// heard-btns section

let heardNumber = getInnerText("heard-amount");

const heardBtns = document.getElementsByClassName("heart-btn");

//  click heard heardBtns

for (let i = 0; i < heardBtns.length; i++) {
  heardBtns[i].addEventListener("click", function () {
    let totleHeardNumber = heardNumber++;
    document.getElementById("heard-amount").innerText = totleHeardNumber;
  });
}

// call button sectio
let coinNumber = 100;
const coinElement = document.getElementById("coin-amount");
coinElement.innerText = coinNumber;

const callBtns = document.getElementsByClassName("call-btn");
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    let cardParent = callBtn.parentNode.parentNode;

    const cardTitle = cardParent.querySelector(".card-title").innerText;
    const cardNumber = cardParent.querySelector(".card-number").innerText;
    if (coinNumber >= 20) {
      alert(`${cardTitle}\n${cardNumber}`);
      coinNumber -= 20;
      coinElement.innerText = coinNumber;
    } else {
      alert(
        "You don't have enough coins. You need at least 20 coins to make a call."
      );
    }
    const historyContainar = document.getElementById("add-history");
    const newHeistory = document.createElement("div");
    const newdate = new Date();
    const time = newdate.toLocaleString();

    newHeistory.innerHTML = `
      <div class="mt-4 bg-amber-50">
             <div class="flex justify-between items-center">
             <div>
              <h1 class="font-bold">${cardTitle}</h1>
              <p class="font-bold">${cardNumber}</p>
             </div>
              <p>${time}</p>
            </div>
         </div>
    `;
    historyContainar.append(newHeistory);
  });
}

// copy button section

const copyBtns = document.getElementsByClassName("copy-btn");
let copyAmountElement = document.getElementById("copy-amount");
let copuCount = 0;
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    let cardParent = copyBtn.parentNode.parentNode;
    const cardNumber = cardParent.querySelector(".card-number").innerText;
    navigator.clipboard.writeText(cardNumber);
    copuCount++;
    copyAmountElement.innerText = copuCount;
    
  });
}
