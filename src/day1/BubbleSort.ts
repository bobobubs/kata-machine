export default function bubble_sort(arr: number[]): void {
  //iterate through the array n times
  for (let i = 0; i < arr.length; ++i){
    // in each iteration do swaps on a smaller and smaller subset
    for (let j = 0; j < arr.length - 1 - i; ++j){
      if (arr[j] > arr[j + 1]){
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}
