//function that takes a number and spits out an array of that many numbers in the fibonacci sequence
const fibonacci = function(iterations){
    let fibs=[];
    let previous = 0;
    let current = 1;
    for(let i=0; i<iterations;i++){

        if(i==0){
            fibs.push(previous)
            //console.log("iteration: "+i+ " previous: "+ previous +" current: " + current)

        }
        else if(i==1){
            fibs.push(current);
            //console.log("iteration: "+i+ " previous: "+ previous +" current: " + current)

        }
        else{
            let new_sum = previous + current;
            //console.log("iteration: "+i+ " previous: "+ previous +" current: " + current + " new sum: "+ new_sum)

            fibs.push(new_sum)
            previous = current
            current =  new_sum;
        }


    }
    return fibs

}
//fibonacci(8)
//console.log(fibonacci(16))
//recursive fibonacci seqeunce generator, note that this returns the number in the series and not an array
const fibRec = function(num){
    let value;
    if(num<2){
        value =  num;
    }
    else{
        value = fibRec(num-1)+fibRec(num-2);
    }
    return value
}

//console.log(fibRec(7))
const sort = function(arr1, arr2){
    console.log("sorting! arr1: " +arr1 + " arr2: " + arr2)
    const results =[];
    while(arr1.length && arr2.length){
        if(arr1[0]<=arr2[0]){
            console.log("left side is smaller " + arr1[0])
            results.push(arr1[0]);
            arr1.shift();
        } else {
            console.log("right side is smaller " + arr2[0])
            results.push(arr2[0]);
            arr2.shift();
        }
    }
    while(arr1.length){
        console.log('remaining items arr1: ' + arr1);
        results.push(arr1[0]);
        arr1.shift();
    }
    while(arr2.length){
        console.log('remaining items arr2: '+ arr2);
        results.push(arr2[0]);
        arr2.shift();
    }
    //console.log(results)
    return results

}

const mergeSort= function(given_array){
    let left_array = given_array.slice(0, (given_array.length)/2) 
    let right_array = given_array.slice((given_array.length)/2)
    if(given_array.length<2){
        return given_array
    }
    
    //console.log("full array: "+ given_array)
    //console.log("left array: "+ left_array)
    //console.log("right array: "  + right_array)
    return sort(mergeSort(left_array), mergeSort(right_array))
}

//let fibs=fibonacci(17)
let arr= [5,1,2,3,6,4]
console.log(mergeSort(arr))

