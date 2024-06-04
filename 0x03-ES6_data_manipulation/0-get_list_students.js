function getListStudents() {
  const firstObject = {
    id: 1,
    firstName: 'Guillame',
    location: 'San Francisco',
  };
  const secObject = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const ThirObject = {
    id: 3,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  return [firstObject, secObject, ThirObject];
}

export default getListStudents;
