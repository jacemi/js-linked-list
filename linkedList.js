/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {

  let linkedList = {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  }

  let head = null;
  let tail = null;

  function getHead() {
    return head;
  };

  function getTail() {
    return tail;
  };

  function add(val) {
    let node = {
      value: val,
      next: null
    };
    if (head === null) {
      head = node;
      tail = head;
    }
    else {
      tail['next'] = node;
      tail = node;
    } return node
  }

  function get(num) {
    let indexNode = head;
    for (let i = 0; i < num; i++) {
      indexNode = indexNode.next
      if (indexNode === null) {
        return false;
      }
    }
    if (num < 0){
      return false;
    }
    return indexNode
  }


  function remove(num) {
    let indexNode = get(num);
    let prevNode = get(num - 1);
    if (indexNode === false) {
      return false;
    }
    prevNode.next = indexNode.next;
    if (num === 0) {
      head = indexNode.next
    }
    if (indexNode.next === null) {
      prevNode.next = null
      tail = prevNode
    }
  }

  function insert(val, num) {
    let indexNode = get(num);
    let prevNode = get(num - 1);
    if (indexNode === false){
      return false;
    }
    let newNode = {
      value: val,
      next: null
    };
    if (num === 0){
      newNode.next = head;
      head = newNode;

    }else if(indexNode.next === null) {
      prevNode.next = newNode;
      newNode.next = indexNode;
      tail = indexNode;
    }
    else{
    prevNode.next = newNode;
    newNode.next = indexNode;
  }
}
  


  return linkedList;
}

