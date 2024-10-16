const fibs = (n) => {
    let array = [1, 1];
    for(let i = 2; i <= n; i++) {
        array[i] = array[i-2] + array[i-1];
    }
    return array;
}

const fibsRec = (n) => {
    if (n < 2) {
        return 1;
    }
    return (fibsRec(n-1) + fibsRec(n-2));
}

const mergeSort = (array) => {
    if(array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    if(left.length === 0) return right;
    if(right.length === 0) return left;

    if(left[0] < right[0]) {
        return [left[0]].concat(merge(left.slice(1), right));
    } else {
        return [right[0]].concat(merge(left, right.slice(1)));
    }
}

console.log(mergeSort([105, 79, 100, 110]));