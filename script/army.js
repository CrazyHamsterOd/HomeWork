//-----Unit
function Unit(name, healPoints, stamina, damage) {
  this.name = name;
  this.healPoints = this.maxHealPoints = healPoints;
  this.stamina = this.maxStamina = stamina;
  this.damage = damage;
}

Unit.prototype.createUnit = function (name, healPoints, stamina, damage) {
  return new Unit(name, healPoints, stamina, damage);
}

Unit.prototype.moveUnit = function (distance) {
  this.stamina -= distance;
}

Unit.prototype.isReadyToMove = function (distance) {
  return this.stamina >= distance;
}

Unit.prototype.isReadyToBattle = function (damage) {
  return this.healPoints > damage;
}

Unit.prototype.healUnit = function () {
  this.healPoints = this.maxHealPoints;
}

Unit.prototype.recoveryUnit = function () {
  this.stamina = this.maxStamina;
}

Unit.prototype.cloneUnit = function () {
  return new Unit(this.name, this.healPoints, this.stamina, this.damage);
}

Unit.prototype.attackedBy = function (enemy) {
  this.healPoints -= enemy.damage;
  console.log(this.name + " attacked " + enemy.name + " by " + enemy.damage + " damage.");
  this.infoHP();
}

Unit.prototype.isAlive = function () {
  return this.healPoints > 0;
}

Unit.prototype.infoHP = function(){
  if(this.healPoints > 0){
    console.log(this.name + " it has " + this.healPoints + "/" + this.maxHealPoints + ".");
  }else{
    console.log(this.name + " is dead.");
  }
}

Unit.prototype.drawUnit = function(parentElemId, enemy){
  let parentElem = document.getElementById(parentElemId);
  let divUnit = document.createElement("div");
  if(enemy){
    divUnit.className = "enemyUnit";
  }else{
    divUnit.className = "myUnit";
  }  
  divUnit.nodeValue = this.name;
  parentElem.appendChild(divUnit);
}