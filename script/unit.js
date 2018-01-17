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

Unit.prototype.drawMyUnit = function(parentElemId){
  let parentElem = document.getElementsByClassName(parentElemId)[0];

  let divUnit = document.createElement("div");
  divUnit.className = "myUnit";  
  parentElem.appendChild(divUnit);
  
  parentElem = divUnit;

  let divUnitImg = document.createElement("div");
  divUnitImg.className = "divUnitImg";
  parentElem.appendChild(divUnitImg);

  let divUnitInfoWrapper = document.createElement("div");
  divUnitInfoWrapper.className = "divUnitInfoWrapper";
  parentElem.appendChild(divUnitInfoWrapper);

  parentElem = divUnitImg;
  
  let imgUnit = document.createElement("img");
  imgUnit.className = "imgUnit";
  imgUnit.src = "img/"+this.name+".jpg";
  parentElem.appendChild(imgUnit);

  parentElem = divUnitInfoWrapper;

  let divUnitInfo = document.createElement("div");
  divUnitInfo.className = "divUnitInfo";
  divUnitInfo.innerHTML = this.name;
  parentElem.appendChild(divUnitInfo);
  divUnitInfo = document.createElement("div");
  divUnitInfo.className = "divUnitInfo";
  divUnitInfo.innerHTML = "ST: "+this.stamina + "/" + this.maxStamina;
  parentElem.appendChild(divUnitInfo);
  divUnitInfo = document.createElement("div");
  divUnitInfo.className = "divUnitInfo";
  divUnitInfo.innerHTML = "HP: "+this.healPoints + "/" + this.maxHealPoints;
  parentElem.appendChild(divUnitInfo);
}