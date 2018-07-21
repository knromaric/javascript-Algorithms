const Queue = require('./queue');

function weave(queue_one, queue_two){
    let result = new Queue();

    while ( !queue_one.isEmpty() || !queue_two.isEmpty()) {
        
        if (!queue_one.isEmpty()){
            result.add(queue_one.remove());
        }
        if(!queue_two.isEmpty()) {
            result.add(queue_two.remove());
        }
    }

    return result; 
}

module.exports = weave;