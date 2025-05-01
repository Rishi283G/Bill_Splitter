const myBill = document.querySelector(`#bill`);
const numberOfPeople = document.querySelector(`#numberOfPeople`);
const customTip = document.querySelector(`#CustomTip`);
const tipAmount = document.querySelector(`#tipAmount`);
const totalAmount = document.querySelector(`#totalAmount`);
const personalBill = document.querySelector(`#personalBill`);
const generateBill = document.querySelector(`#generate-bill`);
const tipContainer = document.querySelector(`.tip-container`);
const disabled = document.querySelector(`.disabled`);
let tipPercent = 0;
const reset = document.querySelector(`.reset-btn`);

generateBill.addEventListener(`click`, () => {
  const billAmount = parseInt(myBill.value);
  const countOfPeople = parseInt(numberOfPeople.value);
  const totalBill = billAmount * ((100 + tipPercent) / 100);
  const eachPersonBill = totalBill / countOfPeople;

  totalAmount.innerText = `₹${totalBill}`;
  personalBill.textContent = `₹${eachPersonBill}`;
  tipAmount.textContent = billAmount * (tipPercent / 100);
  reset.disabled = false;

  if ((myBill.textContent = ``)) {
    prompt(`Please enter a valid Number`);
  }
});
if ((myBill.textContent = `` || NaN)) {
  prompt(`Please enter a valid Number`);
}

tipContainer.addEventListener("click", (e) => {
  if (e.target !== tipContainer) {
    [...tipContainer.children].forEach((tip) => {
      tip.classList.remove(`selected`);
    });
    console.log(e.target.classList.add(`selected`));
    tipPercent = parseInt(e.target.innerText);
    customTip.value = "";
  }
  numberOfPeople.addEventListener(`input`, () => {
    if (numberOfPeople & tipPercent.valueOf) {
      generateBill.disabled = false;
    } else {
      generateBill.disabled = true;
    }
  });
  if (tipPercent && numberOfPeople.value) {
    generateBill.disabled = false;
  } else {
    generateBill.disabled = true;
  }
});

customTip.addEventListener("input", () => {
  tipPercent = parseInt(customTip.value);
  [...tipContainer.children].forEach((tip) => {
    tip.classList.remove(`selected`);
    if (tipPercent && numberOfPeople.value) {
      generateBill.disabled = false;
    } else {
      generateBill.disabled = true;
    }
  });

  numberOfPeople.addEventListener(`input`, () => {
    if (tipPercent && numberOfPeople.value) {
      generateBill.disabled = false;
    } else {
      generateBill.disabled = true;
    }
  });
});

myBill.addEventListener(`input`, () => {
  if (myBill.value) {
    customTip.disabled = false;
    numberOfPeople.disabled = false;
    tipContainer.classList.remove(`disabled`);
  } else {
    customTip.disabled = true;
    numberOfPeople.disabled = true;
    tipContainer.classList.add(`disabled`);
    [...tipContainer.children].forEach((tip) => {
      tip.classList.remove(`selected`);
    });
  }
});

reset.addEventListener(`click`, () => {
  tipPercent = 0;
  tipAmount.value = ``;
  tipAmount.textContent = ``;
  totalAmount.value = ``;
  totalAmount.innerText = ``;
  personalBill.innerText = ``;
  numberOfPeople.value = ``;
  customTip.value = ``;
  myBill.value = ``;
  generateBill.disabled = true;
  [...tipContainer.children].forEach((tip) => {
    tip.classList.remove(`selected`);
  });
  tipContainer.classList.add(`disabled`);
  reset.disabled = true;
});
