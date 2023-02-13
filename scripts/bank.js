// Basic Bank

document.getElementById('deposit-btn').addEventListener('click', function () {
  let getNetDeposit = document.getElementById('net-deposit')
  let netDepositString = getNetDeposit.innerText
  let netDeposit = parseFloat(netDepositString)

  let getDepositField = document.getElementById('deposit-field')
  let depositAmountString = getDepositField.value
  let depositAmount = parseFloat(depositAmountString)

  let getNetBalance = document.getElementById('net-balance')
  let netBalanceString = getNetBalance.innerText
  let netBalance = parseFloat(netBalanceString)

  getNetDeposit.innerText = netDeposit + depositAmount

  getNetBalance.innerText = netBalance + depositAmount;

  getDepositField.value = ''
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
  let getNetWithdraw = document.getElementById('net-withdraw')
  let netWithdrawString = getNetWithdraw.innerText
  let netWithdraw = parseFloat(netWithdrawString)

  let getWithdrawField = document.getElementById('withdraw-field')
  let withdrawAmountString = getWithdrawField.value
  let withdrawAmount = parseFloat(withdrawAmountString)

  let getNetBalance = document.getElementById('net-balance')
  let netBalanceString = getNetBalance.innerText
  let netBalance = parseFloat(netBalanceString)



  if(netBalance >= withdrawAmount){
    getNetBalance.innerText = netBalance - withdrawAmount;

    getNetWithdraw.innerText = netWithdraw + withdrawAmount
  }
  else{
    alert("Not Enough Balance! Please Desposit")
  }

  getWithdrawField.value = ''
})
