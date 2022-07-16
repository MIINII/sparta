//FUNCTION

// toUpperCase() : 대문자로 모든문자열을 바꿔줌
let myName = "odin"
console.log(myName.toUpperCase())


// split() : 특정 문자로 문자열을 나누고 싶은 경우
// -> 값을 나눈다음 list롤 만들어줌
let myEmail = "asdf@naver.com"

let result = myEmail.split('@');

console.log(result[0])
console.log(result[1])

let reulst2 = result[1].split('.')[0]

myEmail.split("@")[1].split('.')[0]
console.log(myEmail.split("@")[1].split('.')[0]) // naver

// 함수 만들기
// function 함수이름(필요한변수들){
//   내릴 명령들을 순차적으로 작성
// }

// 함수 사용하기
// 함수이름(필요한 변수들);