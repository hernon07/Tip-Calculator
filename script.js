const btn = document.getElementById("reset");

const radios = document.querySelectorAll('input[type="radio"]');
const bill = document.getElementById("bill");
const radioCustom = document.getElementById("custom");
const numberPpl = document.getElementById("number-ppl");
const selectTip = document.querySelector(".select-tip");

const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");

btn.addEventListener("click", function () {
  bill.value = "0";
  radioCustom.value = "";
  numberPpl.value = "1";
  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";
  radios.forEach((radio) => (radio.checked = false));
});

function calcTip(bi, tip, nbrppl) {
  return (Number(bi) * Number(tip)) / 100 / Number(nbrppl);
}

function totala(bi, nbrppl) {
  return Number(bi) / Number(nbrppl);
}

let bi = 0;
let tip = 0;
let nbrppl = 1;

bill.addEventListener("input", function () {
  if (bill.value === "") {
    return;
  }

  bi = bill.value;
  console.log(calcTip(bi, tip, nbrppl));

  tipAmount.textContent = calcTip(bi, tip, nbrppl);
  total.textContent = totala(bi, nbrppl) + calcTip(bi, tip, nbrppl);
});

numberPpl.addEventListener("input", function () {
  if (numberPpl.value === "") {
    return;
  }
  nbrppl = numberPpl.value;
  console.log(calcTip(bi, tip, nbrppl));

  tipAmount.textContent = calcTip(bi, tip, nbrppl);
  total.textContent = totala(bi, nbrppl) + calcTip(bi, tip, nbrppl);
});

radioCustom.addEventListener("input", function () {
  if (radioCustom.value === "") {
    return;
  }
  radios.forEach((radio) => (radio.checked = false));
  tip = radioCustom.value;
  console.log(calcTip(bi, tip, nbrppl));

  tipAmount.textContent = calcTip(bi, tip, nbrppl);
  total.textContent = totala(bi, nbrppl) + calcTip(bi, tip, nbrppl);
});

selectTip.addEventListener("click", function (e) {
  if (e.target.tagName === "LABEL") {
    tip = e.target.previousElementSibling.value;

    tipAmount.textContent = calcTip(bi, tip, nbrppl);
    total.textContent = totala(bi, nbrppl) + calcTip(bi, tip, nbrppl);
  }
});
