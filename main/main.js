'use strict';
module.exports = function main(inputs) {
    var result = '***<store earning no money>Receipt ***\n';
    var current = '';
    var unit = '';
    var quantity = 0;
    var price = 0;
    var subTotal = 0;
    var total = 0;
    var botMessage1 = '----------------------\n';
    var botMessage2 = '**********************\n';

    for (var i = 0; i < inputs.length; i++) {
        if (current == '') {
            current = inputs[i].Name;
            price = inputs[i].Price;
            unit = inputs[i].Unit;   
        }

        if (inputs[i].Name == current) {
            quantity++;
            subTotal += price;
            if (i + 1 == inputs.length) {
                total += subTotal;
                if (unit == 'bottle') {
                    result += "Name: " + current + ", Quantity: " + quantity + ' ' + unit +
                    "s, Unit price: " + price.toFixed(2) + " (yuan), Subtotal: " + subTotal.toFixed(2) + " (yuan)\n";
                } else if (unit.match(/^[A-Za-z]{1}$/g)) {
                    result += "Name: " + current + ", Quantity: " + quantity + unit.replace(/^[A-Za-z]{1}$/g, "")+ 
                    ", Unit price: " + price.toFixed(2) + " (yuan), Subtotal: " + subTotal.toFixed(2) + " (yuan)\n";
                } else {
                    result += "Name: " + current + ", Quantity: " + quantity + ' ' + unit + 
                    ", Unit price: " + price.toFixed(2) + " (yuan), Subtotal: " + subTotal.toFixed(2) + " (yuan)\n";
                }
            }
        } else {
            total += subTotal;
            if (unit == 'bottle') {
                result += "Name: " + current + ", Quantity: " + quantity + ' ' + unit +
                "s, Unit price: " + price.toFixed(2) + " (yuan), Subtotal: " + subTotal.toFixed(2) + " (yuan)\n";
            } else if (unit.match(/^[A-Za-z]{1}$/g)) {
                result += "Name: " + current + ", Quantity: " + quantity + unit.replace(/^[A-Za-z]{1}$/g, "") + 
                ", Unit price: " + price.toFixed(2) + " (yuan), Subtotal: " + subTotal.toFixed(2) + " (yuan)\n";
            } else {
                result += "Name: " + current + ", Quantity: " + quantity + ' ' + unit + 
                ", Unit price: " + price.toFixed(2) + " (yuan), Subtotal: " + subTotal.toFixed(2) + " (yuan)\n";
            }
            i -= 1;
            current = '';
            price = 0;
            unit = '';
            subTotal = 0;
            quantity = 0;
        }
        if(i + 1 == inputs.length){
            result += botMessage1;
            result += 'Total: ' + total.toFixed(2) + ' (yuan)\n';
            result += botMessage2;
        }
    }
    
    console.log(result)
    return result;
};