function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    // here i'll try tocorrect the code of prime number
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log(checkPrime(8)); 
console.log(checkPrime(2)); 