// 1. input-q1의 입력값을 가져온다. $('# .... ').val() 이렇게!
// 2. 만약 입력값이 빈칸이면 if(입력값=='')
// 3. alert('입력하세요!') 띄우기
// 4. alert(입력값) 띄우기
function q1() {
  let q1_input = $('#input-q1').val();

  if (q1_input == '') {
    alert('입력하세요!');
  } else {
    alert(q1_input);
  }
}

// 1. input-q2 값을 가져온다.
// 2. 만약 가져온 값에 @가 있으면 (includes 이용하기 - 구글링!)
// 3. info@gmail.com -> gmail 만 추출해서 ( .split('@') 을 이용하자!)
// 4. alert(도메인 값);으로 띄우기
// 5. 만약 이메일이 아니면 '이메일이 아닙니다.' 라는 얼럿 띄우기

function q2() {
  let q2Value = $('#input-q2').val();
  // const q2Domain = q2Value.split('@');
  console.log(q2Value);

  // if (q2Value == q2Value.includes('@')) { // includes: true
  //   alert(q2Domain);
  // } else {
  //   alert('이메일이 아닙니다잉!');
  // }
}
