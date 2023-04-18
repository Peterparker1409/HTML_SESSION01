function convert() {
    var fromCurrency = document.getElementById("from-currency").value;
    var toCurrency = document.getElementById("to-currency").value;
    var amount = document.getElementById("amount").value;
  
    // Gọi API để lấy tỷ giá từ fromCurrency sang toCurrency
    // Ví dụ: https://api.exchangerate-api.com/v4/latest/VND
    var exchangeRate = 2.5; // Giả sử tỷ giá là 1:1
  
    var result = amount * exchangeRate;
    document.getElementById("result").innerHTML = amount  + fromCurrency + " = " + result  + toCurrency;
   
  }
  
