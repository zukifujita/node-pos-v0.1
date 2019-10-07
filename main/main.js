module.exports = function main(inputs) {
    var result = '';
    var current = '';
    var quantity = 0;
    var topMessage = '***<store earning no money>Receipt ***\n';

    for (let value of Object.values(inputs)) {
        if (value.Name != current) {
            if (quantity > 0) {
                current = value.Name;
            } else {
                quantity++;
            }
            result += "Name: " + value.Name + ", Quantity: " + quantity + ", Unit price: " + value.Price + " (yuan), Subtotal: ";
            quantity = 1;
        } 
    }

    console.log(result)
    return result;
};