/**
 * @param {Function[]} functions
 * @return {Function}
 */
let compose = function(functions) {
    if (functions.length == 0) {
        return (x) => { return x; };
    }

    return functions.reduceRight((prevFn, nextFn) => {
        return (x) => {
            return nextFn(prevFn(x));
        };
    });
};
module.exports = compose;

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */