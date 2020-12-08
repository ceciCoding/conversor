'use strict';

function rgbToHex() {
    let memo = {};

    function validateArgument(n) {
        if (n < 0 || n > 255) {
            return false;
        }
        return true;
    }

    function convertToHex(n) {
        let converted = n.toString(16);
        memo[n] = converted;
        if (converted.length === 1) {
            converted = '0' + converted;
        }
        return converted;
    }

    return (r, g, b) => {
        if (!validateArgument(r) ||
            !validateArgument(g) ||
            !validateArgument(b)) {
                console.error('Invalid argument passed to the function rgbToHex. Values should be between 0 and 255.');
                return;
        }

        let hexValues = {
            r: memo[r] || convertToHex(r),
            g: memo[g] || convertToHex(g),
            b: memo[b] || convertToHex(b)
        };

        let hex = '#';
        return hex.concat(hexValues.r, hexValues.g, hexValues.b);
    }
}
