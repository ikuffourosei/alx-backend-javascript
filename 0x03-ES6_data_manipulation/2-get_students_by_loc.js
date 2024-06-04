function getStudentsByLocation(list, city) {
  const result = list.filter((item) => item.location === city);
  return result;
}

export default getStudentsByLocation;
