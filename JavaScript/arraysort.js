const originalArray = [5, 2, 9, 1, 5, 6];
function compareDescending(a, b) {
  return b - a;
}
const descendingArray = originalArray.slice().sort(compareDescending);
console.log("Original Array:", originalArray);
console.log("Descending Array:", descendingArray);
