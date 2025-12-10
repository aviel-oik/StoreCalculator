function calculateTotalPrice(price, quantity) {
    if (price * quantity < 0)
        return "Invalid"
    else
        return price * quantity
}

