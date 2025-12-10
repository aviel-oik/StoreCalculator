function applyDiscount(total, discountPercent) {
    if (discountPercent > 100 || discountPercent < 0) {
        console.log("Discount not applied.\n Discount must be between 0 and 100 percent only.");
    }

    if (total < 0) {
        return "Invalid"
    } else {
        const finalTotal = total - ((total / 100) * discountPercent) 
        
        return finalTotal
    }  
}

console.log(applyDiscount(600, 10));
