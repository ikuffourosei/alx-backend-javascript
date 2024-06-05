class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    }
    if (typeof length === 'number') {
      this._length = length;
    }
    if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(param) {
    this._name = param;
  }

  get length() {
    return this._length;
  }

  set length(param) {
    this._length = param;
  }

  get students() {
    return this._students;
  }

  set students(param) {
    if (Array.isArray(param) && param.every((student) => typeof student === 'string')) {
      this._students = param;
    }
  }
}

export default HolbertonCourse;
