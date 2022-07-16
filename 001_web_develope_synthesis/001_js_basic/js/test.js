// // 기존
// let a = function() {
//   console.log("function");
// }
// a();

// // 화살표 함수
// let a = () => {
//   console.log("arrow function");
// }
// a();

let fruit_list = ['사과','감','감','배','포도','포도','딸기',
'포도','감','수박','딸기']

let count = 0;
fruit_list.map((fruit_list)=>{
  if(fruit_list=="딸기")
  count+=1;
})

console.log(count)


let podo = fruit_list.filter((podo)=>{
  return podo == "포도"
})

console.log(podo)