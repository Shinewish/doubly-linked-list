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
    	return this._head ? this._head.data : null;
    }

    tail() {
    	return this._tail ? this._tail.data : null;
    }

    at(index) {
    	var curNode = this._head,
    		count = 0;

    	while (count < index) {
    		curNode = curNode.next;
    		count++;
    	}

    	return curNode.data;
    }

    insertAt(index, data) {
    	var node = new Node(data),
    		curNode = this._head,
    		count = 0;

    	if (!this.length) {
    		this.append(data);
    	} else {
    	while (count < index) {
    		curNode = curNode.next;
    		count++;
    	}
    	
    	node.next = curNode;
    	node.prev = curNode.prev;
    	curNode.prev.next = node;
    	curNode.prev = node;

    	this.length++;
    	}

    	return this;
    }

    isEmpty() {
    	return !this.length; 
    }

    clear() {
    	this._head = null;
    	this._tail = null;    	
    	this.length = 0;

    	return this;
    }

    deleteAt(index) {    	
		var curNode = this._head;
 
    // first node
    if (index === 0) {
        this._head = curNode.next;
         // second node exists
        if (this._head) {
            this._head.prev = null;
        // no second node
        } else {
            this._tail = null;
        }
	// last node
    } else if (index === (this.length - 1)) {
    	this._tail = this._tail.prev;
        this._tail.next = null;
    // middle node
	} else {
		var curNode = this._head,
        	count = 0;

        while (count < index) {
        	curNode = curNode.next;
        	count++;
        }
        curNode.prev.next = curNode.next;
        curNode.next.prev = curNode.prev;
    }

    	this.length--;
    	return this;
    }

    reverse() {
    	var curNode = this._head,
        	count = 0;

        while (count < this.length) {
        	temp = curNode.next;
        	curNode.next = curNode.prev;
        	curNode.prev = temp;
        	curNode = curNode.prev;
        	count++;
        }

        var temp = this._tail;
        this._tail = this._head;
        this._head = temp;

        return this;
    }

    indexOf(data) {
    	var curNode = this._head,
        	index = -1,
    		count = 0;
    	
    	while (count < this.length) {
        	if (curNode.data === data) {
        		index = count;
        	}
        	curNode = curNode.next;
        	count++;
        }

        return index;
    }
}

module.exports = LinkedList;
