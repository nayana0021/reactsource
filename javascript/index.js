// map()
let arr1 = [1, 2, 3, 4, 5, 6];
// arr1.map((item) => console.log(item));

// arr1.map((item, idx) => console.log(idx, ":", item));

// 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아
// 새로운 배열 반환
const map1 = arr1.map((x) => x * 2);
console.log(map1);

// 구조분해
const array = [10, 11, 12];

// 배열 요소를 개별 변수에 담기
// const arr2 = array[0];
// const arr3 = array[1];
// const arr4 = array[2];
// console.log(arr2, arr3, arr4);

// const [arr2, arr3] = array; -> 앞에 것 두개만 담아줌
// const [arr2, arr3, arr4] = array;

// ... : spread => 배열 복사 (자바스크립트에 원래 있음)
const [arr2, ...arr4] = array;
console.log(arr2, arr4);

let varArr1 = ["num1", "num2"];
let varArr2 = ["num3", "num4"];
let varArr3 = [...varArr1, ...varArr2];
let varArr4 = [varArr1, varArr2]; // [["num1", "num2"],["num3", "num4"]]
console.log(varArr3);
console.log(varArr4);
