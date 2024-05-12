function qs(arr: number[], lo: number, hi: number): void {
  //base case
  if (lo >= hi){
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  //perform recurive quick sorts making sure to exclude the pivot
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);

}

// returns the pivot index
function partition(arr: number[], lo: number, hi: number): number{

  //initaliize the pivot to be at the hi end of the array
  const pivot = arr[hi];

  let idx = lo - 1;

  //perform the weak sort
  for (let i = lo; i < hi; ++i){
    if (arr[i] <= pivot) {
      idx++;

      //swap
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
  // move the pivot
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);


}
