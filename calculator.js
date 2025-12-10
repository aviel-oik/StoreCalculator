function calculateTotalPrice(price, quantity) {
    if (price * quantity < 0)
        return "Invalid"
    else
        return price * quantity
}

console.log(calculateTotalPrice(12, 3))
