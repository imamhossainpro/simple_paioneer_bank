//login button event holder

const loginButton = document.getElementById("login");
loginButton.addEventListener('click', function () {
   const loginArea = document.getElementById('login-area');
   loginArea.style.display = "none";
   const transectionsArea = document.getElementById('transection-area');
   transectionsArea.style.display = "block";
});
//Deposit button event Holder

const depositButton = document.getElementById("addDeposit");
depositButton.addEventListener('click', function () {
   const depositNumber = getInputNumber("depositAmount")

   updateSpanText("currentDeposit", depositNumber);
   updateSpanText("currentBalance", depositNumber);

   document.getElementById("depositAmount").value = "";
})
//withdraw button event Holder

const withdrawButton = document.getElementById("addWithdraw");
withdrawButton.addEventListener('click', function () {
   const withdrawNumber = getInputNumber("withdrawAmount");
   console.log(withdrawNumber);

   updateSpanText("currentWithdraw", withdrawNumber);
   updateSpanText("currentBalance", -1 * withdrawNumber);
   document.getElementById("withdrawAmount").value = "";
})


function getInputNumber(id) {
   const amount = document.getElementById(id).value;
   const amountNumber = parseFloat(amount);
   return amountNumber;
}

function updateSpanText(id, depositNumber) {
   const current = document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   const totalAmount = depositNumber + currentNumber;
   document.getElementById(id).innerText = totalAmount;
}