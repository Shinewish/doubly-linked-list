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
    }

    head() {
    	return this._head.data;
    	//this._head should exist
    }

    tail() {
    	return this._tail.data;
    	//this._tail should exist
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

    isEmpty() {
    	return !this.length; // let's try it
    }

    clear() {
    	this._head = null;
    	this._tail = null;    	
    	this.length = 0;
    }

    deleteAt(index) {    	
		var currentNode = this.__head,
        length = this.length,
        count = 1,
        DelNodePrev = null,
        DelNode = null,
        DelNodeNext = null;
 
    // first node
    if (index === 1) {
        this.__head = currentNode.next;
         // second node exists
        if (!this._head) {
            this._head.prev = null;
        // no second node
        } else {
            this._tail = null;
        }

    } else if (index === this.length) {

    	// last node
    	this._tail = this._tail.previous;
        this._tail.next = null;

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

    	this.length--;
    }

    reverse() {
    	var currentNode = this._head,
    	length = this.length,
        count = 1;

    	while (count < length) {
        	var temp = currentNode;
        	currentNode.next = currentNode.prev;
        	currentNode.prev = temp.next;
        	currentNode = temp.next;
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
