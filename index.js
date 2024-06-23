function calculateSum(a,b){
    return a+b
}

// example

console.log(calculateSum(5,6))

function isEven(a){
    if(a%2==0){
        return true
    }
    else {
        return false
    }
}

// example
console.log(isEven(6))

function findMax(arr){
    return Math.max(...arr)
}

// example
console.log(findMax([1,3,7]))

function reverseString(str) {
    return str.split('').reverse().join('');
}

// example
const temprev = reverseString("safayet")
console.log(temprev)

function filterOddNumbers(arr){
    let temp = []
    for (i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            temp.push(arr[i])
        }
    }
    return temp
}

// example
const newarrbijor = filterOddNumbers([1,2,3,4,5])
console.log(newarrbijor)

function sumArray(arr){
    let temp=0
    for(i=0;i<arr.length;i++){
        temp = temp + arr[i]
    }
    return temp
}

// example
const a = sumArray([1,2,3,4,5])
console.log(a)

function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// example
let sortedNumbers = sortArray([3, 1, 4, 1, 5]);
console.log(sortedNumbers); 

function capitalizeFirstLetter(str){
    let result = ""
    for(i=0;i<str.length;i++){
        if(i==0){
            result += str[i].toUpperCase()
        }
        else{
            result += str[i].toLowerCase()
        }
    }
    return result
}
// example
let word = "hello";
let capitalizedWord = capitalizeFirstLetter(word);
console.log(capitalizedWord);


