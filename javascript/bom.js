console.log("<----------screen Height & Width--------->")
console.log("screen.height: ",screen.height)
console.log("screen.width: ",screen.width)

console.log("<---------navigator--------->")
console.log("navigator: ",navigator)
console.log("navigator userAgent: ",navigator.userAgent)
// history objects properties
console.log("<----------History--------->")
console.log("history: ",history)
console.log("history.length: ",history.length)

/* location objects properties
.reload
.assign
*/
function newFunction(){
    location.href="http://www.google.com";
}
function newFunction1(){
    location.reload();
}
function newFunction2(){
    location.assign("http://www.google.com");
}
/* history objects methods
.back
.forward
*/
function backFunction(){
    history.back();
}
function forwardFunction(){
    history.forward();
}