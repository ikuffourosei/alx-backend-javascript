export default function appendToEachArrayValue(array, appendString) {
  for (let idx in array) {
    let items = array[idx];
    let result = appendString + items;
    array[idx] = result
  }

  return array;
}
