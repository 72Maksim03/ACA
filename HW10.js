function Card(id, accNumber, fullName, expDate, pincode, balance) {
  this.id = id
  this.accNumber = accNumber
  this.fullName = fullName
  this.expDate = expDate
  this.pincode = pincode
  this.balance = balance
  this.transfer = function (amount) {
    balance = balance - amount
  }
  this.addBalance = function (amount) {
    balance = balance + amount
  }
  this.changePincode = function (newPincode) {
    this.pincode = newPincode
  }
}
