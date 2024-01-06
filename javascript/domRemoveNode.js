var dom1 = document.getElementById('dom')
console.log("dom1 here: ",dom1)

var parent = dom1.parentNode;
console.log("parentnode here: ",parent)

const removed = parent.removeChild(dom1)
console.log("dom1 child is removed: ",removed)