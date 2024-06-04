function getStudentIdsSum(list) {
  const newList = list.map((items) => items.id);
  return newList.reduce((first, second) => first + second);
}

export default getStudentIdsSum;
