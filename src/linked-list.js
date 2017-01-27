const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
    	var node = new Node(data);

    	if (this.length) {
    		this._tail.next = node;
    		node.prev = this._tail;
    		this._tail = node;
    	} else {
    		this._head = node;
    		this._tail = node;
    	}

    	this.length++;

    	return this;
    }

    head() {
    	if (this._head === null) {
    		return null;
    	} else {
    	return this._head.data;
    	}
    }

    tail() {
    	if (this._tail === null) {
    		return null;
    	} else {
    		return this._tail.data;
    	}
    }

    at(index) {
    	var currentNode = this._head,
    	count = 0;
    	//index should be valid

    	while (count < index) {
    		currentNode = currentNode.next;
    		count++;
    	}

    	return currentNode.data;
    }

    insertAt(index, data) {
    	var node = new Node(data),
    		currentNode = this._head,
    		count = 0;

    	if (this.length === 0) {
    		this.append(data);
    	} else {
    	while (count < index) {
    		currentNode = currentNode.next;
    		count++;
    	}
    	
    	var prevNote = currentNode.prev;
    	
    	node.next = currentNode;
    	node.prev = prevNote;
    	prevNote.next = node;
    	currentNode.prev = node;

    	this.length++;
    	}

    	return this;
    }

    isEmpty() {
    	return !this.length; // let's try it
    }

    clear() {
    	this._head = null;
    	this._tail = null;    	
    	this.length = 0;

    	return this;
    }

    deleteAt(index) {    	
		var currentNode = this._head,
        length = this.length,
        count = 0;
 
    // first node
    if (index === 0) {
        this._head = currentNode.next;
         // second node exists
        if (this._head) {
            this._head.prev = null;
        // no second node
        } else {
            this._tail = null;
        }

    } else if (index === (this.length - 1)) {

    	// last node
    	this._tail = this._tail.previous;
        this._tail.next = null;

	} else {
		var currentNode = this._head;
        // middle node
        while (count < index) {
        	currentNode = currentNode.next;
        	count++;
        }

        var temp = currentNode.prev;
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        currentNode = null;
    }

    	this.length--;

    	return this;
    }

    reverse() {
    	var currentNode = this._head,
    	length = this.length,
        count = 0;

        var temp = this._tail;
        this._tail = this._head;
        this._head = temp;

        while (count < length) {
        	temp = currentNode.next;
        	currentNode.next = currentNode.prev;
        	currentNode.prev = temp;
        	currentNode = currentNode.prev;
        	count++;
        }

        return this;


    	//didn't work
    	/*var secondList = new LinkedList;
    		currentNode = this._tail,
        	count = this.length;

    	while (count > 0) {
        	secondList.append(currentNode.data);
        	currentNode = currentNode.prev;
        	count--;
        }

        count = 0;
        */

        /*while (count < length) {
        	secondList.append(currentNode.data);
        	currentNode = currentNode.prev;
        	count--;
        }*/
    }

    indexOf(data) {
    	var currentNode = this._head,
        	length = this.length,
        	index = -1,
    		count = 1;

    	
    	while (count <= this.length) {
        	if (currentNode.data === data) {
        		index = count - 1;
        	}
        	currentNode = currentNode.next;
        	count++;
        }

        return index;
    }
}

module.exports = LinkedList;
