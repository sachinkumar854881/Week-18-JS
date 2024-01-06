// simple asyn 
console.log('<--------------example-1------------>')
function execute(){
    console.log("function executed")
}
console.log('before function call')
setTimeout(execute,3000)
console.log('after function call')

// example 2
console.log('<-----------example-2---------->')
function boilingWater(){
    console.log('boiling water')
    afterWaterBoil();
}
function afterWaterBoil(){
    console.log('put masala')
}
function Chopping(){
    console.log('chopping onion')
    putOnion()
}
function putOnion(){
    console.log('put onion')
    console.log('put maggiee')
}
setTimeout(boilingWater,3000)
setTimeout(Chopping,4000)