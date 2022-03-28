//x보다 작은수
//https://www.acmicpc.net/problem/10871

const fs = require('fs');
//const input = fs.readFileSync('test.txt').toString().split(' '); //확인용
const input = fs.readFileSync('/dev/stdin').toString().split(' '); //제출용
const length = Number(input[0]);
const standard = Number(input[1]);
const array = [...input.splice(2)];
const small = array.filter(el => el < standard).join(' ');

console.log(small);


