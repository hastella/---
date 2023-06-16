// 자동 완성 문제풀이
// 포털 다음에서 검색어 자동완성 기능을 넣고 싶은 라이언은 한 번 입력된 문자열을 학습해서 다음 입력 때 활용하고 싶어 졌다. 예를 들어, go 가 한 번 입력되었다면, 다음 사용자는 g 만 입력해도 go를 추천해주므로 o를 입력할 필요가 없어진다! 단, 학습에 사용된 단어들 중 앞부분이 같은 경우에는 어쩔 수 없이 다른 문자가 나올 때까지 입력을 해야 한다.
// 효과가 얼마나 좋을지 알고 싶은 라이언은 학습된 단어들을 찾을 때 몇 글자를 입력해야 하는지 궁금해졌다.
//
// 예를 들어, 학습된 단어들이 아래와 같을 때
//
// go
// gone
// guild
// go를 찾을 때 go를 모두 입력해야 한다.
// gone을 찾을 때 gon 까지 입력해야 한다. (gon이 입력되기 전까지는 go 인지 gone인지 확신할 수 없다.)
// guild를 찾을 때는 gu 까지만 입력하면 guild가 완성된다.
// 이 경우 총 입력해야 할 문자의 수는 7이다.
//
// 라이언을 도와 위와 같이 문자열이 입력으로 주어지면 학습을 시킨 후, 학습된 단어들을 순서대로 찾을 때 몇 개의 문자를 입력하면 되는지 계산하는 프로그램을 만들어보자.

function makeTrie(words) {
  const root = {}; // 빈 객체를 만들어서 root로 설정

  for (const word of words) {
    // words 배열을 순회하면서
    let currentNode = root; // 루트 노드를 현재 노드로 설정

    for (const char of word) {
      // 단어의 글자를 하나씩 추출한 후
      if (!currentNode[char]) currentNode[char] = [0, {}]; // 값을 넣는다. 리스트의 첫 번째 값은 학습된 단어가 몇 개인지를 카운팅하고 두 번째 값은 트리 구조로 이용할 노드 값으로 사용한다.
      currentNode[char][0] = 1 + (currentNode[char][0] || 0); // 단어가 학습될 때마다 카운팅 1
      currentNode = currentNode[char][1]; // 현재 노드를 자식 노드로 변경
    }
  }
  return root;
}

function solution(words) {
  let answer = 0;
  const trie = makeTrie(words); // 트라이 구조 생성

  for (const word of words) {
    let count = 0;
    let currentNode = trie; // 루트 노드를 현재 노드로 설정

    for (const [index, char] of [...word].entries()) {
      // 단어의 글자를 하나씩 추출한 후
      count += 1; // 카운팅 1
      if (currentNode[char][0] <= 1) {
        // 현재 노드의 첫 번째 값이 1보다 작거나 같다면 (학습된 단어가 1개라면)
        break;
      }
      currentNode = currentNode[char][1]; // 다음 노드로 이동
    }
    answer += count;
  }
  return answer;
}
