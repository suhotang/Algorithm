// https://programmers.co.kr/learn/courses/30/lessons/12899
// 레벨 2 - 124 나라의 숫자
// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
// 자연수 매개변수 n을 124 나라에서 사용하는 숫자로 바꾼 값을 리턴하는 함수 작성

const numList = [4, 1, 2];
function solution(n) {
  let x = n;
  let answer = "";

  while (1) {
    if (x > 0 && x <= 3) {
      if (x === 3) {
        answer = "4" + answer;
      } else {
        answer = `${numList[x]}` + answer;
      }
      break;
    }

    // 몫
    const q = Math.floor(x / 3);
    // 나머지
    const r = x % 3;

    answer = `${numList[r]}` + answer;

    x = r === 0 ? q - 1 : q;
  }

  return answer;
}
