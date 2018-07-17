function chunk(array, size){
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}


function chunkV1(array, size){
    let chunked = [];

    while (array.length > 0) {
        const elt = array.shift();
        let last = chunked[chunked.length - 1];
        if (chunked.length === 0 || last.length === size) {
            chunked.push([elt]);
        } else {
            last.push(elt);
        }
    }

    return chunked;
}

module.exports = chunk;