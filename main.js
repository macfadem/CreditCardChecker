validateCreditCard = (cardNumber) => {
    cardNumber = cardNumber.replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);
        if (shouldDouble) {
            if ((digit *= 2) > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
};

const cardNumberInput = document.getElementById('cardNumber');
const submitBtn = document.getElementById('submitBtn');
  
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const cardNumber = cardNumberInput.value;
    const isValid = validateCreditCard(cardNumber);
    
    if (isValid) {
      alert('Credit card is valid!');
    } else {
      alert('Invalid credit card number');
    }
});