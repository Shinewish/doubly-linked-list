const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0;
    	this.head = null;
    	this.tail = null;
    }

    append(data) {
    	var node = new Node(data);

    	if (this.length) {
    		this.tail.next = node;
    		node.prev = this.tail;
    		this.tail = node;
    	} else {
    		this.head = node;
    		this.tail = node;
    	}

    	this.length++;
    }

    head() {
    	return this.head;
    	//this.head should exist
    }

    tail() {
    	return this.tail;
    	//this.tail should exist
    }

    at(index) {
    	var currentNode = this.head,
    	length = this.length,
    	count = 1;
    	//index should be valid

    	while (count < index) {
    		currentNode = currentNode.next;
    		count++;
    	}

    	return currentNode;
    }

    insertAt(index, data) {
    	var node = new Node(data),
    		currentNode = this.at(index);

    	this.at(index - 1).next = node;
    	node.prev = this.at(index - 1);
    	node.next = currentNode;
    	currentNode.prev = node;



    	/*if (this.length) {
    		this.tail.next = node;
    		node.prev = this.tail;
    		this.tail = node;
    	} else {
    		this.head = node;
    		this.tail = node;
    	} */

    	this.length++;
    }

    isEmpty() {
    	return !this.length; // let's try it
    }

    clear() {
    	this.length = 0;
    	this.head = null;
    	this.tail = null;
    }

    deleteAt(index) {    	
		var currentNode = this.head,
        length = this.length,
        count = 1,
        DelNodePrev = null,
        DelNode = null,
        DelNodeNext = null;
 
    // first node
    if (index === 1) {
        this.head = currentNode.next;
         // second node exists
        if (!this.head) {
            this.head.prev = null;
        // no second node
        } else {
            this.tail = null;
        }

    } else if (index === this._length) {

    	// last node
    	this.tail = this.tail.previous;
        this.tail.next = null;

	} else {

        // middle node
        while (count < index) {
        	currentNode = currentNode.next;
        	count++;
        }

        DelNodePrev = currentNode.prev;
        DelNode = currentNode;
        DelNodeNext = currentNode.next;
        DelNodePrev.next = DelNodeNext;
        DelNodeNext.prev = DelNodePrev;
        DelNode = null;
    }

    	this._length--;
    }

    reverse() {
    	var secondList = new LinkedList;
    		currentNode = this.tail,
        	count = this.length;

    	while (count > 0) {
        	secondList.append(currentNode.data);
        	currentNode = currentNode.prev;
        	count--;
        }

        this = secondList;
    }

    indexOf(data) {
    	var currentNode = this.head,
        	length = this.length,
        	index = -1,
    		count = 1;

    	
    	while (count <= this.length) {
        	if (currentNode) === data {
        		index = count - 1;
        	}
        	currentNode = currentNode.next;
        	count++;
        }

        return index;
    }
}

module.exports = LinkedList;
