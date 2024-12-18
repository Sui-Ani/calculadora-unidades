'use strict';

// Polyfill for older browsers
if (!Element.prototype.classList) {
    Object.defineProperty(Element.prototype, 'classList', {
        get: function() {
            var self = this;
            function update(fn) {
                return function(value) {
                    var classes = self.className.split(/\s+/);
                    fn(classes, value);
                    self.className = classes.join(" ");
                }
            }
            
            return {
                add: update(function(classes, value) {
                    if (!~classes.indexOf(value)) classes.push(value);
                }),
                remove: update(function(classes, value) {
                    var index = classes.indexOf(value);
                    if (~index) classes.splice(index, 1);
                }),
                toggle: update(function(classes, value) {
                    var index = classes.indexOf(value);
                    if (~index) classes.splice(index, 1);
                    else classes.push(value);
                }),
                contains: function(value) {
                    return !!~self.className.split(/\s+/).indexOf(value);
                }
            };
        }
    });
}

function showConversionType(type) {
    // Update active button
    document.getElementById('length-btn').classList.remove('active');
    document.getElementById('area-btn').classList.remove('active');
    document.getElementById(`${type}-btn`).classList.add('active');

    // Show/hide conversion options
    document.getElementById('length-conversions').classList.add('hidden');
    document.getElementById('area-conversions').classList.add('hidden');
    document.getElementById(`${type}-conversions`).classList.remove('hidden');

    // Reset result
    document.getElementById('result').textContent = 'Resultado aparecerá aqui';
}

function convert(conversionType) {
    const input = parseFloat(document.getElementById('input-value').value);
    if (isNaN(input)) {
        document.getElementById('result').textContent = 'Por favor, digite um número válido';
        return;
    }

    let result;
    let fromUnit = '';
    let toUnit = '';

    switch (conversionType) {
        // Comprimento
        case 'm-to-cm':
            result = input * 100;
            fromUnit = 'metros';
            toUnit = 'centímetros';
            break;
        case 'm-to-mm':
            result = input * 1000;
            fromUnit = 'metros';
            toUnit = 'milímetros';
            break;
        case 'cm-to-m':
            result = input / 100;
            fromUnit = 'centímetros';
            toUnit = 'metros';
            break;
        case 'cm-to-mm':
            result = input * 10;
            fromUnit = 'centímetros';
            toUnit = 'milímetros';
            break;
        case 'mm-to-m':
            result = input / 1000;
            fromUnit = 'milímetros';
            toUnit = 'metros';
            break;
        case 'mm-to-cm':
            result = input / 10;
            fromUnit = 'milímetros';
            toUnit = 'centímetros';
            break;

        // Área
        case 'm2-to-cm2':
            result = input * 10000;
            fromUnit = 'metros²';
            toUnit = 'centímetros²';
            break;
        case 'cm2-to-m2':
            result = input / 10000;
            fromUnit = 'centímetros²';
            toUnit = 'metros²';
            break;
    }

    document.getElementById('result').textContent = 
        `${input} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

// Initialize with length conversion view
showConversionType('length');
