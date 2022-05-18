// https://programmers.co.kr/learn/courses/30/lessons/12899
// 레벨 2 - 124 나라의 숫자
// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
// 자연수 매개변수 n을 124 나라에서 사용하는 숫자로 바꾼 값을 리턴하는 함수 작성

// 나머지 값을 index로 아래와 같은 값을 가짐
const matchRemainValue = [4, 1, 2];

function solution(n) {
  let x = n;
  let answer = "";

  while (1) {
    // 남은 몫이 1, 2, 3 중 하나라면
    if (x > 0 && x <= 3) {
      // x 값에 따라 앞에 숫자를 붙임
      // x가 1이면 1, 2면 2, 3이면 4
      if (x === 3) {
        answer = "4" + answer;
      } else if (x === 2) {
        answer = "2" + answer;
      } else {
        answer = "1" + answer;
      }
      // 반복문을 빠져나옴
      break;
    }

    // 몫
    const q = Math.floor(x / 3);
    // 나머지
    const r = x % 3;

    // 현재 나머지에 따른 값을 answer 앞에 붙여나감
    answer = `${matchRemainValue[r]}` + answer;

    // 나머지가 0 이라면 몫을 -1 해줘야 함
    x = r === 0 ? q - 1 : q;
  }

  return answer;
}
