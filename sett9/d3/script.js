const arr1 = [5, 8, 12, 40];
const arr2 = [3, 7, 10, 40];

function mergeArray(arr1, arr2) {
    let arr3 = [...arr1, ...arr2];
    arr3.sort(function(a, b) {
        return a - b;
    });

    const arr4 = [...new Set(arr3)];
    console.log(arr4);
}

mergeArray(arr1, arr2);