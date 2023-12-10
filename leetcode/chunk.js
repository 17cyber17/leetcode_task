/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
let chunk = function(arr, size) {
    let arr_chunk = [];
    if (arr.length > size) {
        for(let i = 0; arr.length > size; i++){
            arr_chunk[i] = arr.splice(0, size);
        }
        arr_chunk.push(arr.splice(0, arr.length))
        return arr_chunk;
    } else {
        arr_chunk[0] = arr.splice(0, arr.length);
        return arr_chunk;
    }
};

alert(chunk([8,5,3,2,6], 2))