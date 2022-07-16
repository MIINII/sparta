// 1. input-q1의 입력값을 가져온다. $('# .... ').val() 이렇게!
// 2. 만약 입력값이 빈칸이면 if(입력값=='')
// 3. alert('입력하세요!') 띄우기
// 4. alert(입력값) 띄우기
function q1() {
  let value = $('#input-q1').val();
  if (value == '') {
    alert('입력하쇼!');
  } else {
    alert(value);
  }
}

// 1. input-q2 값을 가져온다.
// 2. 만약 가져온 값에 @가 있으면 (includes 이용하기 - 구글링!)
// 3. info@gmail.com -> gmail 만 추출해서 ( .split('@') 을 이용하자!)
// 4. alert(도메인 값);으로 띄우기
// 5. 만약 이메일이 아니면 '이메일이 아닙니다.' 라는 얼럿 띄우기
function q2() {
  let email = $('#input-q2').val();

  if (email.includes('@')) {
    // true
    let domainWithDot = email.split('@')[1];
    let onlyDomain = domainWithDot.split('.')[0];
    alert(onlyDomain);
  } else {
    console.log('이메일 아니라는뎁쇼?');
  }
}

// 1. input-q3 값을 가져온다. let txt = ... q1, q2에서 했던 걸 참고!
// 2. 가져온 값을 이용해 names-q3에 붙일 태그를 만든다. (let temp_html = `<li>${txt}</li>`) 요렇게!
// 3. 만들어둔 temp_html을 names-q3에 붙인다.(jQuery의 $('...').append(temp_html)을 이용하면 굿!)
function q3() {
  let name = $('#input-q3').val();
  if (name == '') {
    alert('이름!');
  } else {
    let temp_html = `<li>${name}</li>`;
    $('#names-q3').append(temp_html);
  }
}

function q3_remove() {
  // 1. names-q3의 내부 태그를 모두 비운다.(jQuery의 $('....').empty()를 이용하면 굿!)
  $('#names-q3').empty()
}
