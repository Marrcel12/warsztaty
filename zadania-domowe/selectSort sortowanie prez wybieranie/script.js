 function selectionSort(a) {
 
  for (var i = -1; ++i < a.length;) {
      // Move forward from i and remember the position of the smallest value
      for (var m = j = i; ++j < a.length;) {
          // If the value at j is smaller than our current minimum, remember it's position
          if (a[m] > a[j]) m = j;
      }

      // Swap the value at i with the minimum value following i
      var t = a[m];
      a[m] = a[i];
      a[i] = t;
    }
  return a;
}
console.log(selectionSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]));