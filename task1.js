"use strict";

function dscount({text, symbol1, symbol2}) {
    const uppercaseSymbol1 = symbol1.toUpperCase();
    const uppercaseSymbol2 = symbol2.toUpperCase();
    const regex = new RegExp(`${uppercaseSymbol1}${uppercaseSymbol2}`, 'g');

    let uppercaseText = text.toUpperCase();
    let count = 0;

    function recursiveFunc(text) {
        const str = text.replace(regex, () => {
            count++;
            return uppercaseSymbol1 === uppercaseSymbol2 ? uppercaseSymbol1 : '';
        });
        if (regex.test(str)) {
            recursiveFunc(str);
        }
    }

    recursiveFunc(uppercaseText);
    return count
}

function test(call, params, count) {
    const result = (call.call(null, params) === count);
    console.assert(result, `Found items count: ${count}`);
    if (!result) throw "Test failed!";
}

function testTask1() {
    const span = document.getElementById('resultTask1');

    try {
        test(dscount, {text: 'ab___ab__', symbol1: 'a', symbol2: 'b'}, 2);
        test(dscount, {text: '___cd____', symbol1: 'c', symbol2: 'd'}, 1);
        test(dscount, {text: 'de_______', symbol1: 'd', symbol2: 'e'}, 1);
        test(dscount, {text: '12_12__12', symbol1: '1', symbol2: '2'}, 3);
        test(dscount, {text: '_ba______', symbol1: 'a', symbol2: 'b'}, 0);
        test(dscount, {text: '_a__b____', symbol1: 'a', symbol2: 'b'}, 0);
        test(dscount, {text: '-ab-аb-ab', symbol1: 'a', symbol2: 'b'}, 2);
        test(dscount, {text: 'aAa', symbol1: 'a', symbol2: 'a'}, 2);

        span.textContent = 'Congratulations! All tests passed.';
        console.info("Congratulations! All tests passed.");
    } catch(e) {
        span.textContent = e;
        console.error(e);
    }
}

