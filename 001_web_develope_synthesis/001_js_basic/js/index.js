// 0부터 n-1까지 더하는 함수

function getSum(n){
  let sum = 0;
  for(let i = 0; i<n; i++){
    sum += i; // sum = sum + i
  }
  return sum
}

let result = getSum(10);
console.log(result)

let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']

let count = 0; // 01. 카운팅할 기준 변수
for(let i = 0; i<=fruit_list.length; i++){
  let fruit = fruit_list[i]; // 02. 보기 쉽게하기 위해서
  if(fruit == "딸기"){
    count +=1;
  }
}

console.log(count)

