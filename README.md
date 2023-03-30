# Credit Card Checker

A simple webpage to check if a credit card number is valid or not.

## Usage

1. Enter your credit card number into the input field.
2. Click the "Submit" button to check if the card number is valid.

## How to Run Locally

1. Clone this repository.
2. Open the `index.html` file in your web browser.

## How it Works

This webpage uses JavaScript to validate the credit card number using the Luhn algorithm.

```javascript
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
```

## Technologies Used

- HTML
- CSS
- JavaScript


