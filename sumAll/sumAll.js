const sumAll = function(initNumber, endNumber) {
        let sum = 0;
        if (typeof initNumber != "number" || typeof endNumber != "number"|| initNumber < 0 || endNumber < 0) {
            return 'ERROR';
        } else {
            if (initNumber < endNumber) {
                for (let i = initNumber-1; i <= endNumber; i++) {
                    sum += i;
                }
            } else if (initNumber > endNumber) {
                for (let i = initNumber; i >= endNumber; i--) {
                    sum += i;
                }
            }
            return sum
        }
    }


module.exports = sumAll
