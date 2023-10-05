function getBotResponse(input) {

    if (input == "How do I place an order?") {
        return "Please head to the 'SHOP' section, select your desired product and select 'Buy now', and fill in your details like Address, Phone number, etc.<br>Anything else i can help you with?";
    } else if (input == "What is the refund policy?") {
        return "The total amount will be shipped to you within 2 days after the return is recived.<br>Anything else i can help you with?";
    } else if (input == "How can I create an account") {
        return "Please click on the Sign-Up button to create your account and continue shopping.<br>Anything else i can help you with?";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "Thank you") {
        return "Always happy to help!";
    } else {
        return "Try asking something else!";
    }
}