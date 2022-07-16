let people = ['철수', '영희', '민수', '형준', '기남', '동희'];

// 이렇게 하면 리스트의 모든 원소를 한번에 출력
// i가 1씩 증가하면서, people의 원소를 차례대로 불러올 수 있게 됩니다.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// ==========================================

let scores = [
  { name: '철수', score: 90 },
  { name: '영희', score: 85 },
  { name: '민수', score: 70 },
  { name: '형준', score: 50 },
  { name: '기남', score: 68 },
  { name: '동희', score: 30 }
];

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// 이렇게 하면 리스트 내의 딕셔너리를 하나씩 출력할 수 있고,


for (let i = 0 ; i < scores.length ; i++) {
	if (scores[i]['score'] < 70) {
		console.log(scores[i]['name']);
	}
}

// 이렇게 하면 점수가 70점 미만인 사람들의 이름만 출력할 수도 있습니다.