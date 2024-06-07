import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error(`Evacuate slowly the ${this._floors} floors`);
    }
  }
}
