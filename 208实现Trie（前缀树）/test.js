var TrieNode = function(val){
  this.isEnd = false
  this.nodes = []
}

/**
* Initialize your data structure here.
*/
var Trie = function() {
  this.rootNode = new TrieNode()
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
let curNode = this.rootNode;
for(const s of word){
  const index = s.charCodeAt(0) - 97
  if(curNode.nodes[index] === undefined){
    curNode.nodes[index] = new TrieNode()
  }
  curNode = curNode.nodes[index]
}
curNode.isEnd = true
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
let curNode = this.rootNode;
for(const s of word){
  const index = s.charCodeAt(0) - 97
  const leaf = curNode.nodes[index]
  if(leaf === undefined){
    return false
  }
  curNode = leaf
}
return curNode.isEnd 
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
let curNode = this.rootNode;
for(const s of prefix){
  const index = s.charCodeAt(0) - 97
  const leaf = curNode.nodes[index]
  if(leaf === undefined){
    return false
  }
  curNode = leaf
}
return true
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/

var trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // 返回 True
console.log(trie.search("app"));     // 返回 False
console.log(trie.startsWith("app")); // 返回 True
trie.insert("app");
console.log(trie.search("app"));     // 返回 True
