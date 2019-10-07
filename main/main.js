module.exports = function main(inputs) {
    var result = '';
    var current = '';
    var topMessage = '***<store earning no money>Receipt ***\n';
    var botMessage1 = '----------------------\n';
    var botMessage2 = '**********************\n';

    inputs.forEach(element => {
        var quantity = 0;
        if (element.Name != current) {
            if (quantity == 0) {
                current = element.Name;
                quantity = 0;
            }
            else {
                quantity++;
            }
            result += "Name: " + element.Name + ", Quantity: " + quantity + ", Unit price: " + element.Price.toFixed(2) + " (yuan), Subtotal: ";
        }

    });
    
    console.log(result)
    return result;
};