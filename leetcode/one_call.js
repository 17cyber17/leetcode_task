/**
 * @param {Function} fn
 * @return {Function}
 */
let once = function(fn) {
    
    let call = false;
    let result;

    return function(...args) {
        if (!call) {
        result = fn(...args);
        call = true;
        return result;
        } else {
            return undefined;
        }
    }
};
module.exports = once;

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */