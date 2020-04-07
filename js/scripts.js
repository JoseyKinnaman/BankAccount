// BankAccount Business Logic
function BankAccount(name, initialBalance) {
  this.name = name
  this.balance = initialBalance
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
}

BankAccount.prototype.withdrawal = function (amount) {
  this.balance -= amount;
}

// User Interface Logic

$(document).ready(function () {
  var myAccount = {};
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var initialAmount = parseInt($("input#initial-desposit").val());
    var name = $('#name').val();
    myAccount = new BankAccount(name, initialAmount);
    $("#formOne").slideToggle('.no-show');
    $('#newBalance').slideToggle('.no-show')
    $('#actions').slideToggle('.no-show')
    $('#newBalance').html(`
    <h2> Hi ${myAccount.name}</h2>
    <h3 id='balance'> Balance: $${myAccount.balance}</h3>
    `)
  })
  $('#widthdraw-form').submit(function (event) {
    event.preventDefault();
    var amount = parseInt($('#widthdraw').val());
    if (myAccount.balance - amount >= 0) {
      myAccount.withdrawal(amount);
    } else {
      alert("You dont have the money for that numbnuts")
    }
    $("#balance").text(`Balance: $${myAccount.balance}`)
  })
  $('#deposit-form').submit(function (event) {
    event.preventDefault();
    var amount = parseInt($('#deposit').val());
    myAccount.deposit(amount);
    $("#balance").text(`Balance: $${myAccount.balance}`)
  });
});