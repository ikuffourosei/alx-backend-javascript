class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(param) {
    if (typeof (param) === 'string') {
      this._name = param;
    }
  }

  set code(param) {
    if (typeof (param) === 'string') {
      this._code = param;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
export default Currency;
