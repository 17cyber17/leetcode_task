let totalMoney = function(n) {
    let sum = 0;
    let numberWeeks = 1;
    while (n > 0){
        for (let day = 0; day < Math.min(n, 7); day++){
            sum += day + numberWeeks;
        }

        n -= 7;
        numberWeeks++;
    }
    return sum;
};