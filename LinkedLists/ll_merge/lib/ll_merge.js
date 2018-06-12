class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

Node.mergeLists= (L1, L2) =>{
  var mergedLL = new Node(null, null);
  var tempLL = mergedLL;
  while (L1 !== null && L2 !== null) {
    tempLL.next = L1;
    L1 = L1.next;
    tempLL.next.next = L2;
    L2 = L2.next;
    tempLL = tempLL.next.next;
  }
  if (L1 === null) { tempLL.next = L2; }
  if (L2 === null) { tempLL.next = L1; }
  return mergedLL.next;
};

module.exports = Node;