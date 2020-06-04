let name = '           4#3435madhu'
console.log(name.trim())

const str = 'The quick brown fox jumps over the lazy dog.';

let usechecker =function(mystr){
    if (mystr.includes('#')) {
        return true
    } else {
        return false
    }
}
console.log(usechecker(name))