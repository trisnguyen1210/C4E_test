function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function calSumPrime() {
    const a = Number(document.getElementById('input-a').value);
    const b = Number(document.getElementById('input-b').value);
    let totalHTML = ``;
    if (a > b) {
        alert(`recheck input condition (a<b)`)
    }
    else {
        let sum = 0;
        let listPrime = [];
        for (let i = a; i <= b; i++) {
            if (isPrime(i)) {
                listPrime.push(i)
                sum += i;
            }
        }
        document.getElementById('result-text').innerText = `Tổng các số nguyên tố trong khoảng ${a} và ${b} là: ${sum}`;
        document.getElementById('listPrime-text').innerText = `Các số nguyên tố trong khoảng từ ${a} - ${b} là: ${listPrime}`;
    }
}