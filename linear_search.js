const number = [10,20,30,50,-50,400,500,48,40,59,80,90,100];

function linear_search(array, target){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

const index = linear_search(number, 5010);
console.log(index);