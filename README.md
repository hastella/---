# 자료구조, 알고리즘 공부

### 자료구조 (도구)

: 메모리를 효율적으로 사용하며 빠르고 안정적으로 데이터를 처리하는 것이 목표

- 선형 구조: 배열, 연결 리스트, 스택, 큐
- 비선형 구조: 트리, 그래프

### 알고리즘 (레시피)

: 특정 문제를 효율적이고 빠르게 해결하는 것이 목표

- Binary Search
- Shortest Path

### 배열, 연결 리스트 공부

- 연결 리스트의 핵심로직: 요소 찾기, 추가, 삭제
- 연결 리스트 종류: 단일 연결 리스트, 이중 연결 리스트, 원형 연결 리스트

🗄 #연결리스트의순환여부확인

### 스택: Last In First Out - like 프링글스

- push: 요소 추가
- pop: 요소 삭제
- top: 최상단의 요소

🗄 #올바른괄호여부확인

### 큐: First In First Out - like 줄서기

- Enqueue: 요소 추가
- Dequeue: 요소 삭제

🗄 #프린터

### 해시 테이블: like 사물함 (이름과 번호로 식별)

- 키와 값을 받아 키를 해싱(Hashing)하여 나온 index에 값을 저장하는 선형 자료구조

해시 함수: 입력받은 값을 특정 범위 내 숫자로 변경하는 함수

해시 충돌(Hash Collision): 해시 함수의 결과가 동일하게 겹치는 경우

- 선형 탐사법: 충돌이 발생하면 옆으로 한 칸 이동
- 제곱 탐사법: 발생한 횟수의 제곱만큼 옆으로 이동
- 이중 해싱: 다른 해시 함수 이용
- 분리 연결법

🗄 #베스트 앨범 수록

### 그래프 (비선형 자료구조): 방향 그래프 & 무방향 그래프

- 탐색시에 사이클이 발생할 수 있다.

트리: 방향 그래프의 일종으로 정점을 가리키는 간선이 하나밖에 없는 구조를 가지고 있다. like 조직도
Root -> Node -> Leaf Node

이진트리: Root가 최대 2개의 자식을 가지는 트리

힙: 이진트리 형태를 가지며 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제 될 때 바로 정렬된다. -> 우선순위 큐(FIFO인 큐와 달리 우선 순위가 높은 요소가 먼저 나가는 큐)를 구현하기에 좋다.

- 우선순위가 높은 요소가 먼저 나간다.

🗄 #배상 비용 최소화 실습

### 트라이 Trie (비선형 자료구조): 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조

- 검색어 자동완성, 사전 찾기 등에 응용될 수 있다.
- 각 정점이 자식에 대한 링크를 전부 가지고 있기 때문에 저장 공간을 많이 사용한다.

![image](https://github.com/hastella/Algorithms_DataStructure_Study/assets/66244752/0a0f1f40-1de6-4cf7-9aeb-ed7f779b32ee)

🗄 #자동 완성

### 이진 탐색: 정렬되어 있는 요소들을 반씩 제외하며 찾는 알고리즘

- 반드시 정렬이 되어있어야 사용가능
- 배열 또는 이진 트리를 이용하여 구현가능

🗄 #입국심사 실습

### BFS, DFS

Breadth-First Search (너비 우선탐색) & Depth-First Search (깊이 우선탐색)

BFS는 같은 깊이에 해당하는 정점부터 탐색 -> Queue를 이용하여 구현 가능
DFS는 최대한 깊은 정점부터 탐색 -> Stack을 이용하여 구현 가능

🗄 #가장 먼 노드
