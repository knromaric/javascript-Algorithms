function levelWidth(root) {
    let counters = [0];
    let arr = [root, 's'];

    while(arr.length > 1) {
        const firstNode = arr.shift();
        if(firstNode === 's') {
           arr.push(firstNode);
           counters.push(0);
        } else{
            arr.push(...firstNode.children);
            counters[counters.length - 1]++;
        }
    }

    return counters;

}

module.exports = levelWidth;