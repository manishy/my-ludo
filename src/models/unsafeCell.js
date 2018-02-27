const Cell = require('./cell.js');

class UnsafeCell extends Cell {
  constructor(position) {
    super(position);
  }
  removeCoin(coinId){
    let coinIndex = this.coins.findIndex(coin=>coin.id == coinId);
    return this.coins.splice(coinIndex,1).pop();
  }
  addCoin(coin){
    let status = {killedOppCoin:false};
    coin.setPosition(this.getPosition());
    this.coins.push(coin);
    if (this.coins.length > 1) {
      let oldCoin = this.coins.shift();
      status.killedOppCoin = true;
      status.diedCoin = oldCoin.getStatus();
    }
    return status;
  }
  canPlace(coin){
    return !this.coins.some(prevCoin=>prevCoin.getColor()==coin.getColor());
  }
}

module.exports = UnsafeCell;
