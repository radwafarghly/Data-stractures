class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null
	}
}
// linkedlist class
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// pushs an element at the top
	// of stack
	push(element) {
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
            node.next = current;
            this.head = node;
			// iterate to the end of the
			// list
			// while (current.next) {
			// 	current = current.next;
			// }

			// // add node
			// current.next = node;
		}
		this.size++;
	}


	

	// pop a given element from the
	// list
	pop() {
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
    // return the top of stack
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
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.push(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.push(20);
ll.push(30);
ll.push(40);
ll.push(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log("is element removed ? " + ll.pop());

// // prints 10 20 30 40
ll.printList();

// returns 3
console.log("return top of stack ? " + ll.peak());



// // returns false
console.log("is List Empty ? " + ll.isEmpty());



// // prints 10 20 60 40
ll.printList();
