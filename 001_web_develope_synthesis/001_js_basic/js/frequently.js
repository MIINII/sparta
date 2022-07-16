// 객체
let blog = {
  owner: 'miinii',
  url: 'https://velog.io/@miinii',
  getPost() {
    // value : 함수도 가능
    console.log('js');
  }
};

// 기존 할당 방식
// let owner = blog.owner; // blog['owner']
// let getPost = blog.getPost();

// 비구조 할당 방식
// dictionary형태구조(키값)  = 똑같은 키값의 이름
let { owner, getPost } = blog;

console.log(owner)

// =====

let name = "miinii";
let job = "무직"

let user = {
  name,
  job
}

console.log(user)