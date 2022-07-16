// AND 조건은 이렇게
function is_adult(age, sex){
	if(age > 20 && sex == '여'){
		alert('성인 여성')
	} else if (age > 20 && sex == '남') {
		alert('성인 남성')
	} else {
		alert('청소년이에요')
	}
}

// 참고: OR 조건은 이렇게
function is_adult(age, sex){
	if (age > 65 || age < 10) {
		alert('탑승하실 수 없습니다')
	} else if(age > 20 && sex == '여'){
		alert('성인 여성')
	} else if (age > 20 && sex == '남') {
		alert('성인 남성')
	} else {
		alert('청소년이에요')
	}
}

is_adult(25,'남')