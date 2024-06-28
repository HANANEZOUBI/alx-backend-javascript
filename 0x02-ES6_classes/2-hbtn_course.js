/**
 * A Class Representing a HolbertonCourse.
 */
export default class HolbertonCourse {
  /**
     * Creates a new HolbertonCourse.
     * @param {String} name - The name of the course.
     * @param {String} length - The length of the course.
     * @param {String} students - The students in the course.
     */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
     * Gets the name of the course.
     */
  get name() {
    return this._name;
  }

  /**
     * Sets the name of the course.
     */
  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
     * Gets the length of the course.
     */
  get length() {
    return this._length;
  }

  /**
     * Sets the length of the course.
     */
  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  /**
     * Gets the students in the course.
     */
  get students() {
    return this._students;
  }

  /**
     * Sets the students in the course.
     */
  set students(students) {
    if (Array.isArray(students) === false || students.every((student) => typeof student === 'string') === false) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
