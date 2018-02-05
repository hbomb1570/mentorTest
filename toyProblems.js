//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {

  reverseIt: function(str){
    return str.split('').reverse().join('')
  }
,
  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(arr){
   let unique = Array.from(new Set(arr))
    return unique
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function(str){
    let arr=str.split(' ')
    let arr1=[]
    arr.map(e =>{
     arr1.push(e.split('')[0]=(e.split('')[0].toUpperCase() + e.slice(1)))
    })
    return arr1.join(' ')
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function(str){
    let vowel = str.match(/[aeiou]/gi)
    return vowel === null ? 0 : vowel.length
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(num){
    if(num < 3){
      return false
    }
    else for (var i = 2; i < num; i++) {
      if (num%i === 0) {
        return false
      }
    }
    return true
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
}
