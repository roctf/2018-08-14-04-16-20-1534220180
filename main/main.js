module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.countit()}
o) 平均值 = ${sequence.average()}`// Write your code here
);
};

class Sequence {
  constructor(input) {
    this.arr =input;// Write your code here
  }

  minimum() {
	var a = this.arr;
	var b = a[0];
    for(var i=1; i<a.length;i++)
		if(b>a[i])
			b = a[i];
	return b;// Write your code here
  }
  maximum() {
	var a = this.arr;
	var b = a[0];
    for(var i=1; i<a.length;i++)
		if(b<a[i])
			b = a[i];
	return b;// Write your code here
  }
  countit() {
	var a = this.arr;
	var b = a.length;
	return b;// Write your code here
  }
  average() {
	var a = this.arr;
	var b, sum = 0;
    for(var i=0; i<a.length;i++)
			sum += a[i];
	b = sum/a.length;
	b = b.toFixed(2); 
	return b;// Write your code here
  }
  // Write your code here
}