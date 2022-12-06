// queue class
class Queue {

	// Array is used to implement Queue
	constructor()
	{
		this.items = [];
	}
	// Functions to be implemented
    // enqueue function
    enqueue(element)
    {
        // enqueue element into the items
        this.items.push(element);
    }
	// dequeue()
    // dequeue function
    dequeue()
    {
        // return top most element in the Queue
        // and removes it from the Queue
        // Underflow if Queue is empty
        if (this.items.length == 0)
            return "Underflow";
        return this.items.shift();
    }
	// peak()
    peak()
    {
        // return the top most element from the Queue
        // but does'nt delete it.
        return this.items[0];
    }
	// isEmpty()
    isEmpty()
    {
        // return true if Queue is empty
        return this.items.length == 0;
    }
	// printQueue()
    printQueue()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

// creating object for Queue class
var queue = new Queue();
  
// testing isEmpty and pop on an empty Queue
  
// returns false
console.log(queue.isEmpty()); 
  
// returns Underflow
console.log(queue.dequeue()); 
// Adding element to the Queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);


// Printing the Queue element
// prints [10, 20, 30,40]
console.log(queue.printQueue());

// returns 10
console.log("return front of stack ? " + queue.peak());


// returns 10 and remove it from Queue
console.log(queue.dequeue());

// returns [20,30,40]
console.log(queue.printQueue());
