class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null
	}
}
// Queue class
class Queue {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// pushs an element at the end
	// of queue
	enqueue(element) {
		// creates a new node
		var node = new Node(element);

		// to store current node
		var current;

		// if list is Empty add the
		// element and make it head
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;

			// iterate to the end of the
			// list
			while (current.next) {
				current = current.next;
			}

			// add node
			current.next = node;
		}
		this.size++;
	}


	

	// dequeue a given element from the
	// list
	dequeue() {
		var current = this.head;
	

		if(current){
            let element = current.element;
            current = current.next;
            this.head = current;
            this.size--;
            return element;
          }
    
          return null;   
    }
// return the first item in queue
    peak(){
        var current = this.head;
        if(current){
            let element = current.element;
            return element;
        }else{
            return null;
        }

    }



	// checks the list for empty
	isEmpty() {
		return this.size == 0;
	}

	// gives the size of the list
	size_of_list() {
		console.log(this.size);
	}


	// prints the list items
	printList() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}
		console.log(str);
	}

}

// creating an object for the
// Linkedlist class
var queue = new Queue

// testing isEmpty on an empty list
// returns true
console.log("is Queue Empty ? " + queue.isEmpty());

// // adding element to the list
queue.enqueue(10);

// // prints 10
queue.printList();

// // returns 1
console.log(queue.size_of_list());

// adding more elements to the queue
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

// // returns 10 20 30 40 50
queue.printList();

// // prints 10 from the queue
console.log("is element removed ? " + queue.dequeue());

// // // prints 10 20 30 40
queue.printList();

// // returns 20
console.log("return top of queue ? " + queue.peak());



// returns false
console.log("is Queue Empty ? " + queue.isEmpty());



// prints  20 60 40 50
queue.printList();
