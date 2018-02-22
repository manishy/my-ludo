const assert = require('chai').assert;
const path = require('path');
let Cell = require(path.resolve('src/models/cell.js'));

describe('Cell', () => {
    describe('#addCoin', () => {
      it('should add coin into cell ', () => {
        let cell = new Cell(1);
        let coin = {id:1};
        cell.addCoin(coin);
        assert.include(cell.coins,coin);
      });
    });
  });
