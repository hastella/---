// 힙 요소 추가

class MaxHeap {
  constructor() {
    this.heap = [null]; // 인덱스 0은 사용하지 않기 위해 null을 넣어줌
  }

  push(value) {
    this.heap.push(value); // 힙의 마지막에 요소를 추가
    let currentIndex = this.heap.length - 1; // 추가된 요소의 인덱스
    let parentIndex = Math.floor(currentIndex / 2); // 부모 요소의 인덱스

    while (parentIndex != 0 && this.heap[parentIndex] < value) {
      // 부모 요소가 존재하고, 부모 요소가 추가된 요소보다 작을 때
      const temp = this.heap[parentIndex]; // 부모 요소와 추가된 요소를 교체
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  // 힙 요소 제거

  pop() {
    const returnValue = this.heap[1]; // 루트 요소를 반환하기 위해 임시로 상수에 저장
    this.heap[1] = this.heap.pop(); // 마지막 요소를 루트 요소로 변경

    // 루트에서부터 아래로 내려가기 위한 변수를 미리 설정해준다.
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 왼쪽 자식 요소가 존재할 때까지 반복한다.
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentINdex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightINdex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(30);
heap.push(35);
heap.push(20);
heap.push(21);
console.log(heap.heap); // [null, 45, 30, 35, 20, 21]

const array = [];
array.push(heap.pop()); // 45
array.push(heap.pop()); // 35
array.push(heap.pop()); // 30
array.push(heap.pop()); // 21
array.push(heap.pop()); // 20
console.log(array); // [45, 35, 30, 21, 20] - heap sort 해주는 기능!
