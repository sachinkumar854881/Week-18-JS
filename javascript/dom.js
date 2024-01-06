console.log("<------------firstChild & lastChild of document----------->")

console.log(document)

console.log(document.firstChild)

console.log(document.firstChild.firstChild)

console.log(document.lastChild)

// getElementByTagName()
console.log("<------------getElementByTagName----------->")

console.log("h1: ",document.getElementsByTagName('h1'))
console.log("h1[0]: ",document.getElementsByTagName('h1')[0])

console.log("p: ",document.getElementsByTagName('p'))
console.log("p: ",typeof(document.getElementsByTagName('p')))
console.log("p[0]: ",document.getElementsByTagName('p')[0])
console.log("p[1]: ",document.getElementsByTagName('p')[1])
console.log("p[2]: ",document.getElementsByTagName('p')[2])//undefined isliye because p ka second index nahi hai agar hota to value deta 
document.getElementsByTagName('h1')[0].innerHTML += ' day 1'
console.log(document.getElementsByTagName('h1')[0].innerHTML)//day 1 text will be add to h1 0 index

// getElementById
console.log("<------------getElementById----------->")

console.log("p",document.getElementById('p1'))
// getElementsByClassName
console.log("<------------getElementByClassName----------->")

document.getElementsByClassName('primary')[2].innerHTML += ' Dom'//dom will be add to primary class of 2 index
console.log("p: ",document.getElementsByClassName('primary'))
console.log("p[0]: ",document.getElementsByClassName('primary')[0])
console.log("p[1]: ",document.getElementsByClassName('primary')[1].innerHTML)
console.log("p[2]: ",document.getElementsByClassName('primary')[2].innerHTML)

// querySelector
console.log("<------------querySelector----------->")

console.log("select p id: ",document.querySelector('#p1'))
console.log("select innerhtml of p id: ",document.querySelector('#p1').innerHTML)
// parentNode of p1 id
console.log("parentNode of p id: ",document.querySelector('#p1').parentNode)
// parentElement of p1 id
console.log("parentElement of p1 id: ",document.querySelector('#p1').parentElement)
// target class using querySelector
console.log("select class primary: ",document.querySelector('.primary'))
// using queerySelectorAll
console.log("select ALL primary class: ",document.querySelectorAll('.primary'))
console.log("index[2] of primary class: ",document.querySelectorAll('.primary')[2])
console.log("innerHTML of [2] are: ",document.querySelectorAll('.primary')[2].innerHTML)