function Battle(squad, enemySquad) {
  this.squad = squad;
  this.enemySquad = enemySquad;
}

Battle.prototype.attack = function (attackedSquad, attackingSquad) {
  let attackedUnit = attackedSquad.getRandomUnit();
  let attackingUnit = attackingSquad.getRandomUnit();

  attackingUnit.attackedBy(attackedUnit);
}

Battle.prototype.finalBattleInfo = function () {

}

Battle.prototype.fight = function () {
  let self = this;
  let fight = setInterval(function () {
    try {
      self.attack.call(self, self.squad, self.enemySquad);
      self.squad.getAliveUnits();
      self.attack.call(self, self.enemySquad, self.squad);
      self.enemySquad.getAliveUnits();
    } catch (err) {
      console.error(err);
      clearInterval(fight);
    }
  }, 1000)
}