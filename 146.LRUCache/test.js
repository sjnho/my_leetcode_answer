function DLinkNode(key,value){
  this.prev = null
  this.next = null
  this.key = key
  this.value = value
}

function DLinkList(){
  this.head = new DLinkNode()
  this.tail = new DLinkNode()
  this.head.next = this.tail
  this.tail.prev = this.head
  this.size = 0;
}

DLinkList.prototype.removeNode = function(node){
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.size--;
}
DLinkList.prototype.prepend = function(node){
  node.next = this.head.next
  node.prev = this.head
  this.head.next.prev = node
  this.head.next = node
  this.size++
}
DLinkList.prototype.removeLast = function(){
  if(this.head.next === this.tail){
    return null
  }
  const node = this.tail.prev
  this.removeNode(node) 
  return node
} 
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this._map = Object.create(null)
    this._list = new DLinkList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this._map[key]
  if(node && node.value>=0){
    this._list.removeNode(node)
    this._list.prepend(node)
    return node.value
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this._map[key]
    if(node){
      node.value = value
      this._list.removeNode(node)
      this._list.prepend(node)
    }else{
      node = new DLinkNode(key,value);
      if(this._list.size === this.capacity){
        const deleteNode = this._list.removeLast()
        delete this._map[deleteNode.key]
      }
      this._list.prepend(node)
     
    }
    this._map[key] = node
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


 var cache = new LRUCache(2);
cache.put(2,1)
console.log('cache1',Object.keys(cache._map))
cache.put(1,1)
console.log('cache2',Object.keys(cache._map))
cache.put(2,3)
console.log('cache3',Object.keys(cache._map))
cache.put(4,1)
console.log('cache4',Object.keys(cache._map))
