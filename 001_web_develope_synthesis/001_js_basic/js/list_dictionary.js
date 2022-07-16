// List

let a_list = []; //list를 선언, 변수 이름은 아무렇게나..
let b_list = [1, 2, 'miinii', 3];

console.log(b_list[1]); // 2
console.log(b_list[2]); // miinii

// 리스트에 요소 넣기
b_list.push('어쩌구저쩌구');
console.log(b_list); // [ 1, 2, 'miinii', 3, '어쩌구저쩌구' ]

// 리스트의 길이 구하기
b_list.length;

// Dictionary

let aDict = {}; // dictionary 선언

let bDict = {
  name: '나는',
  age: 25
};

bDict['name'];
console.log(bDict['name']);

bDict['height'] = 200;
console.log(bDict);
console.log(bDict.name) // 나는

// LIST + DICT

names = [
  {
    name: 'zeplin',
    age: 29
  },
  {
    name: 'soda',
    age: 100
  }
];

console.log(names[0]); // { name: 'zeplin', age: 29 }
console.log(names[1]) // { name: 'soda', age: 100 }

new_name = {'name':"위오아왼", 'age':400}
names.push(new_name)

console.log(names) // [ { name: 'zeplin', age: 29 }, { name: 'soda', age: 100 }, { name: '위오아왼', age: 400 } ]