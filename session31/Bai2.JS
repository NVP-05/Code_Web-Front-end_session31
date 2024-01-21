function maxOfArr(...arrays) {
  console.log(arrays);
  let subArr = [];
  for (let array of arrays) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    subArr.push(max);
  }
  console.log(subArr);
}
let array = [1, 2, 3, 4];
let array2 = [-1, -2, -5];
let array3 = [4, 6, 9, 7];
maxOfArr(array, array2, array3);
