// getElementByName
var bodyTag = document.getElementsByName('body')
console.log(bodyTag)
// createElement-----create h2 tag
const newElement = document.createElement('h2')
console.log("h2 add here: ",newElement)
// createTextNode----add text in html
var newText = document.createTextNode('I am a Web Developer')
console.log(newText)
// createComment----i use comment
var newComment = document.createComment("this is comment")
console.log(newComment)

newElement.appendChild(newText)//i append text inside h2 tag

bodyTag.appendChild(newElement)//issue occurs