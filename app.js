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

// console.log(arr, pos);

function Man(name) {
  this.name = name;
  this.age = 30;
  this.rate = Math.floor(Math.random() * (10 + 1));
  this.icon = (this.rate > 5) ? '*' : '()';
  this.position = (function p(pos) { return pos + this.position + 1; });
}

for (let i = 0; i < 20; i++) {
  console.log(new Man('adam', 5));
}
