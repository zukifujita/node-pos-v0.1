module.exports = function main(inputs) {
    var result = '';
    var current = '';
    var unit = '';
    var quantity = 0;
    var price = 0;
    var subTotal = 0;
    var total = 0;
    var topMessage = '***<store earning no money>Receipt ***\n';
    var botMessage1 = '----------------------\n';
    var botMessage2 = '**********************\n';

    inputs.forEach(element => {
        if (current == '') {
            current = element.Name;
            price = element.Price;
            unit = element.Unit;   
        }

        if (element.Name == current) {
            quantity++;
            subTotal += price;
        } else {
            result += "Name: " + current + ", Quantity: " + quantity + ", Unit price: " + price.toFixed(2) + " (yuan), Subtotal: " + subTotal.toFixed(2) + " (yuan)";
            current = '';
            price = 0;
            unit = '';
            subTotal = 0;
        }
    });
    
    console.log(result)
    return result;
};