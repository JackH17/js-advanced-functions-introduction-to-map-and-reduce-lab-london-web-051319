// Your code here



function mapToNegativize(sourceArray) {

   return sourceArray.map( x => x * -1);

}

function mapToNoChange(sourceArray) {

    return sourceArray.map( x => x);

}

function mapToDouble(sourceArray) {

    return sourceArray.map(x => x * 2);

}

function mapToSquare(sourceArray) {

    return sourceArray.map(x => x * x); 

}

function reduceToTotal(sourceArray, startingPoint= 0){

    let runningTotal = startingPoint

    for(let i = 0; i < sourceArray.length; i++){
        runningTotal = runningTotal +sourceArray[i]
    }
    return runningTotal
}

function reduceToAllTrue(sourceArray){

    for(let i = 0; i < sourceArray.length; i++){

        if (!sourceArray[i]) return false 
    }
    return true
}

function reduceToAnyTrue(sourceArray){

    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i]) return true 
    }
    return false
}