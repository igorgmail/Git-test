const arr = [5, 2, 1, 3, 9, 0, 4, 6, 8, 7];
for (let i = 0; i < arr.length; i += 1) {
  for (let j = 0; j < arr.length - i; j += 1) {
    if (arr[j] > arr[j + 1]) {
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);

function myFunction() {
  console.log('My function');
}

myFunction();
