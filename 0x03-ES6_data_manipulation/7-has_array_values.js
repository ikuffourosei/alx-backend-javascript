function hasValuesFromArray(set, array) {
  for (const num of array) {
    if (set.has(num) === false) {
      return false;
    }
  }
  return true;
}
export default hasValuesFromArray;
