export default class HolbertonClass {
  constructor(size, location) {
    this._seze = size;
    this._location = location;
  }

  [Symbol.toPrimitive](input) {
    if (input === 'number') {
      return this._seze;
    }
    return this._location;
  }
}
